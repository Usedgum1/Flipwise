/**
 * Flipwise — OSRS item definitions (for API and tables).
 */
var Flipwise = window.Flipwise || {};

Flipwise.MAX_TAX = 5000000;

// Trade Scanner (match Python)
Flipwise.SCANNER_MIN_PROFIT = 50000;
Flipwise.SCANNER_MIN_ROI = 3.0;
Flipwise.SCANNER_MAX_AGE_SECONDS = 86400;  // 24 hours
Flipwise.SCANNER_TOP_N = 20;
// Trend levels: 3-up = profit >= TREND_MEDIUM_UP, 3-down = profit <= -TREND_MEDIUM_UP (events log only; higher = less frequent)
Flipwise.TREND_NEUTRAL_MIN = -500000;
Flipwise.TREND_NEUTRAL_MAX = 500000;
Flipwise.TREND_SMALL_UP = 5000000;
Flipwise.TREND_MEDIUM_UP = 10000000;

// Unusual Methods (match Python)
Flipwise.KNIFE_BUY_LIMIT = 7000;
Flipwise.KNIFE_ITEMS = [
  { id: 22804, name: "Dragon knife" },
  { id: 22806, name: "Dragon knife(p)" },
  { id: 22808, name: "Dragon knife(p+)" },
  { id: 22810, name: "Dragon knife(p++)" }
];
Flipwise.CANNON_ITEMS = [
  { id: 6, name: "Cannon base" },
  { id: 8, name: "Cannon stand" },
  { id: 10, name: "Cannon barrels" },
  { id: 12, name: "Cannon furnace" }
];
Flipwise.MULTICANNON_ID = 12863;
Flipwise.NULODION_COST = 750000;
Flipwise.CANNON_HOURLY_RATE = 157;
Flipwise.ODIUM_WARD_ID = 11926;
Flipwise.ODIUM_SHARD_ITEMS = [
  { id: 11928, name: "Odium shard 1" },
  { id: 11929, name: "Odium shard 2" },
  { id: 11930, name: "Odium shard 3" }
];
Flipwise.ODIUM_BULK_PER_HOUR = 20;
Flipwise.MALEDICTION_WARD_ID = 11924;
Flipwise.MALEDICTION_SHARD_ITEMS = [
  { id: 11931, name: "Malediction shard 1" },
  { id: 11932, name: "Malediction shard 2" },
  { id: 11933, name: "Malediction shard 3" }
];
Flipwise.MALEDICTION_BULK_PER_HOUR = 20;
Flipwise.BANDITS_BREW_ID = 4627;
Flipwise.BANDIT_TRADER_GP = 750;
Flipwise.BANDIT_HOURLY_RATE = 929;
Flipwise.SANDWORM_PACK_ID = 13432;
Flipwise.SANDWORM_ID = 13431;
Flipwise.SANDWORM_PACK_GP = 11100;
Flipwise.SANDWORM_PACK_QTY = 100;
Flipwise.SANDWORM_HOURLY_RATE = 5400;
Flipwise.LOCKPICK_ID = 1523;
Flipwise.LOCKPICK_FIXED_GP = 20;
Flipwise.LOCKPICK_HOURLY_RATE = 6000;
Flipwise.SOUL_RUNE_ID = 566;
Flipwise.WIZARD_AKUTHA_50_GP = 308;
Flipwise.WIZARD_AKUTHA_100_GP = 315;
Flipwise.WIZARD_AKUTHA_150_GP = 338;
Flipwise.SOUL_RUNE_QUANTITY = 67000;
Flipwise.DRAGONFRUIT_ID = 22929;
Flipwise.BOTTLED_DRAGONBREATH_ID = 23002;
Flipwise.DRAGONBREATH_HOURLY_RATE = 450;
Flipwise.MITHRIL_SEED_ID = 299;
Flipwise.MITHRIL_SEED_FIXED_GP = 350;
Flipwise.MITHRIL_SEED_HOURLY_RATE = 1945;
Flipwise.SET_MAKING_RECIPES = [
  { name: "Torva armour set", set_id: 31145, pieces: [{ id: 26382 }, { id: 26384 }, { id: 26386 }] },
  { name: "Inquisitor's armour set", set_id: 24488, pieces: [{ id: 24419 }, { id: 24420 }, { id: 24421 }] },
  { name: "Ancestral robes set", set_id: 21049, pieces: [{ id: 21018 }, { id: 21021 }, { id: 21024 }] },
  { name: "Dragon armour set (lg)", set_id: 21882, pieces: [{ id: 11335 }, { id: 21892 }, { id: 4087 }, { id: 21895 }] },
  { name: "Masori armour set (f)", set_id: 27355, pieces: [{ id: 27235 }, { id: 27238 }, { id: 27241 }] },
  { name: "Virtus armour set", set_id: 31148, pieces: [{ id: 26241 }, { id: 26243 }, { id: 26245 }] }
];

// Enchanting recipes: inputs (buy low) → output (sell high); profit after GE tax
Flipwise.ENCHANTING_RECIPES = [
  {
    key: 'fury',
    title: 'Amulet of fury',
    output_id: 6585,
    output_name: 'Amulet of fury',
    inputs: [
      { id: 6581, name: 'Onyx amulet', qty: 1 },
      { id: 564, name: 'Cosmic rune', qty: 1 },
      { id: 554, name: 'Fire rune', qty: 20 },
      { id: 557, name: 'Earth rune', qty: 20 }
    ]
  },
  {
    key: 'suffering',
    title: 'Ring of suffering',
    output_id: 19550,
    output_name: 'Ring of suffering',
    inputs: [
      { id: 19538, name: 'Zenyte ring', qty: 1 },
      { id: 564, name: 'Cosmic rune', qty: 1 },
      { id: 566, name: 'Soul rune', qty: 20 },
      { id: 565, name: 'Blood rune', qty: 20 }
    ]
  },
  {
    key: 'berserker',
    title: 'Berserker necklace',
    output_id: 11128,
    output_name: 'Berserker necklace',
    inputs: [
      { id: 6577, name: 'Onyx necklace', qty: 1 },
      { id: 564, name: 'Cosmic rune', qty: 1 },
      { id: 554, name: 'Fire rune', qty: 20 },
      { id: 557, name: 'Earth rune', qty: 20 }
    ]
  },
  {
    key: 'anguish',
    title: 'Necklace of anguish',
    output_id: 19547,
    output_name: 'Necklace of anguish',
    inputs: [
      { id: 19535, name: 'Zenyte necklace', qty: 1 },
      { id: 564, name: 'Cosmic rune', qty: 1 },
      { id: 566, name: 'Soul rune', qty: 20 },
      { id: 565, name: 'Blood rune', qty: 20 }
    ]
  },
  {
    key: 'slaughter',
    title: 'Bracelet of slaughter',
    output_id: 21183,
    output_name: 'Bracelet of slaughter',
    inputs: [
      { id: 21123, name: 'Topaz bracelet', qty: 1 },
      { id: 564, name: 'Cosmic rune', qty: 1 },
      { id: 554, name: 'Fire rune', qty: 5 }
    ]
  },
  {
    key: 'torture',
    title: 'Amulet of torture',
    output_id: 19553,
    output_name: 'Amulet of torture',
    inputs: [
      { id: 19541, name: 'Zenyte amulet', qty: 1 },
      { id: 564, name: 'Cosmic rune', qty: 1 },
      { id: 566, name: 'Soul rune', qty: 20 },
      { id: 565, name: 'Blood rune', qty: 20 }
    ]
  },
  {
    key: 'tormented',
    title: 'Tormented bracelet',
    output_id: 19544,
    output_name: 'Tormented bracelet',
    inputs: [
      { id: 19532, name: 'Zenyte bracelet', qty: 1 },
      { id: 564, name: 'Cosmic rune', qty: 1 },
      { id: 566, name: 'Soul rune', qty: 20 },
      { id: 565, name: 'Blood rune', qty: 20 }
    ]
  },
  {
    key: 'glory',
    title: 'Amulet of glory',
    output_id: 1704,
    output_name: 'Amulet of glory',
    inputs: [
      { id: 1702, name: 'Dragonstone amulet', qty: 1 },
      { id: 564, name: 'Cosmic rune', qty: 1 },
      { id: 557, name: 'Earth rune', qty: 15 },
      { id: 555, name: 'Water rune', qty: 15 }
    ]
  },
  {
    key: 'wealth',
    title: 'Ring of wealth',
    output_id: 2572,
    output_name: 'Ring of wealth',
    inputs: [
      { id: 1645, name: 'Dragonstone ring', qty: 1 },
      { id: 564, name: 'Cosmic rune', qty: 1 },
      { id: 557, name: 'Earth rune', qty: 15 },
      { id: 555, name: 'Water rune', qty: 15 }
    ]
  },
  {
    key: 'skills_necklace',
    title: 'Skills necklace',
    output_id: 11113,
    output_name: 'Skills necklace',
    inputs: [
      { id: 1664, name: 'Dragon necklace', qty: 1 },
      { id: 564, name: 'Cosmic rune', qty: 1 },
      { id: 557, name: 'Earth rune', qty: 15 },
      { id: 555, name: 'Water rune', qty: 15 }
    ]
  },
  {
    key: 'combat_bracelet',
    title: 'Combat bracelet',
    output_id: 11126,
    output_name: 'Combat bracelet',
    inputs: [
      { id: 11115, name: 'Dragonstone bracelet', qty: 1 },
      { id: 564, name: 'Cosmic rune', qty: 1 },
      { id: 557, name: 'Earth rune', qty: 15 },
      { id: 555, name: 'Water rune', qty: 15 }
    ]
  },
  {
    key: 'ruby_bolts',
    title: 'Ruby bolts (e)',
    output_id: 9242,
    output_name: 'Ruby bolts (e)',
    output_qty: 10,
    inputs: [
      { id: 9339, name: 'Ruby bolts', qty: 10 },
      { id: 564, name: 'Cosmic rune', qty: 1 },
      { id: 554, name: 'Fire rune', qty: 5 },
      { id: 565, name: 'Blood rune', qty: 1 }
    ]
  },
  {
    key: 'ruby_dragon_bolts',
    title: 'Ruby dragon bolts (e)',
    output_id: 21944,
    output_name: 'Ruby dragon bolts (e)',
    output_qty: 10,
    inputs: [
      { id: 21967, name: 'Ruby dragon bolts', qty: 10 },
      { id: 564, name: 'Cosmic rune', qty: 1 },
      { id: 554, name: 'Fire rune', qty: 5 },
      { id: 565, name: 'Blood rune', qty: 1 }
    ]
  },
  {
    key: 'diamond_bolts',
    title: 'Diamond bolts (e)',
    output_id: 9243,
    output_name: 'Diamond bolts (e)',
    output_qty: 10,
    inputs: [
      { id: 9340, name: 'Diamond bolts', qty: 10 },
      { id: 564, name: 'Cosmic rune', qty: 1 },
      { id: 557, name: 'Earth rune', qty: 10 },
      { id: 563, name: 'Law rune', qty: 2 }
    ]
  },
  {
    key: 'diamond_dragon_bolts',
    title: 'Diamond dragon bolts (e)',
    output_id: 21946,
    output_name: 'Diamond dragon bolts (e)',
    output_qty: 10,
    inputs: [
      { id: 21969, name: 'Diamond dragon bolts', qty: 10 },
      { id: 564, name: 'Cosmic rune', qty: 1 },
      { id: 557, name: 'Earth rune', qty: 10 },
      { id: 563, name: 'Law rune', qty: 2 }
    ]
  },
  {
    key: 'dragonstone_bolts',
    title: 'Dragonstone bolts (e)',
    output_id: 9244,
    output_name: 'Dragonstone bolts (e)',
    output_qty: 10,
    inputs: [
      { id: 9341, name: 'Dragonstone bolts', qty: 10 },
      { id: 564, name: 'Cosmic rune', qty: 1 },
      { id: 557, name: 'Earth rune', qty: 15 },
      { id: 566, name: 'Soul rune', qty: 1 }
    ]
  },
  {
    key: 'dragonstone_dragon_bolts',
    title: 'Dragonstone dragon bolts (e)',
    output_id: 21948,
    output_name: 'Dragonstone dragon bolts (e)',
    output_qty: 10,
    inputs: [
      { id: 21971, name: 'Dragonstone dragon bolts', qty: 10 },
      { id: 564, name: 'Cosmic rune', qty: 1 },
      { id: 557, name: 'Earth rune', qty: 15 },
      { id: 566, name: 'Soul rune', qty: 1 }
    ]
  },
  {
    key: 'onyx_bolts',
    title: 'Onyx bolts (e)',
    output_id: 9245,
    output_name: 'Onyx bolts (e)',
    output_qty: 10,
    inputs: [
      { id: 9342, name: 'Onyx bolts', qty: 10 },
      { id: 564, name: 'Cosmic rune', qty: 1 },
      { id: 554, name: 'Fire rune', qty: 20 },
      { id: 560, name: 'Death rune', qty: 1 }
    ]
  },
  {
    key: 'onyx_dragon_bolts',
    title: 'Onyx dragon bolts (e)',
    output_id: 21950,
    output_name: 'Onyx dragon bolts (e)',
    output_qty: 10,
    inputs: [
      { id: 21973, name: 'Onyx dragon bolts', qty: 10 },
      { id: 564, name: 'Cosmic rune', qty: 1 },
      { id: 554, name: 'Fire rune', qty: 20 },
      { id: 560, name: 'Death rune', qty: 1 }
    ]
  }
];

