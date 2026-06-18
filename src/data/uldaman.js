const createWowheadUrl = (type, id, slug) => {
  return `https://www.wowhead.com/classic/${type}=${id}${slug ? `/${slug}` : ""}`;
};

export const uldaman = {
  id: "uldaman",
  zoneId: 1337,
  name: "Uldaman",
  shortName: "Ulda",
  levelRange: "35–45",
  zone: "Badlands",
  mapSrc: "/wow-classic-tank-helper/maps/uldaman.jpg",
  width: 1024,
  height: 683,

  markers: [
    {
      id: "revelosh",
      type: "boss",
      label: "Revelosh",
      npcId: 6910,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 6910, "revelosh"),
      notes: "Trogg boss at the front of Uldaman.",
      loot: [
        {
          id: 9387,
          name: "Revelosh's Boots",
          type: "Cloth Feet",
          url: createWowheadUrl("item", 9387, "reveloshs-boots"),
        },
        {
          id: 9388,
          name: "Revelosh's Armguards",
          type: "Mail Wrist",
          url: createWowheadUrl("item", 9388, "reveloshs-armguards"),
        },
        {
          id: 9390,
          name: "Revelosh's Gloves",
          type: "Leather Hands",
          url: createWowheadUrl("item", 9390, "reveloshs-gloves"),
        },
      ],
    },

    {
      id: "ironaya",
      type: "boss",
      label: "Ironaya",
      npcId: 7228,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 7228, "ironaya"),
      notes: "Titan construct awakened by the Staff of Prehistoria.",
      loot: [
        {
          id: 9407,
          name: "Stoneweaver Leggings",
          type: "Cloth Legs",
          url: createWowheadUrl("item", 9407, "stoneweaver-leggings"),
        },
        {
          id: 9408,
          name: "Ironshod Bludgeon",
          type: "Two-Hand Mace",
          url: createWowheadUrl("item", 9408, "ironshod-bludgeon"),
        },
      ],
    },

    {
      id: "obsidian-sentinel",
      type: "boss",
      label: "Obsidian Sentinel",
      npcId: 7023,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 7023, "obsidian-sentinel"),
      notes: "Optional construct boss.",
      loot: [
        {
          id: 9383,
          name: "Obsidian Cleaver",
          type: "Two-Hand Axe",
          url: createWowheadUrl("item", 9383, "obsidian-cleaver"),
        },
      ],
    },

    {
      id: "ancient-stone-keeper",
      type: "boss",
      label: "Ancient Stone Keeper",
      npcId: 7206,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 7206, "ancient-stone-keeper"),
      notes: "Stone keeper guarding the interior.",
      loot: [
        {
          id: 9410,
          name: "Cragfists",
          type: "Mail Hands",
          url: createWowheadUrl("item", 9410, "cragfists"),
        },
        {
          id: 9411,
          name: "Rockshard Pauldrons",
          type: "Mail Shoulders",
          url: createWowheadUrl("item", 9411, "rockshard-pauldrons"),
        },
      ],
    },

    {
      id: "galgann-firehammer",
      type: "boss",
      label: "Galgann Firehammer",
      npcId: 7291,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 7291, "galgann-firehammer"),
      notes: "Dark Iron boss with fire abilities.",
      loot: [
        {
          id: 9412,
          name: "Galgann's Fireblaster",
          type: "Gun",
          url: createWowheadUrl("item", 9412, "galganns-fireblaster"),
        },
        {
          id: 9419,
          name: "Galgann's Firehammer",
          type: "One-Hand Mace",
          url: createWowheadUrl("item", 9419, "galganns-firehammer"),
        },
      ],
    },

    {
      id: "grimlok",
      type: "boss",
      label: "Grimlok",
      npcId: 4854,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 4854, "grimlok"),
      notes: "Trogg boss near the end of Uldaman.",
      loot: [
        {
          id: 9415,
          name: "Grimlok's Tribal Vestments",
          type: "Cloth Chest",
          url: createWowheadUrl("item", 9415, "grimloks-tribal-vestments"),
        },
        {
          id: 9416,
          name: "Grimlok's Charge",
          type: "Two-Hand Mace",
          url: createWowheadUrl("item", 9416, "grimloks-charge"),
        },
      ],
    },

    {
      id: "archaedas",
      type: "boss",
      label: "Archaedas",
      npcId: 2748,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 2748, "archaedas"),
      notes: "Final boss of Uldaman. Summons earthen guardians.",
      loot: [
        {
          id: 11118,
          name: "Archaedic Stone",
          type: "Finger",
          url: createWowheadUrl("item", 11118, "archaedic-stone"),
        },
        {
          id: 9418,
          name: "Stoneslayer",
          type: "Two-Hand Sword",
          url: createWowheadUrl("item", 9418, "stoneslayer"),
        },
        {
          id: 9420,
          name: "Adventurer's Pith Helmet",
          type: "Leather Head",
          url: createWowheadUrl("item", 9420, "adventurers-pith-helmet"),
        },
      ],
    },

  ],
};

export default uldaman;