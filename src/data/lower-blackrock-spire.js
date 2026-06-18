const createWowheadUrl = (type, id, slug) => {
  return `https://www.wowhead.com/classic/${type}=${id}${slug ? `/${slug}` : ""}`;
};

export const lowerBlackrockSpire = {
  id: "lower-blackrock-spire",
  zoneId: 1583,
  name: "Lower Blackrock Spire",
  shortName: "LBRS",
  levelRange: "55–60",
  zone: "Blackrock Mountain",
  mapSrc: "/wow-classic-tank-helper/maps/lower-blackrock-spire.jpg",
  width: 1024,
  height: 684,

  markers: [
    {
      id: "highlord-omokk",
      type: "boss",
      label: "Highlord Omokk",
      npcId: 9196,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 9196, "highlord-omokk"),
      notes: "Ogre boss in LBRS.",
      loot: [
        {
          id: 13170,
          name: "Skyshroud Leggings",
          type: "Cloth Legs",
          url: createWowheadUrl("item", 13170, "skyshroud-leggings"),
        },
        {
          id: 13959,
          name: "Omokk's Girth Restrainer",
          type: "Plate Waist",
          url: createWowheadUrl("item", 13959, "omokks-girth-restrainer"),
        },
      ],
    },

    {
      id: "shadow-hunter-voshgajin",
      type: "boss",
      label: "Shadow Hunter Vosh'gajin",
      npcId: 9236,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 9236, "shadow-hunter-voshgajin"),
      notes: "Troll shadow hunter boss.",
      loot: [
        {
          id: 12651,
          name: "Blackcrow",
          type: "Crossbow",
          url: createWowheadUrl("item", 12651, "blackcrow"),
        },
        {
          id: 13255,
          name: "Trueaim Gauntlets",
          type: "Mail Hands",
          url: createWowheadUrl("item", 13255, "trueaim-gauntlets"),
        },
      ],
    },

    {
      id: "war-master-voone",
      type: "boss",
      label: "War Master Voone",
      npcId: 9237,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 9237, "war-master-voone"),
      notes: "Blackhand war master.",
      loot: [
        {
          id: 13179,
          name: "Brazecore Armguards",
          type: "Mail Wrist",
          url: createWowheadUrl("item", 13179, "brazecore-armguards"),
        },
        {
          id: 13177,
          name: "Talisman of Evasion",
          type: "Trinket",
          url: createWowheadUrl("item", 13177, "talisman-of-evasion"),
        },
      ],
    },

    {
      id: "mother-smolderweb",
      type: "boss",
      label: "Mother Smolderweb",
      npcId: 10596,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 10596, "mother-smolderweb"),
      notes: "Spider boss.",
      loot: [
        {
          id: 13213,
          name: "Smolderweb's Eye",
          type: "Trinket",
          url: createWowheadUrl("item", 13213, "smolderwebs-eye"),
        },
        {
          id: 13183,
          name: "Venomspitter",
          type: "Gun",
          url: createWowheadUrl("item", 13183, "venomspitter"),
        },
      ],
    },

    {
      id: "urok-doomhowl",
      type: "event-boss",
      label: "Urok Doomhowl",
      npcId: 10584,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 10584, "urok-doomhowl"),
      notes: "Summoned ogre event boss.",
      loot: [
        {
          id: 13257,
          name: "Demonic Runed Spaulders",
          type: "Cloth Shoulders",
          url: createWowheadUrl("item", 13257, "demonic-runed-spaulders"),
        },
        {
          id: 13258,
          name: "Slaghide Gauntlets",
          type: "Plate Hands",
          url: createWowheadUrl("item", 13258, "slaghide-gauntlets"),
        },
      ],
    },

    {
      id: "quartermaster-zigris",
      type: "boss",
      label: "Quartermaster Zigris",
      npcId: 9736,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 9736, "quartermaster-zigris"),
      notes: "Quartermaster boss in LBRS.",
      loot: [
        {
          id: 13252,
          name: "Cloudrunner Girdle",
          type: "Leather Waist",
          url: createWowheadUrl("item", 13252, "cloudrunner-girdle"),
        },
        {
          id: 13253,
          name: "Hands of Power",
          type: "Cloth Hands",
          url: createWowheadUrl("item", 13253, "hands-of-power"),
        },
      ],
    },

    {
      id: "halycon",
      type: "boss",
      label: "Halycon",
      npcId: 10220,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 10220, "halycon"),
      notes: "Worg boss near the end of LBRS.",
      loot: [
        {
          id: 13210,
          name: "Pads of the Dread Wolf",
          type: "Leather Shoulders",
          url: createWowheadUrl("item", 13210, "pads-of-the-dread-wolf"),
        },
        {
          id: 13211,
          name: "Slashclaw Bracers",
          type: "Mail Wrist",
          url: createWowheadUrl("item", 13211, "slashclaw-bracers"),
        },
      ],
    },

    {
      id: "gizrul-the-slavener",
      type: "boss",
      label: "Gizrul the Slavener",
      npcId: 10268,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 10268, "gizrul-the-slavener"),
      notes: "Worg handler boss.",
      loot: [
        {
          id: 13208,
          name: "Bleak Howler Armguards",
          type: "Mail Wrist",
          url: createWowheadUrl("item", 13208, "bleak-howler-armguards"),
        },
        {
          id: 13205,
          name: "Rhombeard Protector",
          type: "Shield",
          url: createWowheadUrl("item", 13205, "rhombeard-protector"),
        },
      ],
    },

    {
      id: "overlord-wyrmthalak",
      type: "boss",
      label: "Overlord Wyrmthalak",
      npcId: 9568,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 9568, "overlord-wyrmthalak"),
      notes: "Final boss of LBRS.",
      loot: [
        {
          id: 13162,
          name: "Reiver Claws",
          type: "Fist Weapon",
          url: createWowheadUrl("item", 13162, "reiver-claws"),
        },
        {
          id: 13163,
          name: "Relentless Scythe",
          type: "Polearm",
          url: createWowheadUrl("item", 13163, "relentless-scythe"),
        },
        {
          id: 13164,
          name: "Heart of the Scale",
          type: "Trinket",
          url: createWowheadUrl("item", 13164, "heart-of-the-scale"),
        },
      ],
    },

  ],
};

export default lowerBlackrockSpire;