// Outfit set recipes (buy pieces, combine/sell set); same tile shape as enchanting. Replaces Item Set Making tile.
Flipwise.OUTFIT_SET_RECIPES = [
  {
    key: 'torva',
    title: 'Torva armour set',
    output_id: 31145,
    output_name: 'Torva armour set',
    inputs: [
      { id: 26382, name: 'Torva full helm', qty: 1 },
      { id: 26384, name: 'Torva platebody', qty: 1 },
      { id: 26386, name: 'Torva platelegs', qty: 1 }
    ]
  },
  {
    key: 'inquisitor',
    title: "Inquisitor's armour set",
    output_id: 24488,
    output_name: "Inquisitor's armour set",
    inputs: [
      { id: 24419, name: "Inquisitor's great helm", qty: 1 },
      { id: 24420, name: "Inquisitor's hauberk", qty: 1 },
      { id: 24421, name: "Inquisitor's plateskirt", qty: 1 }
    ]
  },
  {
    key: 'ancestral',
    title: 'Ancestral robes set',
    output_id: 21049,
    output_name: 'Ancestral robes set',
    inputs: [
      { id: 21018, name: 'Ancestral hat', qty: 1 },
      { id: 21021, name: 'Ancestral robe top', qty: 1 },
      { id: 21024, name: 'Ancestral robe bottom', qty: 1 }
    ]
  },
  {
    key: 'dragon_lg',
    title: 'Dragon armour set (lg)',
    output_id: 21882,
    output_name: 'Dragon armour set (lg)',
    inputs: [
      { id: 11335, name: 'Dragon full helm', qty: 1 },
      { id: 21892, name: 'Dragon platebody', qty: 1 },
      { id: 4087, name: 'Dragon platelegs', qty: 1 },
      { id: 21895, name: 'Dragon kiteshield', qty: 1 }
    ]
  },
  {
    key: 'masori_f',
    title: 'Masori armour set (f)',
    output_id: 27355,
    output_name: 'Masori armour set (f)',
    inputs: [
      { id: 27235, name: 'Masori mask (f)', qty: 1 },
      { id: 27238, name: 'Masori body (f)', qty: 1 },
      { id: 27241, name: 'Masori chaps (f)', qty: 1 }
    ]
  },
  {
    key: 'virtus',
    title: 'Virtus armour set',
    output_id: 31148,
    output_name: 'Virtus armour set',
    inputs: [
      { id: 26241, name: 'Virtus mask', qty: 1 },
      { id: 26243, name: 'Virtus robe top', qty: 1 },
      { id: 26245, name: 'Virtus robe bottom', qty: 1 }
    ]
  },
  {
    key: 'trailblazer_t3',
    title: 'Trailblazer relic hunter (t3) armour set',
    output_id: 25386,
    output_name: 'Trailblazer relic hunter (t3) armour set',
    inputs: [
      { id: 25001, name: 'Trailblazer hood (t3)', qty: 1 },
      { id: 25004, name: 'Trailblazer top (t3)', qty: 1 },
      { id: 25007, name: 'Trailblazer trousers (t3)', qty: 1 },
      { id: 25010, name: 'Trailblazer boots (t3)', qty: 1 }
    ]
  },
  {
    key: 'gilded_lg',
    title: 'Gilded armour set (lg)',
    output_id: 13036,
    output_name: 'Gilded armour set (lg)',
    inputs: [
      { id: 3486, name: 'Gilded full helm', qty: 1 },
      { id: 3481, name: 'Gilded platebody', qty: 1 },
      { id: 3483, name: 'Gilded platelegs', qty: 1 },
      { id: 3488, name: 'Gilded kiteshield', qty: 1 }
    ]
  },
  {
    key: 'gilded_sk',
    title: 'Gilded armour set (sk)',
    output_id: 13038,
    output_name: 'Gilded armour set (sk)',
    inputs: [
      { id: 3486, name: 'Gilded full helm', qty: 1 },
      { id: 3481, name: 'Gilded platebody', qty: 1 },
      { id: 3485, name: 'Gilded plateskirt', qty: 1 },
      { id: 3488, name: 'Gilded kiteshield', qty: 1 }
    ]
  },
  {
    key: 'oathplate',
    title: 'Oathplate armour set',
    output_id: 30744,
    output_name: 'Oathplate armour set',
    inputs: [
      { id: 30750, name: 'Oathplate helm', qty: 1 },
      { id: 30753, name: 'Oathplate chest', qty: 1 },
      { id: 30756, name: 'Oathplate legs', qty: 1 }
    ]
  },
  {
    key: 'hueycoatl_hide',
    title: 'Hueycoatl hide armour set',
    output_id: 31169,
    output_name: 'Hueycoatl hide armour set',
    inputs: [
      { id: 30076, name: 'Hueycoatl hide body', qty: 1 },
      { id: 30079, name: 'Hueycoatl hide chaps', qty: 1 },
      { id: 30073, name: 'Hueycoatl hide coif', qty: 1 },
      { id: 30082, name: 'Hueycoatl hide vambraces', qty: 1 }
    ]
  },
  {
    key: 'justiciar',
    title: "Justiciar armour set",
    output_id: 22438,
    output_name: "Justiciar armour set",
    inputs: [
      { id: 22326, name: "Justiciar faceguard", qty: 1 },
      { id: 22327, name: "Justiciar chestguard", qty: 1 },
      { id: 22328, name: "Justiciar legguards", qty: 1 }
    ]
  },
  {
    key: 'blood_moon',
    title: 'Blood Moon armour set',
    output_id: 31136,
    output_name: 'Blood Moon armour set',
    inputs: [
      { id: 29028, name: 'Blood Moon helm', qty: 1 },
      { id: 29022, name: 'Blood Moon chestplate', qty: 1 },
      { id: 29025, name: 'Blood Moon tassets', qty: 1 }
    ]
  },
  {
    key: 'blue_moon',
    title: 'Blue Moon armour set',
    output_id: 31139,
    output_name: 'Blue Moon armour set',
    inputs: [
      { id: 29019, name: 'Blue Moon helm', qty: 1 },
      { id: 29013, name: 'Blue Moon chestplate', qty: 1 },
      { id: 29016, name: 'Blue Moon tassets', qty: 1 }
    ]
  },
  {
    key: 'eclipse_moon',
    title: 'Eclipse Moon armour set',
    output_id: 31142,
    output_name: 'Eclipse Moon armour set',
    inputs: [
      { id: 29010, name: 'Eclipse Moon helm', qty: 1 },
      { id: 29004, name: 'Eclipse Moon chestplate', qty: 1 },
      { id: 29007, name: 'Eclipse Moon tassets', qty: 1 }
    ]
  },
  {
    key: 'dagonhai',
    title: "Dagon'hai robes set",
    output_id: 24333,
    output_name: "Dagon'hai robes set",
    inputs: [
      { id: 24288, name: "Dagon'hai hat", qty: 1 },
      { id: 24291, name: "Dagon'hai robe top", qty: 1 },
      { id: 24294, name: "Dagon'hai robe bottom", qty: 1 }
    ]
  },
  {
    key: 'obsidian',
    title: 'Obsidian armour set',
    output_id: 21279,
    output_name: 'Obsidian armour set',
    inputs: [
      { id: 21298, name: 'Obsidian helmet', qty: 1 },
      { id: 21301, name: 'Obsidian platebody', qty: 1 },
      { id: 21304, name: 'Obsidian platelegs', qty: 1 }
    ]
  },
  {
    key: 'dragon_sk',
    title: 'Dragon armour set (sk)',
    output_id: 21885,
    output_name: 'Dragon armour set (sk)',
    inputs: [
      { id: 11335, name: 'Dragon full helm', qty: 1 },
      { id: 21892, name: 'Dragon platebody', qty: 1 },
      { id: 4585, name: 'Dragon plateskirt', qty: 1 },
      { id: 21895, name: 'Dragon kiteshield', qty: 1 }
    ]
  }
];

// Tree saplings: buy seed, plant, sell sapling. seed_id = GE item ID of the seed.
// profit per = (sapling sell - tax) - seed cost; limit profit = profit per * seed buy limit.
Flipwise.TREE_SAPLING_ITEMS = [
  { id: 5370, name: 'Oak sapling', seed_id: 5312 },
  { id: 5371, name: 'Willow sapling', seed_id: 5313 },
  { id: 5372, name: 'Maple sapling', seed_id: 5314 },
  { id: 5373, name: 'Yew sapling', seed_id: 5315 },
  { id: 5374, name: 'Magic sapling', seed_id: 5316 },
  { id: 5496, name: 'Apple sapling', seed_id: 5283 },
  { id: 5497, name: 'Banana sapling', seed_id: 5284 },
  { id: 5498, name: 'Orange sapling', seed_id: 5285 },
  { id: 5499, name: 'Curry sapling', seed_id: 5286 },
  { id: 5500, name: 'Pineapple sapling', seed_id: 5287 },
  { id: 5501, name: 'Papaya sapling', seed_id: 5288 },
  { id: 5502, name: 'Palm sapling', seed_id: 5289 },
  { id: 22866, name: 'Dragonfruit sapling', seed_id: 22877 },
  { id: 5503, name: 'Calquat sapling', seed_id: 5290 },
  { id: 21477, name: 'Teak sapling', seed_id: 21486 },
  { id: 21480, name: 'Mahogany sapling', seed_id: 21488 },
  { id: 22859, name: 'Redwood sapling', seed_id: 22871 },
  { id: 22856, name: 'Celastrus sapling', seed_id: 22869 }
];

// Decanting: name = (4)-dose display name; id1, id2, id3 = (1)(2)(3)-dose buy IDs; id4 = (4)-dose sell ID.
// Cheapest dose = which of 1/2/3 has lowest cost-per-dose; Cheapest cost = that per-dose × 4; Profit = sell (4) after tax − cheapest cost.
Flipwise.DECANTING_ITEMS = [
  { name: 'Extended super antifire(4)', id1: 22218, id2: 22215, id3: 22212, id4: 22209 },
  { name: 'Bastion potion(4)', id1: 22470, id2: 22467, id3: 22464, id4: 22461 },
  { name: 'Prayer regeneration potion(4)', id1: 30134, id2: 30131, id3: 30128, id4: 30125 },
  { name: 'Goading potion(4)', id1: 30146, id2: 30143, id3: 30140, id4: 30137 },
  { name: 'Battlemage potion(4)', id1: 22458, id2: 22455, id3: 22452, id4: 22449 },
  { name: 'Sanfew serum(4)', id1: 10931, id2: 10929, id3: 10927, id4: 10925 },
  { name: 'Divine magic potion(4)', id1: 23754, id2: 23751, id3: 23748, id4: 23745 },
  { name: 'Forgotten brew(4)', id1: 27638, id2: 27635, id3: 27632, id4: 27629 },
  { name: 'Divine battlemage potion(4)', id1: 24632, id2: 24629, id3: 24626, id4: 24623 },
  { name: 'Divine bastion potion(4)', id1: 24644, id2: 24641, id3: 24638, id4: 24635 },
  { name: 'Extended anti-venom+(4)', id1: 29833, id2: 29830, id3: 29827, id4: 29824 },
  { name: 'Super antifire potion(4)', id1: 21987, id2: 21984, id3: 21981, id4: 21978 },
  { name: 'Divine super strength potion(4)', id1: 23718, id2: 23715, id3: 23712, id4: 23709 },
  { name: 'Divine super attack potion(4)', id1: 23706, id2: 23703, id3: 23700, id4: 23697 },
  { name: 'Guthix rest(4)', id1: 4423, id2: 4421, id3: 4419, id4: 4417 },
  { name: 'Divine super defence potion(4)', id1: 23730, id2: 23727, id3: 23724, id4: 23721 },
  { name: "Relicym's balm(4)", id1: 4848, id2: 4846, id3: 4844, id4: 4842 },
  { name: 'Anti-venom(4)', id1: 12911, id2: 12909, id3: 12907, id4: 12905 },
  { name: 'Ancient brew(4)', id1: 26346, id2: 26344, id3: 26342, id4: 26340 },
  { name: 'Superantipoison(4)', id1: 185, id2: 183, id3: 181, id4: 2448 },
  { name: 'Hunter potion(4)', id1: 10004, id2: 10002, id3: 10000, id4: 9998 },
  { name: 'Guthix balance(4)', id1: 7666, id2: 7664, id3: 7662, id4: 7660 },
  { name: 'Super attack(4)', id1: 149, id2: 147, id3: 145, id4: 2436 },
  { name: 'Divine super combat potion(4)', id1: 23694, id2: 23691, id3: 23688, id4: 23685 },
  { name: 'Divine ranging potion(4)', id1: 23742, id2: 23739, id3: 23736, id4: 23733 },
  { name: 'Super defence(4)', id1: 167, id2: 165, id3: 163, id4: 2442 },
  { name: 'Super energy(4)', id1: 3022, id2: 3020, id3: 3018, id4: 3016 },
  // 25 potions from second image
  { name: 'Defence potion(4)', id1: 137, id2: 135, id3: 133, id4: 2432 },
  { name: 'Menaphite remedy(4)', id1: 27211, id2: 27208, id3: 27205, id4: 27202 },
  { name: 'Antifire potion(4)', id1: 2458, id2: 2456, id3: 2454, id4: 2452 },
  { name: 'Antidote+(4)', id1: 5949, id2: 5947, id3: 5945, id4: 5943 },
  { name: 'Agility potion(4)', id1: 3038, id2: 3036, id3: 3034, id4: 3032 },
  { name: 'Ranging potion(4)', id1: 173, id2: 171, id3: 169, id4: 2444 },
  { name: 'Extended antifire(4)', id1: 11957, id2: 11955, id3: 11953, id4: 11951 },
  { name: 'Super restore(4)', id1: 3030, id2: 3028, id3: 3026, id4: 3024 },
  { name: 'Zamorak brew(4)', id1: 193, id2: 191, id3: 189, id4: 2450 },
  { name: 'Stamina potion(4)', id1: 12631, id2: 12629, id3: 12627, id4: 12625 },
  { name: 'Super strength(4)', id1: 161, id2: 159, id3: 157, id4: 2440 },
  { name: 'Fishing potion(4)', id1: 155, id2: 153, id3: 151, id4: 2438 },
  { name: 'Saradomin brew(4)', id1: 6691, id2: 6689, id3: 6687, id4: 6685 },
  { name: 'Prayer potion(4)', id1: 143, id2: 141, id3: 139, id4: 2434 },
  { name: 'Restore potion(4)', id1: 131, id2: 129, id3: 127, id4: 2430 },
  { name: 'Magic potion(4)', id1: 3046, id2: 3044, id3: 3042, id4: 3040 },
  { name: 'Strength potion(4)', id1: 119, id2: 117, id3: 115, id4: 113 },
  { name: 'Antidote++(4)', id1: 5958, id2: 5956, id3: 5954, id4: 5952 },
  { name: 'Antipoison(4)', id1: 179, id2: 177, id3: 175, id4: 2446 },
  { name: 'Energy potion(4)', id1: 3014, id2: 3012, id3: 3010, id4: 3008 },
  { name: 'Serum 207 (4)', id1: 3414, id2: 3412, id3: 3410, id4: 3408 },
  { name: 'Combat potion(4)', id1: 9745, id2: 9743, id3: 9741, id4: 9739 },
  { name: 'Attack potion(4)', id1: 125, id2: 123, id3: 121, id4: 2428 },
  { name: 'Compost potion(4)', id1: 6476, id2: 6474, id3: 6472, id4: 6470 },
  { name: 'Olive oil(4)', id1: 3428, id2: 3426, id3: 3424, id4: 3422 },
  { name: 'Super combat potion(4)', id1: 12701, id2: 12699, id3: 12697, id4: 12695 },
  { name: 'Sacred oil(4)', id1: 3436, id2: 3434, id3: 3432, id4: 3430 },
  { name: 'Anti-venom+(4)', id1: 12919, id2: 12917, id3: 12915, id4: 12913 }
];

