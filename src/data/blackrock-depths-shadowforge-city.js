const createWowheadUrl = (type, id, slug) => {
  return `https://www.wowhead.com/classic/${type}=${id}${slug ? `/${slug}` : ""}`;
};

export const blackrockDepthsShadowforgeCity = {
  id: "blackrock-depths-shadowforge-city",
  zoneId: 1584,
  name: "Blackrock Depths: Shadowforge City",
  shortName: "BRD Emp",
  levelRange: "55–60",
  zone: "Blackrock Mountain",
  mapSrc: "/wow-classic-tank-helper/maps/blackrock-depths.jpg",
  width: 1024,
  height: 683,

  markers: [
    {
      id: "general-angerforge",
      type: "boss",
      label: "General Angerforge",
      npcId: 9033,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 9033, "general-angerforge"),
      notes: "Dark Iron general near the barracks.",
      loot: [
        {
          id: 11816,
          name: "Angerforge's Battle Axe",
          type: "Two-Hand Axe",
          url: createWowheadUrl("item", 11816, "angerforges-battle-axe"),
        },
        {
          id: 11810,
          name: "Force of Will",
          type: "Trinket",
          url: createWowheadUrl("item", 11810, "force-of-will"),
        },
      ],
    },

    {
      id: "golem-lord-argelmach",
      type: "boss",
      label: "Golem Lord Argelmach",
      npcId: 8983,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 8983, "golem-lord-argelmach"),
      notes: "Golem master with two constructs.",
      loot: [
        {
          id: 11819,
          name: "Second Wind",
          type: "Trinket",
          url: createWowheadUrl("item", 11819, "second-wind"),
        },
        {
          id: 11820,
          name: "Royal Decorated Armor",
          type: "Mail Chest",
          url: createWowheadUrl("item", 11820, "royal-decorated-armor"),
        },
      ],
    },

    {
      id: "ribbly-screwspigot",
      type: "boss",
      label: "Ribbly Screwspigot",
      npcId: 9543,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 9543, "ribbly-screwspigot"),
      notes: "Grim Guzzler goblin boss.",
      loot: [
        {
          id: 2663,
          name: "Ribbly's Quiver",
          type: "Quiver",
          url: createWowheadUrl("item", 2663, "ribblys-quiver"),
        },
        {
          id: 12552,
          name: "Blisterbane Wrap",
          type: "Cloth Hands",
          url: createWowheadUrl("item", 12552, "blisterbane-wrap"),
        },
      ],
    },

    {
      id: "hurley-blackbreath",
      type: "boss",
      label: "Hurley Blackbreath",
      npcId: 9537,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 9537, "hurley-blackbreath"),
      notes: "Grim Guzzler boss.",
      loot: [
        {
          id: 18043,
          name: "Coal Miner Boots",
          type: "Mail Feet",
          url: createWowheadUrl("item", 18043, "coal-miner-boots"),
        },
        {
          id: 18044,
          name: "Hurley's Tankard",
          type: "One-Hand Mace",
          url: createWowheadUrl("item", 18044, "hurleys-tankard"),
        },
      ],
    },

    {
      id: "phalanx",
      type: "boss",
      label: "Phalanx",
      npcId: 9502,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 9502, "phalanx"),
      notes: "Golem boss at the Grim Guzzler.",
      loot: [
        {
          id: 11745,
          name: "Fists of Phalanx",
          type: "Plate Hands",
          url: createWowheadUrl("item", 11745, "fists-of-phalanx"),
        },
        {
          id: 11744,
          name: "Bloodfist",
          type: "One-Hand Mace",
          url: createWowheadUrl("item", 11744, "bloodfist"),
        },
      ],
    },

    {
      id: "plugger-spazzring",
      type: "boss",
      label: "Plugger Spazzring",
      npcId: 9499,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 9499, "plugger-spazzring"),
      notes: "Grim Guzzler bartender.",
      loot: [
        {
          id: 12791,
          name: "Barman Shanker",
          type: "One-Hand Dagger",
          url: createWowheadUrl("item", 12791, "barman-shanker"),
        },
        {
          id: 13483,
          name: "Recipe: Transmute Fire to Earth",
          type: "Alchemy Recipe",
          url: createWowheadUrl("item", 13483, "recipe-transmute-fire-to-earth"),
        },
      ],
    },

    {
      id: "ambassador-flamelash",
      type: "boss",
      label: "Ambassador Flamelash",
      npcId: 9156,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 9156, "ambassador-flamelash"),
      notes: "Fire elemental boss after the Grim Guzzler.",
      loot: [
        {
          id: 11832,
          name: "Burst of Knowledge",
          type: "Trinket",
          url: createWowheadUrl("item", 11832, "burst-of-knowledge"),
        },
        {
          id: 11814,
          name: "Molten Fists",
          type: "Mail Hands",
          url: createWowheadUrl("item", 11814, "molten-fists"),
        },
      ],
    },

    {
      id: "magmus",
      type: "boss",
      label: "Magmus",
      npcId: 9938,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 9938, "magmus"),
      notes: "Giant golem before the throne room.",
      loot: [
        {
          id: 11746,
          name: "Golem Skull Helm",
          type: "Plate Head",
          url: createWowheadUrl("item", 11746, "golem-skull-helm"),
        },
        {
          id: 11935,
          name: "Magmus Stone",
          type: "Off-hand",
          url: createWowheadUrl("item", 11935, "magmus-stone"),
        },
      ],
    },

    {
      id: "emperor-dagran-thaurissan",
      type: "boss",
      label: "Emperor Dagran Thaurissan",
      npcId: 9019,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 9019, "emperor-dagran-thaurissan"),
      notes: "Final boss of Blackrock Depths.",
      loot: [
        {
          id: 11815,
          name: "Hand of Justice",
          type: "Trinket",
          url: createWowheadUrl("item", 11815, "hand-of-justice"),
        },
        {
          id: 11684,
          name: "Ironfoe",
          type: "One-Hand Mace",
          url: createWowheadUrl("item", 11684, "ironfoe"),
        },
        {
          id: 11933,
          name: "Imperial Jewel",
          type: "Neck",
          url: createWowheadUrl("item", 11933, "imperial-jewel"),
        },
      ],
    },

  ],
};

export default blackrockDepthsShadowforgeCity;