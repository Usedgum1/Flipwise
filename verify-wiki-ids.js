/**
 * Verify flipwise-data item IDs/names match OSRS Wiki mapping.
 * Prefers live API; falls back to wiki-mapping.json.
 * Run: node verify-wiki-ids.js
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const vm = require('vm');

function loadMapping(cb) {
  const localPath = path.join(__dirname, 'wiki-mapping.json');
  const req = https.get('https://prices.runescape.wiki/api/v1/osrs/mapping', {
    headers: { Accept: 'application/json', 'User-Agent': 'FlipwiseVerify/1.0' }
  }, function (res) {
    let body = '';
    res.on('data', function (c) { body += c; });
    res.on('end', function () {
      try {
        const j = JSON.parse(body);
        if (Array.isArray(j) && j.length) return cb(null, j, 'live');
      } catch (e) {}
      try {
        cb(null, JSON.parse(fs.readFileSync(localPath, 'utf8')), 'local');
      } catch (e2) {
        cb(e2);
      }
    });
  });
  req.on('error', function () {
    try {
      cb(null, JSON.parse(fs.readFileSync(localPath, 'utf8')), 'local');
    } catch (e) {
      cb(e);
    }
  });
  req.setTimeout(10000, function () { req.destroy(); });
}

function collectChecks(F) {
  const checks = [];
  function add(id, name, src) {
    if (id == null) return;
    checks.push({ id: Number(id), name: name ? String(name) : null, src: src });
  }
  [
    'FLIP_ITEMS', 'THIRD_AGE_ITEMS', 'HIGH_VOLUME_ITEMS', 'HERBLORE_ITEMS',
    'KNIFE_ITEMS', 'CANNON_ITEMS', 'ODIUM_SHARD_ITEMS', 'MALEDICTION_SHARD_ITEMS',
    'TREE_SAPLING_ITEMS'
  ].forEach(function (key) {
    (F[key] || []).forEach(function (it) { add(it.id, it.name, key); });
  });
  (F.DECANTING_ITEMS || []).forEach(function (it) {
    add(it.id4, it.name, 'DECANTING');
    [it.id1, it.id2, it.id3].forEach(function (id) { add(id, null, 'DECANT_DOSE'); });
  });
  (F.TREE_SAPLING_ITEMS || []).forEach(function (it) { add(it.seed_id, null, 'SEED'); });
  [
    ['CANNON_SET', F.MULTICANNON_ID],
    ['SOUL', F.SOUL_RUNE_ID],
    ['SANDWORM', F.SANDWORM_ID],
    ['LOCKPICK', F.LOCKPICK_ID],
    ['DRAGONFRUIT', F.DRAGONFRUIT_ID],
    ['DRAGONBREATH', F.BOTTLED_DRAGONBREATH_ID],
    ['MITHRIL_SEED', F.MITHRIL_SEED_ID],
    ['BANDIT_BREW', F.BANDITS_BREW_ID],
    ['ODIUM_WARD', F.ODIUM_WARD_ID],
    ['MALEDICTION_WARD', F.MALEDICTION_WARD_ID]
  ].forEach(function (pair) { add(pair[1], null, pair[0]); });
  (F.GEM_CUTTING_ITEMS || []).forEach(function (it) {
    add(it.uncut_id, it.uncut_name, 'GEM');
    add(it.cut_id, it.cut_name, 'GEM');
  });
  (F.SHOPS_TO_GE_ITEMS || []).forEach(function (it) {
    add(it.item_id, it.display_name, 'SHOP');
  });
  (F.ENCHANTING_RECIPES || []).forEach(function (r) {
    add(r.output_id, r.output_name, 'ENC');
    (r.inputs || []).forEach(function (i) { add(i.id, i.name, 'ENC'); });
  });
  (F.OUTFIT_SET_RECIPES || []).forEach(function (r) {
    add(r.output_id, r.output_name, 'OUT');
    (r.inputs || []).forEach(function (i) { add(i.id, i.name, 'OUT'); });
  });
  return checks;
}

loadMapping(function (err, mapping, source) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const byId = {};
  mapping.forEach(function (item) {
    if (item && item.id != null) byId[item.id] = item.name;
  });

  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(__dirname, 'js/flipwise-data.js'), 'utf8'), ctx);
  const F = ctx.Flipwise;

  let ok = 0;
  const bad = [];
  const seen = {};
  collectChecks(F).forEach(function (c) {
    const key = c.id + '|' + c.name;
    if (seen[key]) return;
    seen[key] = true;
    const live = byId[c.id];
    if (live === undefined) bad.push({ id: c.id, expected: c.name || '(any name)', wiki: '(missing)', src: c.src });
    else if (c.name && live !== c.name) bad.push({ id: c.id, expected: c.name, wiki: live, src: c.src });
    else ok++;
  });

  console.log('Verified against', source === 'live' ? 'live OSRS mapping' : 'wiki-mapping.json');
  console.log('OK:', ok);
  if (bad.length) {
    console.log('Mismatches or missing:');
    bad.forEach(function (b) {
      console.log('  [' + b.src + '] id', b.id, '| expected:', b.expected, '| wiki:', b.wiki);
    });
    process.exit(1);
  }
  console.log('All IDs/names match.');
});