// Tooltip / flyover verbage for each money maker (match Python)
Flipwise.MONEY_MAKER_TOOLTIPS = {
  knife: "Buy dragon knives (p) at low price, clean, sell as Dragon knife at high. Per 7k GE limit.",
  cannon: "Buy 4 parts at low price, assemble, sell cannon at high. Or buy from Nulodion. ~157/hour.",
  odium: "Buy 3 shards at low, assemble, sell Odium ward at high. ~20 per hour.",
  malediction: "Buy 3 shards at low, assemble, sell Malediction ward at high. ~20 per hour.",
  bandit: "Buy from Bandit Trader (750 gp), sell on GE. ~929 per hour.",
  sandworms: "Buy Sandworms packs for 11,100 gp (100 worms), sell Sandworms on GE. Profit shown per pack after GE tax.",
  lockpicks: "Buy lockpicks for 20 gp each, sell on GE at the higher of buy/sell price (after tax). Uses GE buy limit.",
  soul_rune: "Buy from Wizard Akutha (50: 308, 100: 315, 150: 338 gp), sell on GE. Profit based on 100-tier. 67k per run.",
  dragonbreath: "10 dragonfruit → 1 bottled. ~450 per hour. Buy dragonfruit low, sell bottled high.",
  mithril_seeds: "Fixed cost 350 gp per seed, sell on GE. ~1945 per hour."
};

// One-way assemblies. Profit is one finished item: input lows, output high, after GE tax.
Flipwise.ASSEMBLY_RECIPES = [
  {
    key: 'voidwaker',
    title: 'Voidwaker',
    output_id: 27690,
    output_name: 'Voidwaker',
    inputs: [
      { id: 27684, name: 'Voidwaker blade', qty: 1 },
      { id: 27687, name: 'Voidwaker gem', qty: 1 },
      { id: 27681, name: 'Voidwaker hilt', qty: 1 }
    ]
  },
  {
    key: 'bandos_godsword',
    title: 'Bandos godsword',
    output_id: 11804,
    output_name: 'Bandos godsword',
    inputs: [
      { id: 11798, name: 'Godsword blade', qty: 1 },
      { id: 11812, name: 'Bandos hilt', qty: 1 }
    ]
  },
  {
    key: 'armadyl_godsword',
    title: 'Armadyl godsword',
    output_id: 11802,
    output_name: 'Armadyl godsword',
    inputs: [
      { id: 11798, name: 'Godsword blade', qty: 1 },
      { id: 11810, name: 'Armadyl hilt', qty: 1 }
    ]
  },
  {
    key: 'saradomin_godsword',
    title: 'Saradomin godsword',
    output_id: 11806,
    output_name: 'Saradomin godsword',
    inputs: [
      { id: 11798, name: 'Godsword blade', qty: 1 },
      { id: 11814, name: 'Saradomin hilt', qty: 1 }
    ]
  },
  {
    key: 'zamorak_godsword',
    title: 'Zamorak godsword',
    output_id: 11808,
    output_name: 'Zamorak godsword',
    inputs: [
      { id: 11798, name: 'Godsword blade', qty: 1 },
      { id: 11816, name: 'Zamorak hilt', qty: 1 }
    ]
  },
  {
    key: 'ancient_godsword',
    title: 'Ancient godsword',
    output_id: 26233,
    output_name: 'Ancient godsword',
    inputs: [
      { id: 11798, name: 'Godsword blade', qty: 1 },
      { id: 26370, name: 'Ancient hilt', qty: 1 }
    ]
  },
  {
    key: 'blessed_spirit_shield',
    title: 'Blessed spirit shield',
    output_id: 12831,
    output_name: 'Blessed spirit shield',
    inputs: [
      { id: 12829, name: 'Spirit shield', qty: 1 },
      { id: 12833, name: 'Holy elixir', qty: 1 }
    ]
  },
  {
    key: 'arcane_spirit_shield',
    title: 'Arcane spirit shield',
    output_id: 12825,
    output_name: 'Arcane spirit shield',
    inputs: [
      { id: 12831, name: 'Blessed spirit shield', qty: 1 },
      { id: 12827, name: 'Arcane sigil', qty: 1 }
    ]
  },
  {
    key: 'spectral_spirit_shield',
    title: 'Spectral spirit shield',
    output_id: 12821,
    output_name: 'Spectral spirit shield',
    inputs: [
      { id: 12831, name: 'Blessed spirit shield', qty: 1 },
      { id: 12823, name: 'Spectral sigil', qty: 1 }
    ]
  },
  {
    key: 'elysian_spirit_shield',
    title: 'Elysian spirit shield',
    output_id: 12817,
    output_name: 'Elysian spirit shield',
    inputs: [
      { id: 12831, name: 'Blessed spirit shield', qty: 1 },
      { id: 12819, name: 'Elysian sigil', qty: 1 }
    ]
  },
  {
    key: 'masori_mask_f',
    title: 'Masori mask (f)',
    output_id: 27235,
    output_name: 'Masori mask (f)',
    inputs: [
      { id: 27226, name: 'Masori mask', qty: 1 },
      { id: 11826, name: 'Armadyl helmet', qty: 1 }
    ]
  },
  {
    key: 'masori_body_f',
    title: 'Masori body (f)',
    output_id: 27238,
    output_name: 'Masori body (f)',
    inputs: [
      { id: 27229, name: 'Masori body', qty: 1 },
      { id: 11828, name: 'Armadyl chestplate', qty: 1 }
    ]
  },
  {
    key: 'masori_chaps_f',
    title: 'Masori chaps (f)',
    output_id: 27241,
    output_name: 'Masori chaps (f)',
    inputs: [
      { id: 27232, name: 'Masori chaps', qty: 1 },
      { id: 11830, name: 'Armadyl chainskirt', qty: 1 }
    ]
  },
  {
    key: 'dragonfire_shield',
    title: 'Dragonfire shield',
    output_id: 11284,
    output_name: 'Dragonfire shield',
    inputs: [
      { id: 1540, name: 'Anti-dragon shield', qty: 1 },
      { id: 11286, name: 'Draconic visage', qty: 1 }
    ]
  },
  {
    key: 'dragonfire_ward',
    title: 'Dragonfire ward',
    output_id: 22003,
    output_name: 'Dragonfire ward',
    inputs: [
      { id: 1540, name: 'Anti-dragon shield', qty: 1 },
      { id: 22006, name: 'Skeletal visage', qty: 1 }
    ]
  }
];

// Flip items (ids and names). Includes the four card items + rest for table.
Flipwise.FLIP_ITEMS = [
  { id: 20997, name: "Twisted bow" },
  { id: 22486, name: "Scythe of Vitur (uncharged)" },
  { id: 27277, name: "Tumeken's shadow (uncharged)" },
  { id: 31145, name: "Torva armour set" },
  { id: 26384, name: "Torva platebody" },
  { id: 24511, name: "Harmonised orb" },
  { id: 12817, name: "Elysian spirit shield" },
  { id: 26374, name: "Zaryte crossbow" },
  { id: 27641, name: "Saturated heart" },
  { id: 28307, name: "Ultor ring" },
  { id: 23997, name: "Blade of Saeldor (inactive)" },
  { id: 25862, name: "Bow of Faerdhinen (inactive)" },
  { id: 11785, name: "Armadyl crossbow" },
  { id: 29796, name: "Noxious halberd" },
  { id: 12825, name: "Arcane spirit shield" },
  { id: 24417, name: "Inquisitor's mace" },
  { id: 24419, name: "Inquisitor's great helm" },
  { id: 24420, name: "Inquisitor's hauberk" },
  { id: 24421, name: "Inquisitor's plateskirt" },
  { id: 24488, name: "Inquisitor's armour set" },
  { id: 28338, name: "Soulreaper axe" },
  { id: 24517, name: "Eldritch orb" },
  { id: 28316, name: "Bellator ring" },
  { id: 21049, name: "Ancestral robes set" },
  { id: 24514, name: "Volatile orb" },
  { id: 21006, name: "Kodai wand" },
  { id: 26382, name: "Torva full helm" },
  { id: 26386, name: "Torva platelegs" },
  { id: 30750, name: "Oathplate helm" },
  { id: 30753, name: "Oathplate chest" },
  { id: 30756, name: "Oathplate legs" },
  { id: 30744, name: "Oathplate armour set" },
  { id: 31106, name: "Confliction gauntlets" },
  { id: 31088, name: "Avernic treads" },
  { id: 21018, name: "Ancestral hat" },
  { id: 21021, name: "Ancestral robe top" },
  { id: 21024, name: "Ancestral robe bottom" },
  { id: 26235, name: "Zaryte vambraces" },
  { id: 29622, name: "Armageddon teleport scroll" },
  { id: 13239, name: "Primordial boots" },
  { id: 13237, name: "Pegasian boots" },
  { id: 2577, name: "Ranger boots" },
  { id: 20724, name: "Imbued heart" },
  { id: 12827, name: "Arcane sigil" },
  { id: 29801, name: "Amulet of rancour" },
  { id: 31115, name: "Eye of Ayak (uncharged)" },
  { id: 28310, name: "Venator ring" },
  { id: 27612, name: "Venator bow (uncharged)" },
  { id: 21003, name: "Elder maul" },
  { id: 27690, name: "Voidwaker" },
  { id: 13652, name: "Dragon claws" },
  { id: 13576, name: "Dragon warhammer" },
  { id: 30634, name: "Twinflame staff" },
  { id: 29625, name: "Armageddon weapon scroll" },
  { id: 32093, name: "Inky paint" },
  { id: 32110, name: "Merchant's paint" },
  { id: 33631, name: "Crimson kisten" },
  { id: 33639, name: "Necklace of rupture" },
  { id: 26219, name: "Osmumten's fang" },
  { id: 22324, name: "Ghrazi rapier" },
  { id: 22481, name: "Sanguinesti staff (uncharged)" },
  { id: 25985, name: "Elidinis' ward" },
  { id: 12821, name: "Spectral spirit shield" },
  { id: 26233, name: "Ancient godsword" },
  { id: 29577, name: "Burning claws" },
  { id: 27652, name: "Webweaver bow (u)" },
  { id: 27657, name: "Ursine chainmace (u)" },
  { id: 27662, name: "Accursed sceptre (u)" }
];

Flipwise.HIGH_VOLUME_ITEMS = [
  { id: 556, name: "Air rune" },
  { id: 555, name: "Water rune" },
  { id: 557, name: "Earth rune" },
  { id: 554, name: "Fire rune" },
  { id: 30843, name: "Aether rune" },
  { id: 21880, name: "Wrath rune" },
  { id: 9075, name: "Astral rune" },
  { id: 566, name: "Soul rune" },
  { id: 565, name: "Blood rune" },
  { id: 560, name: "Death rune" },
  { id: 1436, name: "Rune essence" },
  { id: 4694, name: "Steam rune" },
  { id: 4695, name: "Mist rune" },
  { id: 4696, name: "Dust rune" },
  { id: 4697, name: "Smoke rune" },
  { id: 4698, name: "Mud rune" },
  { id: 4699, name: "Lava rune" },
  { id: 564, name: "Cosmic rune" },
  { id: 563, name: "Law rune" },
  { id: 562, name: "Chaos rune" },
  { id: 561, name: "Nature rune" },
  { id: 559, name: "Body rune" },
  { id: 558, name: "Mind rune" }
];

Flipwise.HERBLORE_ITEMS = [
  { id: 199, name: "Grimy guam leaf" },
  { id: 201, name: "Grimy marrentill" },
  { id: 203, name: "Grimy tarromin" },
  { id: 205, name: "Grimy harralander" },
  { id: 207, name: "Grimy ranarr weed" },
  { id: 3049, name: "Grimy toadflax" },
  { id: 209, name: "Grimy irit leaf" },
  { id: 211, name: "Grimy avantoe" },
  { id: 213, name: "Grimy kwuarm" },
  { id: 3051, name: "Grimy snapdragon" },
  { id: 215, name: "Grimy cadantine" },
  { id: 2485, name: "Grimy lantadyme" },
  { id: 217, name: "Grimy dwarf weed" },
  { id: 219, name: "Grimy torstol" },
  { id: 30094, name: "Grimy huasca" },
  { id: 249, name: "Guam leaf" },
  { id: 251, name: "Marrentill" },
  { id: 253, name: "Tarromin" },
  { id: 255, name: "Harralander" },
  { id: 257, name: "Ranarr weed" },
  { id: 2998, name: "Toadflax" },
  { id: 259, name: "Irit leaf" },
  { id: 261, name: "Avantoe" },
  { id: 263, name: "Kwuarm" },
  { id: 3000, name: "Snapdragon" },
  { id: 265, name: "Cadantine" },
  { id: 2481, name: "Lantadyme" },
  { id: 267, name: "Dwarf weed" },
  { id: 269, name: "Torstol" },
  { id: 30097, name: "Huasca" },
  { id: 91, name: "Guam potion (unf)" },
  { id: 93, name: "Marrentill potion (unf)" },
  { id: 95, name: "Tarromin potion (unf)" },
  { id: 97, name: "Harralander potion (unf)" },
  { id: 99, name: "Ranarr potion (unf)" },
  { id: 3002, name: "Toadflax potion (unf)" },
  { id: 101, name: "Irit potion (unf)" },
  { id: 103, name: "Avantoe potion (unf)" },
  { id: 105, name: "Kwuarm potion (unf)" },
  { id: 3004, name: "Snapdragon potion (unf)" },
  { id: 107, name: "Cadantine potion (unf)" },
  { id: 2483, name: "Lantadyme potion (unf)" },
  { id: 109, name: "Dwarf weed potion (unf)" },
  { id: 111, name: "Torstol potion (unf)" },
  { id: 30100, name: "Huasca potion (unf)" },
  { id: 149, name: "Super attack(1)" },
  { id: 147, name: "Super attack(2)" },
  { id: 145, name: "Super attack(3)" },
  { id: 2436, name: "Super attack(4)" },
  { id: 161, name: "Super strength(1)" },
  { id: 159, name: "Super strength(2)" },
  { id: 157, name: "Super strength(3)" },
  { id: 2440, name: "Super strength(4)" },
  { id: 167, name: "Super defence(1)" },
  { id: 165, name: "Super defence(2)" },
  { id: 163, name: "Super defence(3)" },
  { id: 2442, name: "Super defence(4)" },
  { id: 143, name: "Prayer potion(1)" },
  { id: 141, name: "Prayer potion(2)" },
  { id: 139, name: "Prayer potion(3)" },
  { id: 2434, name: "Prayer potion(4)" },
  { id: 3030, name: "Super restore(1)" },
  { id: 3028, name: "Super restore(2)" },
  { id: 3026, name: "Super restore(3)" },
  { id: 3024, name: "Super restore(4)" },
  { id: 173, name: "Ranging potion(1)" },
  { id: 171, name: "Ranging potion(2)" },
  { id: 169, name: "Ranging potion(3)" },
  { id: 2444, name: "Ranging potion(4)" },
  { id: 3046, name: "Magic potion(1)" },
  { id: 3044, name: "Magic potion(2)" },
  { id: 3042, name: "Magic potion(3)" },
  { id: 3040, name: "Magic potion(4)" },
  { id: 6691, name: "Saradomin brew(1)" },
  { id: 6689, name: "Saradomin brew(2)" },
  { id: 6687, name: "Saradomin brew(3)" },
  { id: 6685, name: "Saradomin brew(4)" },
  { id: 2458, name: "Antifire potion(1)" },
  { id: 2456, name: "Antifire potion(2)" },
  { id: 2454, name: "Antifire potion(3)" },
  { id: 2452, name: "Antifire potion(4)" },
  { id: 12701, name: "Super combat potion(1)" },
  { id: 12699, name: "Super combat potion(2)" },
  { id: 12697, name: "Super combat potion(3)" },
  { id: 12695, name: "Super combat potion(4)" },
  { id: 12631, name: "Stamina potion(1)" },
  { id: 12629, name: "Stamina potion(2)" },
  { id: 12627, name: "Stamina potion(3)" },
  { id: 12625, name: "Stamina potion(4)" },
  { id: 12905, name: "Anti-venom(4)" },
  { id: 12913, name: "Anti-venom+(4)" },
  { id: 21987, name: "Super antifire potion(1)" },
  { id: 21984, name: "Super antifire potion(2)" },
  { id: 21981, name: "Super antifire potion(3)" },
  { id: 21978, name: "Super antifire potion(4)" },
  { id: 22218, name: "Extended super antifire(1)" },
  { id: 22215, name: "Extended super antifire(2)" },
  { id: 22212, name: "Extended super antifire(3)" },
  { id: 22209, name: "Extended super antifire(4)" },
  { id: 10931, name: "Sanfew serum(1)" },
  { id: 10929, name: "Sanfew serum(2)" },
  { id: 10927, name: "Sanfew serum(3)" },
  { id: 10925, name: "Sanfew serum(4)" }
];

