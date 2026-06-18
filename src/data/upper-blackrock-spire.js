const createWowheadUrl = (type, id, slug) => {
  return `https://www.wowhead.com/classic/${type}=${id}${slug ? `/${slug}` : ""}`;
};

export const upperBlackrockSpire = {
  id: "upper-blackrock-spire",
  zoneId: 1583,
  name: "Upper Blackrock Spire",
  shortName: "UBRS",
  levelRange: "55–60",
  zone: "Blackrock Mountain",
  mapSrc: "/wow-classic-tank-helper/maps/upper-blackrock-spire.jpg",
  width: 1024,
  height: 533,

  markers: [
    {
      id: "pyroguard-emberseer",
      type: "boss",
      label: "Pyroguard Emberseer",
      npcId: 9816,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 9816, "pyroguard-emberseer"),
      notes: "First UBRS boss.",
      loot: [
        {
          id: 12927,
          name: "Truestrike Shoulders",
          type: "Leather Shoulders",
          url: createWowheadUrl("item", 12927, "truestrike-shoulders"),
        },
        {
          id: 12929,
          name: "Emberfury Talisman",
          type: "Neck",
          url: createWowheadUrl("item", 12929, "emberfury-talisman"),
        },
      ],
    },

    {
      id: "jed-runewatcher",
      type: "rare",
      label: "Jed Runewatcher",
      npcId: 10509,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 10509, "jed-runewatcher"),
      notes: "Rare spawn caster in UBRS.",
      loot: [
        {
          id: 12930,
          name: "Briarwood Reed",
          type: "Trinket",
          url: createWowheadUrl("item", 12930, "briarwood-reed"),
        },
        {
          id: 12926,
          name: "Flaming Band",
          type: "Finger",
          url: createWowheadUrl("item", 12926, "flaming-band"),
        },
      ],
    },

    {
      id: "solakar-flamewreath",
      type: "boss",
      label: "Solakar Flamewreath",
      npcId: 10264,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 10264, "solakar-flamewreath"),
      notes: "Summoned drake boss.",
      loot: [
        {
          id: 12603,
          name: "Nightbrace Tunic",
          type: "Leather Chest",
          url: createWowheadUrl("item", 12603, "nightbrace-tunic"),
        },
        {
          id: 12606,
          name: "Crystallized Girdle",
          type: "Mail Waist",
          url: createWowheadUrl("item", 12606, "crystallized-girdle"),
        },
      ],
    },

    {
      id: "gyth",
      type: "boss",
      label: "Gyth",
      npcId: 10339,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 10339, "gyth"),
      notes: "Dragon mount encountered during the Rend event.",
      loot: [
        {
          id: 12953,
          name: "Dragoneye Coif",
          type: "Mail Head",
          url: createWowheadUrl("item", 12953, "dragoneye-coif"),
        },
        {
          id: 12952,
          name: "Gyth's Skull",
          type: "Shield",
          url: createWowheadUrl("item", 12952, "gyths-skull"),
        },
      ],
    },

    {
      id: "warchief-rend-blackhand",
      type: "boss",
      label: "Warchief Rend Blackhand",
      npcId: 10429,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 10429, "warchief-rend-blackhand"),
      notes: "Event boss after waves of Blackhand forces.",
      loot: [
        {
          id: 12940,
          name: "Dal'Rend's Sacred Charge",
          type: "Main Hand Sword",
          url: createWowheadUrl("item", 12940, "dalrends-sacred-charge"),
        },
        {
          id: 12939,
          name: "Dal'Rend's Tribal Guardian",
          type: "Off Hand Sword",
          url: createWowheadUrl("item", 12939, "dalrends-tribal-guardian"),
        },
        {
          id: 12590,
          name: "Felstriker",
          type: "One-Hand Dagger",
          url: createWowheadUrl("item", 12590, "felstriker"),
        },
      ],
    },

    {
      id: "the-beast",
      type: "boss",
      label: "The Beast",
      npcId: 10430,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 10430, "the-beast"),
      notes: "Core hound boss.",
      loot: [
        {
          id: 12709,
          name: "Finkle's Skinner",
          type: "Dagger",
          url: createWowheadUrl("item", 12709, "finkles-skinner"),
        },
        {
          id: 12967,
          name: "Bloodmoon Cloak",
          type: "Cloak",
          url: createWowheadUrl("item", 12967, "bloodmoon-cloak"),
        },
      ],
    },

    {
      id: "general-drakkisath",
      type: "boss",
      label: "General Drakkisath",
      npcId: 10363,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 10363, "general-drakkisath"),
      notes: "Final boss of UBRS.",
      loot: [
        {
          id: 12592,
          name: "Blackblade of Shahram",
          type: "Two-Hand Sword",
          url: createWowheadUrl("item", 12592, "blackblade-of-shahram"),
        },
        {
          id: 12602,
          name: "Draconian Deflector",
          type: "Shield",
          url: createWowheadUrl("item", 12602, "draconian-deflector"),
        },
        {
          id: 16726,
          name: "Lightforge Breastplate",
          type: "Plate Chest",
          url: createWowheadUrl("item", 16726, "lightforge-breastplate"),
        },
      ],
    },

  ],
};

export default upperBlackrockSpire;