Flipwise.THIRD_AGE_ITEMS = [
  { id: 10350, name: "3rd Age full helmet" },
  { id: 10348, name: "3rd Age platebody" },
  { id: 10346, name: "3rd Age platelegs" },
  { id: 23242, name: "3rd Age plateskirt" },
  { id: 10352, name: "3rd Age kiteshield" },
  { id: 12437, name: "3rd Age cloak" },
  { id: 10338, name: "3rd Age robe top" },
  { id: 10340, name: "3rd Age robe" },
  { id: 10342, name: "3rd Age mage hat" },
  { id: 10330, name: "3rd Age range top" },
  { id: 10334, name: "3rd Age range coif" },
  { id: 10332, name: "3rd Age range legs" },
  { id: 10336, name: "3rd Age vambraces" },
  { id: 12426, name: "3rd Age longsword" },
  { id: 12422, name: "3rd Age wand" },
  { id: 10344, name: "3rd Age amulet" },
  { id: 12424, name: "3rd Age bow" },
  { id: 23342, name: "3rd Age druidic staff" },
  { id: 23336, name: "3rd Age druidic robe top" },
  { id: 23339, name: "3rd Age druidic robe bottoms" },
  { id: 23345, name: "3rd Age druidic cloak" },
  { id: 20011, name: "3rd Age axe" },
  { id: 28226, name: "3rd Age felling axe" },
  { id: 20014, name: "3rd Age pickaxe" }
];

// Gem Cutting: buy uncut gem, cut, sell cut gem.
// Calculations:
// - GE Price (uncut): cheapest of buy/sell = min(low, high)
// - Cut Value (cut): highest of buy/sell = max(low, high)
// - Profit/Loss: Cut Value - GE Price
// - Limit Profit: Profit/Loss * ge_limit
//
// Notes:
// - `display_name` is what we show in the UI (lets you add "(m)" labels).
// - `uncut_name` / `cut_name` must match OSRS mapping names.
// - Set `ge_limit` when you provide limits; `null` shows as "—".
Flipwise.GEM_CUTTING_ITEMS = [
  { display_name: 'Uncut sapphire', uncut_id: 1623, uncut_name: 'Uncut sapphire', cut_id: 1607, cut_name: 'Sapphire', ge_limit: 10000 },
  { display_name: 'Uncut emerald', uncut_id: 1621, uncut_name: 'Uncut emerald', cut_id: 1605, cut_name: 'Emerald', ge_limit: 10000 },
  { display_name: 'Uncut ruby', uncut_id: 1619, uncut_name: 'Uncut ruby', cut_id: 1603, cut_name: 'Ruby', ge_limit: 10000 },
  { display_name: 'Uncut diamond', uncut_id: 1617, uncut_name: 'Uncut diamond', cut_id: 1601, cut_name: 'Diamond', ge_limit: 10000 },
  { display_name: 'Uncut dragonstone', uncut_id: 1631, uncut_name: 'Uncut dragonstone', cut_id: 1615, cut_name: 'Dragonstone', ge_limit: 10000 },
  { display_name: 'Uncut onyx', uncut_id: 6571, uncut_name: 'Uncut onyx', cut_id: 6573, cut_name: 'Onyx', ge_limit: 11000 },
  { display_name: 'Uncut zenyte', uncut_id: 19496, uncut_name: 'Uncut zenyte', cut_id: 19493, cut_name: 'Zenyte', ge_limit: 10000 },
  { display_name: 'Uncut opal', uncut_id: 1625, uncut_name: 'Uncut opal', cut_id: 1609, cut_name: 'Opal', ge_limit: 10000 },
  { display_name: 'Uncut jade', uncut_id: 1627, uncut_name: 'Uncut jade', cut_id: 1611, cut_name: 'Jade', ge_limit: 10000 },
  { display_name: 'Uncut red topaz', uncut_id: 1629, uncut_name: 'Uncut red topaz', cut_id: 1613, cut_name: 'Red topaz', ge_limit: 10000 }
];

// Shops → GE: buy at the shop's listed price, sell on the GE.
// Selling is not buy-limited, so the quantity is the shop's default stock.
// - GE Value uses the higher of buy/sell (max(high, low)), minus tax.
// - Profit per = (GE Value after tax) - shop_cost
// - Stock profit = profit per * shop_stock
Flipwise.SHOPS_TO_GE_ITEMS = [
  // Martin Thwait
  { npc: 'Martin Thwait', display_name: 'Rope', item_id: 954, shop_cost: 18, shop_stock: 50 },
  { npc: 'Martin Thwait', display_name: 'Lockpick', item_id: 1523, shop_cost: 20, shop_stock: 25 },
  { npc: 'Martin Thwait', display_name: 'Chisel', item_id: 1755, shop_cost: 1, shop_stock: 30 },
  { npc: 'Martin Thwait', display_name: 'Knife', item_id: 946, shop_cost: 6, shop_stock: 20 },
  // Stethoscope is not on the GE, so it cannot be priced here.
  { npc: 'Martin Thwait', display_name: 'Bronze knife', item_id: 864, shop_cost: 1, shop_stock: 15 },
  { npc: 'Martin Thwait', display_name: 'Iron knife', item_id: 863, shop_cost: 3, shop_stock: 10 },
  { npc: 'Martin Thwait', display_name: 'Steel knife', item_id: 865, shop_cost: 11, shop_stock: 5 },
  { npc: 'Martin Thwait', display_name: 'Bronze claws', item_id: 3095, shop_cost: 15, shop_stock: 3 },
  { npc: 'Martin Thwait', display_name: 'Iron claws', item_id: 3096, shop_cost: 50, shop_stock: 2 },
  { npc: 'Martin Thwait', display_name: 'Steel claws', item_id: 3097, shop_cost: 175, shop_stock: 1 },

  // Elgan's Exceptional Staffs (Prifddinas)
  { npc: "Elgan's Exceptional Staffs", display_name: 'Battlestaff', item_id: 1391, shop_cost: 7000, shop_stock: 5 },
  { npc: "Elgan's Exceptional Staffs", display_name: 'Staff', item_id: 1379, shop_cost: 15, shop_stock: 5 },
  { npc: "Elgan's Exceptional Staffs", display_name: 'Magic staff', item_id: 1389, shop_cost: 200, shop_stock: 5 },
  { npc: "Elgan's Exceptional Staffs", display_name: 'Staff of air', item_id: 1381, shop_cost: 1500, shop_stock: 2 },
  { npc: "Elgan's Exceptional Staffs", display_name: 'Staff of water', item_id: 1383, shop_cost: 1500, shop_stock: 2 },
  { npc: "Elgan's Exceptional Staffs", display_name: 'Staff of earth', item_id: 1385, shop_cost: 1500, shop_stock: 2 },
  { npc: "Elgan's Exceptional Staffs", display_name: 'Staff of fire', item_id: 1387, shop_cost: 1500, shop_stock: 2 },

  // Filamina's Wares (Arceuus)
  { npc: "Filamina's Wares", display_name: 'Staff', item_id: 1379, shop_cost: 15, shop_stock: 5 },
  { npc: "Filamina's Wares", display_name: 'Magic staff', item_id: 1389, shop_cost: 200, shop_stock: 5 },
  { npc: "Filamina's Wares", display_name: 'Staff of air', item_id: 1381, shop_cost: 1500, shop_stock: 2 },
  { npc: "Filamina's Wares", display_name: 'Staff of water', item_id: 1383, shop_cost: 1500, shop_stock: 2 },
  { npc: "Filamina's Wares", display_name: 'Staff of earth', item_id: 1385, shop_cost: 1500, shop_stock: 2 },
  { npc: "Filamina's Wares", display_name: 'Staff of fire', item_id: 1387, shop_cost: 1500, shop_stock: 2 },

  // Sebamo's Sublime Staffs (Auburnvale)
  { npc: "Sebamo's Sublime Staffs", display_name: 'Staff', item_id: 1379, shop_cost: 15, shop_stock: 5 },
  { npc: "Sebamo's Sublime Staffs", display_name: 'Magic staff', item_id: 1389, shop_cost: 200, shop_stock: 5 },
  { npc: "Sebamo's Sublime Staffs", display_name: 'Staff of air', item_id: 1381, shop_cost: 1500, shop_stock: 2 },
  { npc: "Sebamo's Sublime Staffs", display_name: 'Staff of water', item_id: 1383, shop_cost: 1500, shop_stock: 2 },
  { npc: "Sebamo's Sublime Staffs", display_name: 'Staff of earth', item_id: 1385, shop_cost: 1500, shop_stock: 2 },
  { npc: "Sebamo's Sublime Staffs", display_name: 'Staff of fire', item_id: 1387, shop_cost: 1500, shop_stock: 2 },

  // Baba Yaga (Lunar Isle). Default stock at the listed price.
  { npc: 'Baba Yaga', display_name: 'Astral rune', item_id: 9075, shop_cost: 50, shop_stock: 250 },
  { npc: 'Baba Yaga', display_name: 'Chaos rune', item_id: 562, shop_cost: 90, shop_stock: 250 },
  { npc: 'Baba Yaga', display_name: 'Nature rune', item_id: 561, shop_cost: 180, shop_stock: 250 },
  { npc: 'Baba Yaga', display_name: 'Death rune', item_id: 560, shop_cost: 180, shop_stock: 250 },
  { npc: 'Baba Yaga', display_name: 'Law rune', item_id: 563, shop_cost: 240, shop_stock: 250 },
  { npc: 'Baba Yaga', display_name: 'Blood rune', item_id: 565, shop_cost: 400, shop_stock: 250 },
  { npc: 'Baba Yaga', display_name: 'Soul rune', item_id: 566, shop_cost: 300, shop_stock: 250 },
  { npc: 'Baba Yaga', display_name: 'Battlestaff', item_id: 1391, shop_cost: 7000, shop_stock: 5 },

  // Magic Guild (Yanille). Soul runes stay on Unusual Methods, which uses Akutha's stack prices.
  { npc: 'Magic Guild', display_name: 'Chaos rune', item_id: 562, shop_cost: 90, shop_stock: 250 },
  { npc: 'Magic Guild', display_name: 'Nature rune', item_id: 561, shop_cost: 180, shop_stock: 250 },
  { npc: 'Magic Guild', display_name: 'Death rune', item_id: 560, shop_cost: 180, shop_stock: 250 },
  { npc: 'Magic Guild', display_name: 'Law rune', item_id: 563, shop_cost: 240, shop_stock: 250 },
  { npc: 'Magic Guild', display_name: 'Blood rune', item_id: 565, shop_cost: 400, shop_stock: 250 },
  { npc: 'Magic Guild', display_name: 'Battlestaff', item_id: 1391, shop_cost: 7000, shop_stock: 5 },

  // Zaff (Varrock). Default shop stock is 5. The diary barrel is a separate daily pile.
  { npc: "Zaff's Superior Staffs", display_name: 'Battlestaff', item_id: 1391, shop_cost: 7000, shop_stock: 5 },

  // More coin shops. Quantity is each shelf's default stock, not the GE buy limit.
  { npc: "Ali's Discount Wares", display_name: "Air rune", item_id: 556, shop_cost: 5, shop_stock: 20 },
  { npc: "Ali's Discount Wares", display_name: "Blood rune", item_id: 565, shop_cost: 500, shop_stock: 100 },
  { npc: "Ali's Discount Wares", display_name: "Body rune", item_id: 559, shop_cost: 3, shop_stock: 100 },
  { npc: "Ali's Discount Wares", display_name: "Bronze pickaxe", item_id: 1265, shop_cost: 1, shop_stock: 23 },
  { npc: "Ali's Discount Wares", display_name: "Bucket", item_id: 1925, shop_cost: 2, shop_stock: 19 },
  { npc: "Ali's Discount Wares", display_name: "Chaos rune", item_id: 562, shop_cost: 112, shop_stock: 100 },
  { npc: "Ali's Discount Wares", display_name: "Cosmic rune", item_id: 564, shop_cost: 62, shop_stock: 10 },
  { npc: "Ali's Discount Wares", display_name: "Death rune", item_id: 560, shop_cost: 225, shop_stock: 100 },
  { npc: "Ali's Discount Wares", display_name: "Desert boots", item_id: 1837, shop_cost: 20, shop_stock: 2 },
  { npc: "Ali's Discount Wares", display_name: "Desert legs", item_id: 6390, shop_cost: 25, shop_stock: 25 },
  { npc: "Ali's Discount Wares", display_name: "Desert robes", item_id: 6386, shop_cost: 25, shop_stock: 25 },
  { npc: "Ali's Discount Wares", display_name: "Desert shirt", item_id: 1833, shop_cost: 40, shop_stock: 3 },
  { npc: "Ali's Discount Wares", display_name: "Desert top", item_id: 6384, shop_cost: 15, shop_stock: 25 },
  { npc: "Ali's Discount Wares", display_name: "Desert top (overcoat)", item_id: 6388, shop_cost: 35, shop_stock: 25 },
  { npc: "Ali's Discount Wares", display_name: "Earth rune", item_id: 557, shop_cost: 5, shop_stock: 20 },
  { npc: "Ali's Discount Wares", display_name: "Fake beard", item_id: 4593, shop_cost: 1, shop_stock: 11 },
  { npc: "Ali's Discount Wares", display_name: "Fez", item_id: 6382, shop_cost: 20, shop_stock: 25 },
  { npc: "Ali's Discount Wares", display_name: "Fire rune", item_id: 554, shop_cost: 5, shop_stock: 20 },
  { npc: "Ali's Discount Wares", display_name: "Jug", item_id: 1935, shop_cost: 1, shop_stock: 2 },
  { npc: "Ali's Discount Wares", display_name: "Kharidian headpiece", item_id: 4591, shop_cost: 1, shop_stock: 12 },
  { npc: "Ali's Discount Wares", display_name: "Knife", item_id: 946, shop_cost: 6, shop_stock: 5 },
  { npc: "Ali's Discount Wares", display_name: "Law rune", item_id: 563, shop_cost: 300, shop_stock: 100 },
  { npc: "Ali's Discount Wares", display_name: "Maple blackjack", item_id: 6416, shop_cost: 1200, shop_stock: 25 },
  { npc: "Ali's Discount Wares", display_name: "Maple blackjack(d)", item_id: 6420, shop_cost: 1600, shop_stock: 25 },
  { npc: "Ali's Discount Wares", display_name: "Maple blackjack(o)", item_id: 6418, shop_cost: 1600, shop_stock: 25 },
  { npc: "Ali's Discount Wares", display_name: "Menaphite purple hat", item_id: 6392, shop_cost: 35, shop_stock: 25 },
  { npc: "Ali's Discount Wares", display_name: "Menaphite purple kilt", item_id: 6398, shop_cost: 20, shop_stock: 25 },
  { npc: "Ali's Discount Wares", display_name: "Menaphite purple robe", item_id: 6396, shop_cost: 40, shop_stock: 25 },
  { npc: "Ali's Discount Wares", display_name: "Menaphite purple top", item_id: 6394, shop_cost: 20, shop_stock: 25 },
  { npc: "Ali's Discount Wares", display_name: "Menaphite red hat", item_id: 6400, shop_cost: 35, shop_stock: 25 },
  { npc: "Ali's Discount Wares", display_name: "Menaphite red kilt", item_id: 6406, shop_cost: 20, shop_stock: 25 },
  { npc: "Ali's Discount Wares", display_name: "Menaphite red robe", item_id: 6404, shop_cost: 40, shop_stock: 25 },
  { npc: "Ali's Discount Wares", display_name: "Menaphite red top", item_id: 6402, shop_cost: 20, shop_stock: 25 },
  { npc: "Ali's Discount Wares", display_name: "Mind rune", item_id: 558, shop_cost: 3, shop_stock: 100 },
  { npc: "Ali's Discount Wares", display_name: "Nature rune", item_id: 561, shop_cost: 225, shop_stock: 100 },
  { npc: "Ali's Discount Wares", display_name: "Oak blackjack(d)", item_id: 6410, shop_cost: 400, shop_stock: 25 },
  { npc: "Ali's Discount Wares", display_name: "Oak blackjack(o)", item_id: 6408, shop_cost: 400, shop_stock: 25 },
  { npc: "Ali's Discount Wares", display_name: "Papyrus", item_id: 970, shop_cost: 10, shop_stock: 50 },
  { npc: "Ali's Discount Wares", display_name: "Pot", item_id: 1931, shop_cost: 1, shop_stock: 3 },
  { npc: "Ali's Discount Wares", display_name: "Raw chicken", item_id: 2138, shop_cost: 1, shop_stock: 15 },
  { npc: "Ali's Discount Wares", display_name: "Soul rune", item_id: 566, shop_cost: 375, shop_stock: 100 },
  { npc: "Ali's Discount Wares", display_name: "Tinderbox", item_id: 590, shop_cost: 1, shop_stock: 11 },
  { npc: "Ali's Discount Wares", display_name: "Water rune", item_id: 555, shop_cost: 5, shop_stock: 20 },
  { npc: "Ali's Discount Wares", display_name: "Willow blackjack", item_id: 4600, shop_cost: 600, shop_stock: 25 },
  { npc: "Ali's Discount Wares", display_name: "Willow blackjack(d)", item_id: 6414, shop_cost: 800, shop_stock: 25 },
  { npc: "Ali's Discount Wares", display_name: "Willow blackjack(o)", item_id: 6412, shop_cost: 800, shop_stock: 25 },
  { npc: "Alice's Farming shop", display_name: "Basket", item_id: 5376, shop_cost: 1, shop_stock: 500 },
  { npc: "Alice's Farming shop", display_name: "Bucket", item_id: 1925, shop_cost: 2, shop_stock: 100 },
  { npc: "Alice's Farming shop", display_name: "Compost", item_id: 6032, shop_cost: 20, shop_stock: 500 },
  { npc: "Alice's Farming shop", display_name: "Empty sack", item_id: 5418, shop_cost: 1, shop_stock: 500 },
  { npc: "Alice's Farming shop", display_name: "Filled plant pot", item_id: 5354, shop_cost: 1, shop_stock: 500 },
  { npc: "Alice's Farming shop", display_name: "Gardening trowel", item_id: 5325, shop_cost: 12, shop_stock: 500 },
  { npc: "Alice's Farming shop", display_name: "Plant cure", item_id: 6036, shop_cost: 40, shop_stock: 100 },
  { npc: "Alice's Farming shop", display_name: "Rake", item_id: 5341, shop_cost: 6, shop_stock: 500 },
  { npc: "Alice's Farming shop", display_name: "Secateurs", item_id: 5329, shop_cost: 5, shop_stock: 500 },
  { npc: "Alice's Farming shop", display_name: "Seed dibber", item_id: 5343, shop_cost: 6, shop_stock: 500 },
  { npc: "Alice's Farming shop", display_name: "Spade", item_id: 952, shop_cost: 3, shop_stock: 500 },
  { npc: "Alice's Farming shop", display_name: "Watering can", item_id: 5331, shop_cost: 8, shop_stock: 500 },
  { npc: "Amlodd's Magical Supplies", display_name: "Air rune", item_id: 556, shop_cost: 4, shop_stock: 5000 },
  { npc: "Amlodd's Magical Supplies", display_name: "Blood rune", item_id: 565, shop_cost: 400, shop_stock: 250 },
  { npc: "Amlodd's Magical Supplies", display_name: "Body rune", item_id: 559, shop_cost: 3, shop_stock: 5000 },
  { npc: "Amlodd's Magical Supplies", display_name: "Chaos rune", item_id: 562, shop_cost: 90, shop_stock: 250 },
  { npc: "Amlodd's Magical Supplies", display_name: "Cosmic rune", item_id: 564, shop_cost: 50, shop_stock: 250 },
  { npc: "Amlodd's Magical Supplies", display_name: "Death rune", item_id: 560, shop_cost: 180, shop_stock: 250 },
  { npc: "Amlodd's Magical Supplies", display_name: "Earth rune", item_id: 557, shop_cost: 4, shop_stock: 5000 },
  { npc: "Amlodd's Magical Supplies", display_name: "Fire rune", item_id: 554, shop_cost: 4, shop_stock: 5000 },
  { npc: "Amlodd's Magical Supplies", display_name: "Law rune", item_id: 563, shop_cost: 240, shop_stock: 250 },
  { npc: "Amlodd's Magical Supplies", display_name: "Mind rune", item_id: 558, shop_cost: 3, shop_stock: 5000 },
  { npc: "Amlodd's Magical Supplies", display_name: "Nature rune", item_id: 561, shop_cost: 180, shop_stock: 250 },
  { npc: "Amlodd's Magical Supplies", display_name: "Water rune", item_id: 555, shop_cost: 4, shop_stock: 5000 },
  { npc: "Aubury's Rune Shop", display_name: "Air rune", item_id: 556, shop_cost: 4, shop_stock: 5000 },
  { npc: "Aubury's Rune Shop", display_name: "Body rune", item_id: 559, shop_cost: 3, shop_stock: 5000 },
  { npc: "Aubury's Rune Shop", display_name: "Chaos rune", item_id: 562, shop_cost: 90, shop_stock: 250 },
  { npc: "Aubury's Rune Shop", display_name: "Death rune", item_id: 560, shop_cost: 180, shop_stock: 250 },
  { npc: "Aubury's Rune Shop", display_name: "Earth rune", item_id: 557, shop_cost: 4, shop_stock: 5000 },
  { npc: "Aubury's Rune Shop", display_name: "Fire rune", item_id: 554, shop_cost: 4, shop_stock: 5000 },
  { npc: "Aubury's Rune Shop", display_name: "Mind rune", item_id: 558, shop_cost: 3, shop_stock: 5000 },
  { npc: "Aubury's Rune Shop", display_name: "Water rune", item_id: 555, shop_cost: 4, shop_stock: 5000 },
  { npc: "Ava's Odds and Ends", display_name: "Feather", item_id: 314, shop_cost: 2, shop_stock: 1000 },
  { npc: "Ava's Odds and Ends", display_name: "Iron arrow", item_id: 884, shop_cost: 3, shop_stock: 40 },
  { npc: "Ava's Odds and Ends", display_name: "Iron arrowtips", item_id: 40, shop_cost: 2, shop_stock: 30 },
  { npc: "Ava's Odds and Ends", display_name: "Steel arrow", item_id: 886, shop_cost: 15, shop_stock: 10 },
  { npc: "Ava's Odds and Ends", display_name: "Steel arrowtips", item_id: 41, shop_cost: 7, shop_stock: 20 },
  { npc: "Battle Runes", display_name: "Air rune", item_id: 556, shop_cost: 4, shop_stock: 1000 },
  { npc: "Battle Runes", display_name: "Blood rune", item_id: 565, shop_cost: 400, shop_stock: 500 },
  { npc: "Battle Runes", display_name: "Body rune", item_id: 559, shop_cost: 3, shop_stock: 100 },
  { npc: "Battle Runes", display_name: "Chaos rune", item_id: 562, shop_cost: 90, shop_stock: 500 },
  { npc: "Battle Runes", display_name: "Death rune", item_id: 560, shop_cost: 180, shop_stock: 500 },
  { npc: "Battle Runes", display_name: "Earth rune", item_id: 557, shop_cost: 4, shop_stock: 1000 },
  { npc: "Battle Runes", display_name: "Fire rune", item_id: 554, shop_cost: 4, shop_stock: 1000 },
  { npc: "Battle Runes", display_name: "Mind rune", item_id: 558, shop_cost: 3, shop_stock: 1000 },
  { npc: "Battle Runes", display_name: "Water rune", item_id: 555, shop_cost: 4, shop_stock: 1000 },
  { npc: "Betty's Magic Emporium", display_name: "Air rune", item_id: 556, shop_cost: 4, shop_stock: 5000 },
  { npc: "Betty's Magic Emporium", display_name: "Blue wizard hat", item_id: 579, shop_cost: 2, shop_stock: 1 },
  { npc: "Betty's Magic Emporium", display_name: "Body rune", item_id: 559, shop_cost: 3, shop_stock: 5000 },
  { npc: "Betty's Magic Emporium", display_name: "Chaos rune", item_id: 562, shop_cost: 90, shop_stock: 250 },
  { npc: "Betty's Magic Emporium", display_name: "Death rune", item_id: 560, shop_cost: 180, shop_stock: 250 },
  { npc: "Betty's Magic Emporium", display_name: "Earth rune", item_id: 557, shop_cost: 4, shop_stock: 5000 },
  { npc: "Betty's Magic Emporium", display_name: "Eye of newt", item_id: 221, shop_cost: 3, shop_stock: 300 },
  { npc: "Betty's Magic Emporium", display_name: "Fire rune", item_id: 554, shop_cost: 4, shop_stock: 5000 },
  { npc: "Betty's Magic Emporium", display_name: "Mind rune", item_id: 558, shop_cost: 3, shop_stock: 5000 },
  { npc: "Betty's Magic Emporium", display_name: "Water rune", item_id: 555, shop_cost: 4, shop_stock: 5000 },
  { npc: "Betty's Magic Emporium", display_name: "Wizard hat", item_id: 1017, shop_cost: 2, shop_stock: 1 },
  { npc: "Branwen's Farming Shop", display_name: "Basket", item_id: 5376, shop_cost: 1, shop_stock: 500 },
  { npc: "Branwen's Farming Shop", display_name: "Bucket", item_id: 1925, shop_cost: 2, shop_stock: 100 },
  { npc: "Branwen's Farming Shop", display_name: "Compost", item_id: 6032, shop_cost: 20, shop_stock: 500 },
  { npc: "Branwen's Farming Shop", display_name: "Empty plant pot", item_id: 5350, shop_cost: 1, shop_stock: 500 },
  { npc: "Branwen's Farming Shop", display_name: "Empty sack", item_id: 5418, shop_cost: 1, shop_stock: 500 },
  { npc: "Branwen's Farming Shop", display_name: "Filled plant pot", item_id: 5354, shop_cost: 1, shop_stock: 500 },
  { npc: "Branwen's Farming Shop", display_name: "Gardening trowel", item_id: 5325, shop_cost: 12, shop_stock: 500 },
  { npc: "Branwen's Farming Shop", display_name: "Rake", item_id: 5341, shop_cost: 6, shop_stock: 500 },
  { npc: "Branwen's Farming Shop", display_name: "Secateurs", item_id: 5329, shop_cost: 5, shop_stock: 500 },
  { npc: "Branwen's Farming Shop", display_name: "Seed dibber", item_id: 5343, shop_cost: 6, shop_stock: 500 },
  { npc: "Branwen's Farming Shop", display_name: "Spade", item_id: 952, shop_cost: 3, shop_stock: 500 },
  { npc: "Branwen's Farming Shop", display_name: "Watering can", item_id: 5331, shop_cost: 8, shop_stock: 500 },
  { npc: "Construction supplies", display_name: "Bolt of cloth", item_id: 8790, shop_cost: 650, shop_stock: 1000 },
  { npc: "Construction supplies", display_name: "Bronze nails", item_id: 4819, shop_cost: 2, shop_stock: 1000 },
  { npc: "Construction supplies", display_name: "Iron nails", item_id: 4820, shop_cost: 5, shop_stock: 1000 },
  { npc: "Construction supplies", display_name: "Saw", item_id: 8794, shop_cost: 13, shop_stock: 1000 },
  { npc: "Construction supplies", display_name: "Steel nails", item_id: 1539, shop_cost: 3, shop_stock: 1000 },
  { npc: "Darren's Wilderness Cape Shop", display_name: "Team-14 cape", item_id: 4341, shop_cost: 50, shop_stock: 100 },
  { npc: "Darren's Wilderness Cape Shop", display_name: "Team-24 cape", item_id: 4361, shop_cost: 50, shop_stock: 100 },
  { npc: "Darren's Wilderness Cape Shop", display_name: "Team-34 cape", item_id: 4381, shop_cost: 50, shop_stock: 100 },
  { npc: "Darren's Wilderness Cape Shop", display_name: "Team-4 cape", item_id: 4321, shop_cost: 50, shop_stock: 100 },
  { npc: "Darren's Wilderness Cape Shop", display_name: "Team-44 cape", item_id: 4401, shop_cost: 50, shop_stock: 100 },
  { npc: "Edmond's Wilderness Cape Shop", display_name: "Team-18 cape", item_id: 4349, shop_cost: 50, shop_stock: 100 },
  { npc: "Edmond's Wilderness Cape Shop", display_name: "Team-28 cape", item_id: 4369, shop_cost: 50, shop_stock: 100 },
  { npc: "Edmond's Wilderness Cape Shop", display_name: "Team-38 cape", item_id: 4389, shop_cost: 50, shop_stock: 100 },
  { npc: "Edmond's Wilderness Cape Shop", display_name: "Team-48 cape", item_id: 4409, shop_cost: 50, shop_stock: 100 },
  { npc: "Edmond's Wilderness Cape Shop", display_name: "Team-8 cape", item_id: 4329, shop_cost: 50, shop_stock: 100 },
  { npc: "Edward's Wilderness Cape Shop", display_name: "Team-15 cape", item_id: 4343, shop_cost: 50, shop_stock: 100 },
  { npc: "Edward's Wilderness Cape Shop", display_name: "Team-25 cape", item_id: 4363, shop_cost: 50, shop_stock: 100 },
  { npc: "Edward's Wilderness Cape Shop", display_name: "Team-35 cape", item_id: 4383, shop_cost: 50, shop_stock: 100 },
  { npc: "Edward's Wilderness Cape Shop", display_name: "Team-45 cape", item_id: 4403, shop_cost: 50, shop_stock: 100 },
  { npc: "Edward's Wilderness Cape Shop", display_name: "Team-5 cape", item_id: 4323, shop_cost: 50, shop_stock: 100 },
  { npc: "Fishing Guild Shop", display_name: "Big fishing net", item_id: 305, shop_cost: 20, shop_stock: 5 },
  { npc: "Fishing Guild Shop", display_name: "Feather", item_id: 314, shop_cost: 2, shop_stock: 1500 },
  { npc: "Fishing Guild Shop", display_name: "Fishing bait", item_id: 313, shop_cost: 3, shop_stock: 2000 },
  { npc: "Fishing Guild Shop", display_name: "Fishing rod", item_id: 307, shop_cost: 5, shop_stock: 5 },
  { npc: "Fishing Guild Shop", display_name: "Fly fishing rod", item_id: 309, shop_cost: 5, shop_stock: 5 },
  { npc: "Fishing Guild Shop", display_name: "Harpoon", item_id: 311, shop_cost: 5, shop_stock: 2 },
  { npc: "Fishing Guild Shop", display_name: "Lobster pot", item_id: 301, shop_cost: 20, shop_stock: 2 },
  { npc: "Fishing Guild Shop", display_name: "Small fishing net", item_id: 303, shop_cost: 5, shop_stock: 5 },
  { npc: "Frankie's Fishing Emporium", display_name: "Raw anchovies", item_id: 321, shop_cost: 15, shop_stock: 100 },
  { npc: "Frankie's Fishing Emporium", display_name: "Raw bass", item_id: 363, shop_cost: 40, shop_stock: 50 },
  { npc: "Frankie's Fishing Emporium", display_name: "Raw cod", item_id: 341, shop_cost: 10, shop_stock: 100 },
  { npc: "Frankie's Fishing Emporium", display_name: "Raw herring", item_id: 345, shop_cost: 10, shop_stock: 250 },
  { npc: "Frankie's Fishing Emporium", display_name: "Raw lobster", item_id: 377, shop_cost: 70, shop_stock: 50 },
  { npc: "Frankie's Fishing Emporium", display_name: "Raw mackerel", item_id: 353, shop_cost: 15, shop_stock: 250 },
  { npc: "Frankie's Fishing Emporium", display_name: "Raw sardine", item_id: 327, shop_cost: 10, shop_stock: 500 },
  { npc: "Frankie's Fishing Emporium", display_name: "Raw shark", item_id: 383, shop_cost: 170, shop_stock: 25 },
  { npc: "Frankie's Fishing Emporium", display_name: "Raw shrimps", item_id: 317, shop_cost: 5, shop_stock: 500 },
  { npc: "Frankie's Fishing Emporium", display_name: "Raw swordfish", item_id: 371, shop_cost: 80, shop_stock: 50 },
  { npc: "Frankie's Fishing Emporium", display_name: "Raw tuna", item_id: 359, shop_cost: 40, shop_stock: 100 },
  { npc: "Garden Centre", display_name: "Bagged bluebells", item_id: 8455, shop_cost: 15000, shop_stock: 20 },
  { npc: "Garden Centre", display_name: "Bagged daffodils", item_id: 8453, shop_cost: 10000, shop_stock: 20 },
  { npc: "Garden Centre", display_name: "Bagged dead tree", item_id: 8417, shop_cost: 1000, shop_stock: 20 },
  { npc: "Garden Centre", display_name: "Bagged flower", item_id: 8451, shop_cost: 5000, shop_stock: 20 },
  { npc: "Garden Centre", display_name: "Bagged magic tree", item_id: 8429, shop_cost: 50000, shop_stock: 20 },
  { npc: "Garden Centre", display_name: "Bagged maple tree", item_id: 8425, shop_cost: 15000, shop_stock: 20 },
  { npc: "Garden Centre", display_name: "Bagged marigolds", item_id: 8459, shop_cost: 10000, shop_stock: 20 },
  { npc: "Garden Centre", display_name: "Bagged nice tree", item_id: 8419, shop_cost: 2000, shop_stock: 20 },
  { npc: "Garden Centre", display_name: "Bagged oak tree", item_id: 8421, shop_cost: 5000, shop_stock: 20 },
  { npc: "Garden Centre", display_name: "Bagged plant 1", item_id: 8431, shop_cost: 1000, shop_stock: 20 },
  { npc: "Garden Centre", display_name: "Bagged plant 2", item_id: 8433, shop_cost: 5000, shop_stock: 20 },
  { npc: "Garden Centre", display_name: "Bagged plant 3", item_id: 8435, shop_cost: 10000, shop_stock: 20 },
  { npc: "Garden Centre", display_name: "Bagged roses", item_id: 8461, shop_cost: 15000, shop_stock: 20 },
  { npc: "Garden Centre", display_name: "Bagged sunflower", item_id: 8457, shop_cost: 5000, shop_stock: 20 },
  { npc: "Garden Centre", display_name: "Bagged willow tree", item_id: 8423, shop_cost: 10000, shop_stock: 20 },
  { npc: "Garden Centre", display_name: "Bagged yew tree", item_id: 8427, shop_cost: 20000, shop_stock: 20 },
  { npc: "Garden Centre", display_name: "Fancy hedge (bagged)", item_id: 8445, shop_cost: 25000, shop_stock: 20 },
  { npc: "Garden Centre", display_name: "Nice hedge (bagged)", item_id: 8439, shop_cost: 10000, shop_stock: 20 },
  { npc: "Garden Centre", display_name: "Small box hedge (bagged)", item_id: 8441, shop_cost: 15000, shop_stock: 20 },
  { npc: "Garden Centre", display_name: "Tall box hedge (bagged)", item_id: 8449, shop_cost: 100000, shop_stock: 20 },
  { npc: "Garden Centre", display_name: "Tall fancy hedge (bagged)", item_id: 8447, shop_cost: 50000, shop_stock: 20 },
  { npc: "Garden Centre", display_name: "Thorny hedge (bagged)", item_id: 8437, shop_cost: 5000, shop_stock: 20 },
  { npc: "Garden Centre", display_name: "Topiary hedge (bagged)", item_id: 8443, shop_cost: 20000, shop_stock: 20 },
  { npc: "General Store (Canifis)", display_name: "Blood talisman", item_id: 1450, shop_cost: 8, shop_stock: 1 },
  { npc: "General Store (Canifis)", display_name: "Bucket", item_id: 1925, shop_cost: 4, shop_stock: 2 },
  { npc: "General Store (Canifis)", display_name: "Chisel", item_id: 1755, shop_cost: 2, shop_stock: 2 },
  { npc: "General Store (Canifis)", display_name: "Hammer", item_id: 2347, shop_cost: 2, shop_stock: 5 },
  { npc: "General Store (Canifis)", display_name: "Jug", item_id: 1935, shop_cost: 2, shop_stock: 2 },
  { npc: "General Store (Canifis)", display_name: "Knife", item_id: 946, shop_cost: 12, shop_stock: 2 },
  { npc: "General Store (Canifis)", display_name: "Needle", item_id: 1733, shop_cost: 2, shop_stock: 2 },
  { npc: "General Store (Canifis)", display_name: "Pot", item_id: 1931, shop_cost: 2, shop_stock: 3 },
  { npc: "General Store (Canifis)", display_name: "Thread", item_id: 1734, shop_cost: 2, shop_stock: 50 },
  { npc: "General Store (Canifis)", display_name: "Tinderbox", item_id: 590, shop_cost: 2, shop_stock: 2 },
  { npc: "Gerrant's Fishy Business", display_name: "Feather", item_id: 314, shop_cost: 2, shop_stock: 1000 },
  { npc: "Gerrant's Fishy Business", display_name: "Fishing bait", item_id: 313, shop_cost: 3, shop_stock: 1500 },
  { npc: "Gerrant's Fishy Business", display_name: "Fishing rod", item_id: 307, shop_cost: 5, shop_stock: 5 },
  { npc: "Gerrant's Fishy Business", display_name: "Fly fishing rod", item_id: 309, shop_cost: 5, shop_stock: 5 },
  { npc: "Gerrant's Fishy Business", display_name: "Harpoon", item_id: 311, shop_cost: 5, shop_stock: 2 },
  { npc: "Gerrant's Fishy Business", display_name: "Lobster pot", item_id: 301, shop_cost: 20, shop_stock: 2 },
  { npc: "Gerrant's Fishy Business", display_name: "Raw sardine", item_id: 327, shop_cost: 10, shop_stock: 200 },
  { npc: "Gerrant's Fishy Business", display_name: "Small fishing net", item_id: 303, shop_cost: 5, shop_stock: 5 },
  { npc: "Hickton's Archery Emporium", display_name: "Adamant arrowtips", item_id: 43, shop_cost: 40, shop_stock: 200 },
  { npc: "Hickton's Archery Emporium", display_name: "Bronze arrow", item_id: 882, shop_cost: 1, shop_stock: 1000 },
  { npc: "Hickton's Archery Emporium", display_name: "Bronze arrowtips", item_id: 39, shop_cost: 1, shop_stock: 1000 },
  { npc: "Hickton's Archery Emporium", display_name: "Bronze bolts", item_id: 877, shop_cost: 1, shop_stock: 200 },
  { npc: "Hickton's Archery Emporium", display_name: "Crossbow", item_id: 837, shop_cost: 70, shop_stock: 2 },
  { npc: "Hickton's Archery Emporium", display_name: "Iron arrow", item_id: 884, shop_cost: 3, shop_stock: 800 },
  { npc: "Hickton's Archery Emporium", display_name: "Iron arrowtips", item_id: 40, shop_cost: 2, shop_stock: 800 },
  { npc: "Hickton's Archery Emporium", display_name: "Longbow", item_id: 839, shop_cost: 80, shop_stock: 2 },
  { npc: "Hickton's Archery Emporium", display_name: "Mithril arrowtips", item_id: 42, shop_cost: 16, shop_stock: 400 },
  { npc: "Hickton's Archery Emporium", display_name: "Oak longbow", item_id: 845, shop_cost: 160, shop_stock: 4 },
  { npc: "Hickton's Archery Emporium", display_name: "Oak shortbow", item_id: 843, shop_cost: 100, shop_stock: 4 },
  { npc: "Hickton's Archery Emporium", display_name: "Rune arrowtips", item_id: 44, shop_cost: 200, shop_stock: 100 },
  { npc: "Hickton's Archery Emporium", display_name: "Shortbow", item_id: 841, shop_cost: 50, shop_stock: 4 },
  { npc: "Hickton's Archery Emporium", display_name: "Steel arrowtips", item_id: 41, shop_cost: 6, shop_stock: 600 },
  { npc: "Hickton's Archery Emporium", display_name: "Studded body", item_id: 1133, shop_cost: 850, shop_stock: 2 },
  { npc: "Hickton's Archery Emporium", display_name: "Studded chaps", item_id: 1097, shop_cost: 750, shop_stock: 2 },
  { npc: "Ian's Wilderness Cape Shop", display_name: "Team-12 cape", item_id: 4337, shop_cost: 50, shop_stock: 100 },
  { npc: "Ian's Wilderness Cape Shop", display_name: "Team-2 cape", item_id: 4317, shop_cost: 50, shop_stock: 100 },
  { npc: "Ian's Wilderness Cape Shop", display_name: "Team-22 cape", item_id: 4357, shop_cost: 50, shop_stock: 100 },
  { npc: "Ian's Wilderness Cape Shop", display_name: "Team-32 cape", item_id: 4377, shop_cost: 50, shop_stock: 100 },
  { npc: "Ian's Wilderness Cape Shop", display_name: "Team-42 cape", item_id: 4397, shop_cost: 50, shop_stock: 100 },
  { npc: "Keldagrim Stonemason", display_name: "Condensed gold", item_id: 26266, shop_cost: 10400000, shop_stock: 10 },
  { npc: "Keldagrim Stonemason", display_name: "Gold leaf", item_id: 8784, shop_cost: 130000, shop_stock: 20 },
  { npc: "Keldagrim Stonemason", display_name: "Limestone brick", item_id: 3420, shop_cost: 26, shop_stock: 1000 },
  { npc: "Keldagrim Stonemason", display_name: "Magic stone", item_id: 8788, shop_cost: 975000, shop_stock: 10 },
  { npc: "Keldagrim Stonemason", display_name: "Marble block", item_id: 8786, shop_cost: 325000, shop_stock: 20 },
  { npc: "Larry's Wilderness Cape Shop", display_name: "Team-13 cape", item_id: 4339, shop_cost: 50, shop_stock: 100 },
  { npc: "Larry's Wilderness Cape Shop", display_name: "Team-23 cape", item_id: 4359, shop_cost: 50, shop_stock: 100 },
  { npc: "Larry's Wilderness Cape Shop", display_name: "Team-3 cape", item_id: 4319, shop_cost: 50, shop_stock: 100 },
  { npc: "Larry's Wilderness Cape Shop", display_name: "Team-33 cape", item_id: 4379, shop_cost: 50, shop_stock: 100 },
  { npc: "Larry's Wilderness Cape Shop", display_name: "Team-43 cape", item_id: 4399, shop_cost: 50, shop_stock: 100 },
  { npc: "Little Munty's Little Shop", display_name: "Ball of wool", item_id: 1759, shop_cost: 2, shop_stock: 30 },
  { npc: "Little Munty's Little Shop", display_name: "Bowl", item_id: 1923, shop_cost: 4, shop_stock: 5 },
  { npc: "Little Munty's Little Shop", display_name: "Bronze pickaxe", item_id: 1265, shop_cost: 1, shop_stock: 20 },
  { npc: "Little Munty's Little Shop", display_name: "Bucket", item_id: 1925, shop_cost: 2, shop_stock: 5 },
  { npc: "Little Munty's Little Shop", display_name: "Chisel", item_id: 1755, shop_cost: 1, shop_stock: 2 },
  { npc: "Little Munty's Little Shop", display_name: "Hammer", item_id: 2347, shop_cost: 1, shop_stock: 5 },
  { npc: "Little Munty's Little Shop", display_name: "Jug", item_id: 1935, shop_cost: 1, shop_stock: 5 },
  { npc: "Little Munty's Little Shop", display_name: "Pot", item_id: 1931, shop_cost: 1, shop_stock: 50000 },
  { npc: "Little Munty's Little Shop", display_name: "Tinderbox", item_id: 590, shop_cost: 1, shop_stock: 2 },
  { npc: "Lliann's Wares", display_name: "Elven boots", item_id: 24003, shop_cost: 10000, shop_stock: 50 },
  { npc: "Lliann's Wares", display_name: "Elven gloves", item_id: 24006, shop_cost: 10000, shop_stock: 50 },
  { npc: "Lliann's Wares", display_name: "Elven legwear", item_id: 24024, shop_cost: 5000, shop_stock: 100 },
  { npc: "Lliann's Wares", display_name: "Elven skirt (white)", item_id: 24018, shop_cost: 5000, shop_stock: 100 },
  { npc: "Lliann's Wares", display_name: "Elven skirt (yellow)", item_id: 24012, shop_cost: 5000, shop_stock: 100 },
  { npc: "Lliann's Wares", display_name: "Elven top (white vest)", item_id: 24027, shop_cost: 5000, shop_stock: 100 },
  { npc: "Lliann's Wares", display_name: "Elven top (white)", item_id: 24015, shop_cost: 5000, shop_stock: 100 },
  { npc: "Lliann's Wares", display_name: "Elven top (yellow vest)", item_id: 24021, shop_cost: 5000, shop_stock: 100 },
  { npc: "Lliann's Wares", display_name: "Elven top (yellow)", item_id: 24009, shop_cost: 5000, shop_stock: 100 },
  { npc: "Lundail's Arena-side Rune Shop", display_name: "Air rune", item_id: 556, shop_cost: 4, shop_stock: 200 },
  { npc: "Lundail's Arena-side Rune Shop", display_name: "Body rune", item_id: 559, shop_cost: 3, shop_stock: 140 },
  { npc: "Lundail's Arena-side Rune Shop", display_name: "Chaos rune", item_id: 562, shop_cost: 90, shop_stock: 250 },
  { npc: "Lundail's Arena-side Rune Shop", display_name: "Cosmic rune", item_id: 564, shop_cost: 50, shop_stock: 20 },
  { npc: "Lundail's Arena-side Rune Shop", display_name: "Death rune", item_id: 560, shop_cost: 180, shop_stock: 250 },
  { npc: "Lundail's Arena-side Rune Shop", display_name: "Earth rune", item_id: 557, shop_cost: 4, shop_stock: 200 },
  { npc: "Lundail's Arena-side Rune Shop", display_name: "Fire rune", item_id: 554, shop_cost: 4, shop_stock: 200 },
  { npc: "Lundail's Arena-side Rune Shop", display_name: "Law rune", item_id: 563, shop_cost: 240, shop_stock: 250 },
  { npc: "Lundail's Arena-side Rune Shop", display_name: "Mind rune", item_id: 558, shop_cost: 3, shop_stock: 140 },
  { npc: "Lundail's Arena-side Rune Shop", display_name: "Nature rune", item_id: 561, shop_cost: 180, shop_stock: 250 },
  { npc: "Lundail's Arena-side Rune Shop", display_name: "Water rune", item_id: 555, shop_cost: 4, shop_stock: 200 },
  { npc: "Myths' Guild Armoury", display_name: "Dragon metal shard", item_id: 22097, shop_cost: 1800000, shop_stock: 1 },
  { npc: "Myths' Guild Armoury", display_name: "Shield right half", item_id: 2368, shop_cost: 750000, shop_stock: 1 },
  { npc: "Neil's Wilderness Cape Shop", display_name: "Team-17 cape", item_id: 4347, shop_cost: 50, shop_stock: 100 },
  { npc: "Neil's Wilderness Cape Shop", display_name: "Team-27 cape", item_id: 4367, shop_cost: 50, shop_stock: 100 },
  { npc: "Neil's Wilderness Cape Shop", display_name: "Team-37 cape", item_id: 4387, shop_cost: 50, shop_stock: 100 },
  { npc: "Neil's Wilderness Cape Shop", display_name: "Team-47 cape", item_id: 4407, shop_cost: 50, shop_stock: 100 },
  { npc: "Neil's Wilderness Cape Shop", display_name: "Team-7 cape", item_id: 4327, shop_cost: 50, shop_stock: 100 },
  { npc: "Oziach", display_name: "Anti-dragon shield", item_id: 1540, shop_cost: 26, shop_stock: 35 },
  { npc: "Pellem's Fur Store", display_name: "Bear fur", item_id: 948, shop_cost: 13, shop_stock: 3 },
  { npc: "Pellem's Fur Store", display_name: "Fur", item_id: 6814, shop_cost: 13, shop_stock: 3 },
  { npc: "Pellem's Fur Store", display_name: "Grey wolf fur", item_id: 958, shop_cost: 65, shop_stock: 3 },
  { npc: "Pellem's Fur Store", display_name: "Jaguar fur", item_id: 29218, shop_cost: 104, shop_stock: 2 },
  { npc: "Pellem's Fur Store", display_name: "Mixed hide base", item_id: 29292, shop_cost: 11700, shop_stock: 10 },
  { npc: "Pellem's Fur Store", display_name: "Needle", item_id: 1733, shop_cost: 1, shop_stock: 3 },
  { npc: "Pellem's Fur Store", display_name: "Thread", item_id: 1734, shop_cost: 1, shop_stock: 100 },
  { npc: "Razmire Builders Merchants", display_name: "Limestone", item_id: 3211, shop_cost: 10, shop_stock: 1000 },
  { npc: "Razmire Builders Merchants", display_name: "Limestone brick", item_id: 3420, shop_cost: 21, shop_stock: 1000 },
  { npc: "Razmire Builders Merchants", display_name: "Plank", item_id: 960, shop_cost: 1, shop_stock: 10 },
  { npc: "Razmire Builders Merchants", display_name: "Swamp paste", item_id: 1941, shop_cost: 31, shop_stock: 1000 },
  { npc: "Razmire Builders Merchants", display_name: "Timber beam", item_id: 8837, shop_cost: 1, shop_stock: 1000 },
  { npc: "Richard's Farming shop", display_name: "Basket", item_id: 5376, shop_cost: 1, shop_stock: 500 },
  { npc: "Richard's Farming shop", display_name: "Bucket", item_id: 1925, shop_cost: 2, shop_stock: 100 },
  { npc: "Richard's Farming shop", display_name: "Compost", item_id: 6032, shop_cost: 20, shop_stock: 500 },
  { npc: "Richard's Farming shop", display_name: "Empty sack", item_id: 5418, shop_cost: 1, shop_stock: 500 },
  { npc: "Richard's Farming shop", display_name: "Filled plant pot", item_id: 5354, shop_cost: 1, shop_stock: 500 },
  { npc: "Richard's Farming shop", display_name: "Gardening trowel", item_id: 5325, shop_cost: 12, shop_stock: 500 },
  { npc: "Richard's Farming shop", display_name: "Plant cure", item_id: 6036, shop_cost: 40, shop_stock: 100 },
  { npc: "Richard's Farming shop", display_name: "Rake", item_id: 5341, shop_cost: 6, shop_stock: 500 },
  { npc: "Richard's Farming shop", display_name: "Secateurs", item_id: 5329, shop_cost: 5, shop_stock: 500 },
  { npc: "Richard's Farming shop", display_name: "Seed dibber", item_id: 5343, shop_cost: 6, shop_stock: 500 },
  { npc: "Richard's Farming shop", display_name: "Spade", item_id: 952, shop_cost: 3, shop_stock: 500 },
  { npc: "Richard's Farming shop", display_name: "Watering can", item_id: 5331, shop_cost: 8, shop_stock: 500 },
  { npc: "Sam's Wilderness Cape Shop", display_name: "Team-10 cape", item_id: 4333, shop_cost: 50, shop_stock: 100 },
  { npc: "Sam's Wilderness Cape Shop", display_name: "Team-20 cape", item_id: 4353, shop_cost: 50, shop_stock: 100 },
  { npc: "Sam's Wilderness Cape Shop", display_name: "Team-30 cape", item_id: 4373, shop_cost: 50, shop_stock: 100 },
  { npc: "Sam's Wilderness Cape Shop", display_name: "Team-40 cape", item_id: 4393, shop_cost: 50, shop_stock: 100 },
  { npc: "Sam's Wilderness Cape Shop", display_name: "Team-50 cape", item_id: 4413, shop_cost: 50, shop_stock: 100 },
  { npc: "Sarah's Farming shop", display_name: "Basket", item_id: 5376, shop_cost: 1, shop_stock: 500 },
  { npc: "Sarah's Farming shop", display_name: "Bucket", item_id: 1925, shop_cost: 2, shop_stock: 100 },
  { npc: "Sarah's Farming shop", display_name: "Compost", item_id: 6032, shop_cost: 20, shop_stock: 500 },
  { npc: "Sarah's Farming shop", display_name: "Empty sack", item_id: 5418, shop_cost: 1, shop_stock: 500 },
  { npc: "Sarah's Farming shop", display_name: "Filled plant pot", item_id: 5354, shop_cost: 1, shop_stock: 500 },
  { npc: "Sarah's Farming shop", display_name: "Gardening trowel", item_id: 5325, shop_cost: 12, shop_stock: 500 },
  { npc: "Sarah's Farming shop", display_name: "Plant cure", item_id: 6036, shop_cost: 40, shop_stock: 100 },
  { npc: "Sarah's Farming shop", display_name: "Rake", item_id: 5341, shop_cost: 6, shop_stock: 500 },
  { npc: "Sarah's Farming shop", display_name: "Secateurs", item_id: 5329, shop_cost: 5, shop_stock: 500 },
  { npc: "Sarah's Farming shop", display_name: "Seed dibber", item_id: 5343, shop_cost: 6, shop_stock: 500 },
  { npc: "Sarah's Farming shop", display_name: "Spade", item_id: 952, shop_cost: 3, shop_stock: 500 },
  { npc: "Sarah's Farming shop", display_name: "Watering can", item_id: 5331, shop_cost: 8, shop_stock: 500 },
  { npc: "Simon's Wilderness Cape Shop", display_name: "Team-19 cape", item_id: 4351, shop_cost: 50, shop_stock: 100 },
  { npc: "Simon's Wilderness Cape Shop", display_name: "Team-29 cape", item_id: 4371, shop_cost: 50, shop_stock: 100 },
  { npc: "Simon's Wilderness Cape Shop", display_name: "Team-39 cape", item_id: 4391, shop_cost: 50, shop_stock: 100 },
  { npc: "Simon's Wilderness Cape Shop", display_name: "Team-49 cape", item_id: 4411, shop_cost: 50, shop_stock: 100 },
  { npc: "Simon's Wilderness Cape Shop", display_name: "Team-9 cape", item_id: 4331, shop_cost: 50, shop_stock: 100 },
  { npc: "Slayer Equipment", display_name: "Bag of salt", item_id: 4161, shop_cost: 10, shop_stock: 5000 },
  { npc: "Slayer Equipment", display_name: "Boots of stone", item_id: 23037, shop_cost: 200, shop_stock: 50 },
  { npc: "Slayer Equipment", display_name: "Broad arrowheads", item_id: 11874, shop_cost: 55, shop_stock: 3000 },
  { npc: "Slayer Equipment", display_name: "Earmuffs", item_id: 4166, shop_cost: 200, shop_stock: 50 },
  { npc: "Slayer Equipment", display_name: "Facemask", item_id: 4164, shop_cost: 200, shop_stock: 50 },
  { npc: "Slayer Equipment", display_name: "Insulated boots", item_id: 7159, shop_cost: 200, shop_stock: 50 },
  { npc: "Slayer Equipment", display_name: "Mirror shield", item_id: 4156, shop_cost: 5000, shop_stock: 100 },
  { npc: "Slayer Equipment", display_name: "Nose peg", item_id: 4168, shop_cost: 200, shop_stock: 50 },
  { npc: "Slayer Equipment", display_name: "Rock hammer", item_id: 4162, shop_cost: 500, shop_stock: 50 },
  { npc: "Slayer Equipment", display_name: "Rock thrownhammer", item_id: 21754, shop_cost: 200, shop_stock: 5000 },
  { npc: "Slayer Equipment", display_name: "Slayer bell", item_id: 10952, shop_cost: 150, shop_stock: 50 },
  { npc: "Slayer Equipment", display_name: "Slayer's staff", item_id: 4170, shop_cost: 21000, shop_stock: 50 },
  { npc: "Slayer Equipment", display_name: "Spiny helmet", item_id: 4551, shop_cost: 650, shop_stock: 50 },
  { npc: "Slayer Equipment", display_name: "Unfinished broad bolts", item_id: 11876, shop_cost: 55, shop_stock: 5000 },
  { npc: "Slayer Equipment", display_name: "Unlit bug lantern", item_id: 7051, shop_cost: 130, shop_stock: 50 },
  { npc: "Solihib's Food Stall", display_name: "Banana", item_id: 1963, shop_cost: 2, shop_stock: 1000 },
  { npc: "Solihib's Food Stall", display_name: "Banana stew", item_id: 4016, shop_cost: 300, shop_stock: 10 },
  { npc: "Solihib's Food Stall", display_name: "Monkey bar", item_id: 4014, shop_cost: 50, shop_stock: 20 },
  { npc: "Solihib's Food Stall", display_name: "Monkey nuts", item_id: 4012, shop_cost: 3, shop_stock: 200 },
  { npc: "Stonecutter Supplies", display_name: "Bronze pickaxe", item_id: 1265, shop_cost: 1, shop_stock: 5 },
  { npc: "Stonecutter Supplies", display_name: "Condensed gold", item_id: 26266, shop_cost: 10400000, shop_stock: 10 },
  { npc: "Stonecutter Supplies", display_name: "Gold leaf", item_id: 8784, shop_cost: 130000, shop_stock: 40 },
  { npc: "Stonecutter Supplies", display_name: "Limestone brick", item_id: 3420, shop_cost: 26, shop_stock: 100 },
  { npc: "Stonecutter Supplies", display_name: "Magic stone", item_id: 8788, shop_cost: 975000, shop_stock: 10 },
  { npc: "Stonecutter Supplies", display_name: "Marble block", item_id: 8786, shop_cost: 325000, shop_stock: 30 },
  { npc: "Tal Teklan Rune Shop", display_name: "Air rune", item_id: 556, shop_cost: 4, shop_stock: 5000 },
  { npc: "Tal Teklan Rune Shop", display_name: "Body rune", item_id: 559, shop_cost: 3, shop_stock: 3000 },
  { npc: "Tal Teklan Rune Shop", display_name: "Chaos rune", item_id: 562, shop_cost: 90, shop_stock: 250 },
  { npc: "Tal Teklan Rune Shop", display_name: "Cosmic rune", item_id: 564, shop_cost: 50, shop_stock: 30 },
  { npc: "Tal Teklan Rune Shop", display_name: "Death rune", item_id: 560, shop_cost: 180, shop_stock: 100 },
  { npc: "Tal Teklan Rune Shop", display_name: "Earth rune", item_id: 557, shop_cost: 4, shop_stock: 5000 },
  { npc: "Tal Teklan Rune Shop", display_name: "Fire rune", item_id: 554, shop_cost: 4, shop_stock: 5000 },
  { npc: "Tal Teklan Rune Shop", display_name: "Mind rune", item_id: 558, shop_cost: 3, shop_stock: 3000 },
  { npc: "Tal Teklan Rune Shop", display_name: "Nature rune", item_id: 561, shop_cost: 180, shop_stock: 30 },
  { npc: "Tal Teklan Rune Shop", display_name: "Water rune", item_id: 555, shop_cost: 4, shop_stock: 5000 },
  { npc: "The Runic Emporium", display_name: "Air rune", item_id: 556, shop_cost: 4, shop_stock: 5000 },
  { npc: "The Runic Emporium", display_name: "Body rune", item_id: 559, shop_cost: 3, shop_stock: 3000 },
  { npc: "The Runic Emporium", display_name: "Chaos rune", item_id: 562, shop_cost: 90, shop_stock: 1000 },
  { npc: "The Runic Emporium", display_name: "Death rune", item_id: 560, shop_cost: 180, shop_stock: 500 },
  { npc: "The Runic Emporium", display_name: "Earth rune", item_id: 557, shop_cost: 4, shop_stock: 5000 },
  { npc: "The Runic Emporium", display_name: "Fire rune", item_id: 554, shop_cost: 4, shop_stock: 5000 },
  { npc: "The Runic Emporium", display_name: "Law rune", item_id: 563, shop_cost: 240, shop_stock: 500 },
  { npc: "The Runic Emporium", display_name: "Mind rune", item_id: 558, shop_cost: 3, shop_stock: 3000 },
  { npc: "The Runic Emporium", display_name: "Nature rune", item_id: 561, shop_cost: 180, shop_stock: 500 },
  { npc: "The Runic Emporium", display_name: "Water rune", item_id: 555, shop_cost: 4, shop_stock: 5000 },
  { npc: "Thyria's Wares", display_name: "Air rune", item_id: 556, shop_cost: 4, shop_stock: 5000 },
  { npc: "Thyria's Wares", display_name: "Body rune", item_id: 559, shop_cost: 3, shop_stock: 5000 },
  { npc: "Thyria's Wares", display_name: "Chaos rune", item_id: 562, shop_cost: 90, shop_stock: 250 },
  { npc: "Thyria's Wares", display_name: "Death rune", item_id: 560, shop_cost: 180, shop_stock: 250 },
  { npc: "Thyria's Wares", display_name: "Earth rune", item_id: 557, shop_cost: 4, shop_stock: 5000 },
  { npc: "Thyria's Wares", display_name: "Fire rune", item_id: 554, shop_cost: 4, shop_stock: 5000 },
  { npc: "Thyria's Wares", display_name: "Mind rune", item_id: 558, shop_cost: 3, shop_stock: 5000 },
  { npc: "Thyria's Wares", display_name: "Water rune", item_id: 555, shop_cost: 4, shop_stock: 5000 },
  { npc: "Toothy's Pickaxes", display_name: "Adamant pickaxe", item_id: 1271, shop_cost: 4160, shop_stock: 1 },
  { npc: "Toothy's Pickaxes", display_name: "Bronze pickaxe", item_id: 1265, shop_cost: 1, shop_stock: 5 },
  { npc: "Toothy's Pickaxes", display_name: "Iron pickaxe", item_id: 1267, shop_cost: 182, shop_stock: 3 },
  { npc: "Toothy's Pickaxes", display_name: "Mithril pickaxe", item_id: 1273, shop_cost: 1690, shop_stock: 2 },
  { npc: "Toothy's Pickaxes", display_name: "Pot", item_id: 1931, shop_cost: 1, shop_stock: 50000 },
  { npc: "Toothy's Pickaxes", display_name: "Rune pickaxe", item_id: 1275, shop_cost: 41600, shop_stock: 1 },
  { npc: "Toothy's Pickaxes", display_name: "Steel pickaxe", item_id: 1269, shop_cost: 650, shop_stock: 3 },
  { npc: "Trader Stan's Trading Post", display_name: "Banana", item_id: 1963, shop_cost: 5, shop_stock: 15 },
  { npc: "Trader Stan's Trading Post", display_name: "Bowl", item_id: 1923, shop_cost: 10, shop_stock: 2 },
  { npc: "Trader Stan's Trading Post", display_name: "Bronze cannonball", item_id: 31906, shop_cost: 5, shop_stock: 250 },
  { npc: "Trader Stan's Trading Post", display_name: "Bucket", item_id: 1925, shop_cost: 5, shop_stock: 3 },
  { npc: "Trader Stan's Trading Post", display_name: "Bucket of sand", item_id: 1783, shop_cost: 5, shop_stock: 10 },
  { npc: "Trader Stan's Trading Post", display_name: "Cake tin", item_id: 1887, shop_cost: 25, shop_stock: 2 },
  { npc: "Trader Stan's Trading Post", display_name: "Chisel", item_id: 1755, shop_cost: 2, shop_stock: 2 },
  { npc: "Trader Stan's Trading Post", display_name: "Fishing rod", item_id: 307, shop_cost: 12, shop_stock: 20 },
  { npc: "Trader Stan's Trading Post", display_name: "Glassblowing pipe", item_id: 1785, shop_cost: 5, shop_stock: 15 },
  { npc: "Trader Stan's Trading Post", display_name: "Hammer", item_id: 2347, shop_cost: 2, shop_stock: 5 },
  { npc: "Trader Stan's Trading Post", display_name: "Jug", item_id: 1935, shop_cost: 2, shop_stock: 2 },
  { npc: "Trader Stan's Trading Post", display_name: "Knife", item_id: 946, shop_cost: 15, shop_stock: 2 },
  { npc: "Trader Stan's Trading Post", display_name: "Lobster pot", item_id: 301, shop_cost: 50, shop_stock: 20 },
  { npc: "Trader Stan's Trading Post", display_name: "Orange", item_id: 2108, shop_cost: 5, shop_stock: 10 },
  { npc: "Trader Stan's Trading Post", display_name: "Pineapple", item_id: 2114, shop_cost: 5, shop_stock: 15 },
  { npc: "Trader Stan's Trading Post", display_name: "Pot", item_id: 1931, shop_cost: 2, shop_stock: 5 },
  { npc: "Trader Stan's Trading Post", display_name: "Raw rabbit", item_id: 3226, shop_cost: 50, shop_stock: 20 },
  { npc: "Trader Stan's Trading Post", display_name: "Right eye patch", item_id: 1025, shop_cost: 5, shop_stock: 5 },
  { npc: "Trader Stan's Trading Post", display_name: "Rope", item_id: 954, shop_cost: 45, shop_stock: 2 },
  { npc: "Trader Stan's Trading Post", display_name: "Seaweed", item_id: 401, shop_cost: 5, shop_stock: 20 },
  { npc: "Trader Stan's Trading Post", display_name: "Security book", item_id: 9003, shop_cost: 5, shop_stock: 5 },
  { npc: "Trader Stan's Trading Post", display_name: "Shears", item_id: 1735, shop_cost: 2, shop_stock: 2 },
  { npc: "Trader Stan's Trading Post", display_name: "Soda ash", item_id: 1781, shop_cost: 5, shop_stock: 10 },
  { npc: "Trader Stan's Trading Post", display_name: "Swamp paste", item_id: 1941, shop_cost: 75, shop_stock: 30 },
  { npc: "Trader Stan's Trading Post", display_name: "Tinderbox", item_id: 590, shop_cost: 2, shop_stock: 2 },
  { npc: "Trader Stan's Trading Post", display_name: "Tyras helm", item_id: 9629, shop_cost: 1375, shop_stock: 25 },
  { npc: "Uglug's stuffsies", display_name: "Achey tree logs", item_id: 2862, shop_cost: 4, shop_stock: 100 },
  { npc: "Uglug's stuffsies", display_name: "Bow string", item_id: 1777, shop_cost: 10, shop_stock: 10 },
  { npc: "Uglug's stuffsies", display_name: "Cooked chompy", item_id: 2878, shop_cost: 130, shop_stock: 10 },
  { npc: "Uglug's stuffsies", display_name: "Knife", item_id: 946, shop_cost: 6, shop_stock: 5 },
  { npc: "Uglug's stuffsies", display_name: "Relicym's balm(3)", item_id: 4844, shop_cost: 200, shop_stock: 100 },
  { npc: "Vanessa's Farming shop", display_name: "Basket", item_id: 5376, shop_cost: 1, shop_stock: 500 },
  { npc: "Vanessa's Farming shop", display_name: "Bucket", item_id: 1925, shop_cost: 2, shop_stock: 100 },
  { npc: "Vanessa's Farming shop", display_name: "Compost", item_id: 6032, shop_cost: 20, shop_stock: 500 },
  { npc: "Vanessa's Farming shop", display_name: "Empty sack", item_id: 5418, shop_cost: 1, shop_stock: 500 },
  { npc: "Vanessa's Farming shop", display_name: "Filled plant pot", item_id: 5354, shop_cost: 1, shop_stock: 500 },
  { npc: "Vanessa's Farming shop", display_name: "Gardening trowel", item_id: 5325, shop_cost: 12, shop_stock: 500 },
  { npc: "Vanessa's Farming shop", display_name: "Plant cure", item_id: 6036, shop_cost: 40, shop_stock: 100 },
  { npc: "Vanessa's Farming shop", display_name: "Rake", item_id: 5341, shop_cost: 6, shop_stock: 500 },
  { npc: "Vanessa's Farming shop", display_name: "Secateurs", item_id: 5329, shop_cost: 5, shop_stock: 500 },
  { npc: "Vanessa's Farming shop", display_name: "Seed dibber", item_id: 5343, shop_cost: 6, shop_stock: 500 },
  { npc: "Vanessa's Farming shop", display_name: "Spade", item_id: 952, shop_cost: 3, shop_stock: 500 },
  { npc: "Vanessa's Farming shop", display_name: "Watering can", item_id: 5331, shop_cost: 8, shop_stock: 500 },
  { npc: "Void Knight Magic Store", display_name: "Air rune", item_id: 556, shop_cost: 4, shop_stock: 5000 },
  { npc: "Void Knight Magic Store", display_name: "Body rune", item_id: 559, shop_cost: 3, shop_stock: 5000 },
  { npc: "Void Knight Magic Store", display_name: "Chaos rune", item_id: 562, shop_cost: 90, shop_stock: 250 },
  { npc: "Void Knight Magic Store", display_name: "Death rune", item_id: 560, shop_cost: 180, shop_stock: 250 },
  { npc: "Void Knight Magic Store", display_name: "Earth rune", item_id: 557, shop_cost: 4, shop_stock: 5000 },
  { npc: "Void Knight Magic Store", display_name: "Fire rune", item_id: 554, shop_cost: 4, shop_stock: 5000 },
  { npc: "Void Knight Magic Store", display_name: "Mind rune", item_id: 558, shop_cost: 3, shop_stock: 5000 },
  { npc: "Void Knight Magic Store", display_name: "Water rune", item_id: 555, shop_cost: 4, shop_stock: 5000 },
  { npc: "White Knight Armoury", display_name: "White 2h sword", item_id: 6609, shop_cost: 1920, shop_stock: 20 },
  { npc: "White Knight Armoury", display_name: "White battleaxe", item_id: 6589, shop_cost: 1248, shop_stock: 20 },
  { npc: "White Knight Armoury", display_name: "White boots", item_id: 6619, shop_cost: 576, shop_stock: 20 },
  { npc: "White Knight Armoury", display_name: "White chainbody", item_id: 6615, shop_cost: 1440, shop_stock: 20 },
  { npc: "White Knight Armoury", display_name: "White claws", item_id: 6587, shop_cost: 360, shop_stock: 20 },
  { npc: "White Knight Armoury", display_name: "White dagger", item_id: 6591, shop_cost: 240, shop_stock: 20 },
  { npc: "White Knight Armoury", display_name: "White full helm", item_id: 6623, shop_cost: 1056, shop_stock: 20 },
  { npc: "White Knight Armoury", display_name: "White gloves", item_id: 6629, shop_cost: 6, shop_stock: 20 },
  { npc: "White Knight Armoury", display_name: "White halberd", item_id: 6599, shop_cost: 1920, shop_stock: 20 },
  { npc: "White Knight Armoury", display_name: "White kiteshield", item_id: 6633, shop_cost: 1632, shop_stock: 20 },
  { npc: "White Knight Armoury", display_name: "White longsword", item_id: 6607, shop_cost: 960, shop_stock: 20 },
  { npc: "White Knight Armoury", display_name: "White mace", item_id: 6601, shop_cost: 432, shop_stock: 20 },
  { npc: "White Knight Armoury", display_name: "White magic staff", item_id: 6603, shop_cost: 200, shop_stock: 20 },
  { npc: "White Knight Armoury", display_name: "White med helm", item_id: 6621, shop_cost: 576, shop_stock: 20 },
  { npc: "White Knight Armoury", display_name: "White platebody", item_id: 6617, shop_cost: 3840, shop_stock: 20 },
  { npc: "White Knight Armoury", display_name: "White platelegs", item_id: 6625, shop_cost: 1920, shop_stock: 20 },
  { npc: "White Knight Armoury", display_name: "White plateskirt", item_id: 6627, shop_cost: 1920, shop_stock: 20 },
  { npc: "White Knight Armoury", display_name: "White scimitar", item_id: 6611, shop_cost: 768, shop_stock: 20 },
  { npc: "White Knight Armoury", display_name: "White sq shield", item_id: 6631, shop_cost: 1152, shop_stock: 20 },
  { npc: "White Knight Armoury", display_name: "White sword", item_id: 6605, shop_cost: 624, shop_stock: 20 },
  { npc: "White Knight Armoury", display_name: "White warhammer", item_id: 6613, shop_cost: 980, shop_stock: 20 },
  { npc: "William's Wilderness Cape Shop", display_name: "Team-1 cape", item_id: 4315, shop_cost: 50, shop_stock: 100 },
  { npc: "William's Wilderness Cape Shop", display_name: "Team-11 cape", item_id: 4335, shop_cost: 50, shop_stock: 100 },
  { npc: "William's Wilderness Cape Shop", display_name: "Team-21 cape", item_id: 4355, shop_cost: 50, shop_stock: 100 },
  { npc: "William's Wilderness Cape Shop", display_name: "Team-31 cape", item_id: 4375, shop_cost: 50, shop_stock: 100 },
  { npc: "William's Wilderness Cape Shop", display_name: "Team-41 cape", item_id: 4395, shop_cost: 50, shop_stock: 100 },
];

window.Flipwise = Flipwise;
