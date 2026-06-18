const createWowheadUrl = (type, id, slug) => {
  return `https://www.wowhead.com/classic/${type}=${id}${slug ? `/${slug}` : ""}`;
};

export const scholomance = {
  id: "scholomance",
  zoneId: 2057,
  name: "Scholomance",
  shortName: "Scholo",
  levelRange: "55–60",
  zone: "Western Plaguelands",
  mapSrc: "/wow-classic-tank-helper/maps/scholomance.jpg",
  width: 1024,
  height: 868,

  markers: [
    {
      id: "instructor-malicia",
      type: "boss",
      label: "Instructor Malicia",
      npcId: 10502,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 10502, "instructor-malicia"),
      notes: "Shadow caster boss.",
      loot: [
        {
          id: 14633,
          name: "Necropile Mantle",
          type: "Cloth Shoulders",
          url: createWowheadUrl("item", 14633, "necropile-mantle"),
        },
        {
          id: 14637,
          name: "Cadaverous Armor",
          type: "Leather Chest",
          url: createWowheadUrl("item", 14637, "cadaverous-armor"),
        },
      ],
    },

    {
      id: "doctor-theolen-krastinov",
      type: "boss",
      label: "Doctor Theolen Krastinov",
      npcId: 11261,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 11261, "doctor-theolen-krastinov"),
      notes: "The Butcher of Scholomance.",
      loot: [
        {
          id: 14617,
          name: "Sawbones Shirt",
          type: "Shirt",
          url: createWowheadUrl("item", 14617, "sawbones-shirt"),
        },
        {
          id: 14621,
          name: "Deathbone Sabatons",
          type: "Plate Feet",
          url: createWowheadUrl("item", 14621, "deathbone-sabatons"),
        },
      ],
    },

    {
      id: "jandice-barov",
      type: "boss",
      label: "Jandice Barov",
      npcId: 10503,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 10503, "jandice-barov"),
      notes: "Creates illusions during the fight.",
      loot: [
        {
          id: 14543,
          name: "Darkshade Gloves",
          type: "Cloth Hands",
          url: createWowheadUrl("item", 14543, "darkshade-gloves"),
        },
        {
          id: 14545,
          name: "Ghostloom Leggings",
          type: "Leather Legs",
          url: createWowheadUrl("item", 14545, "ghostloom-leggings"),
        },
      ],
    },

    {
      id: "rattlegore",
      type: "boss",
      label: "Rattlegore",
      npcId: 11622,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 11622, "rattlegore"),
      notes: "Large bone golem boss.",
      loot: [
        {
          id: 14528,
          name: "Rattlecage Buckler",
          type: "Shield",
          url: createWowheadUrl("item", 14528, "rattlecage-buckler"),
        },
        {
          id: 14531,
          name: "Frightskull Shaft",
          type: "Two-Hand Staff",
          url: createWowheadUrl("item", 14531, "frightskull-shaft"),
        },
      ],
    },

    {
      id: "ras-frostwhisper",
      type: "boss",
      label: "Ras Frostwhisper",
      npcId: 10508,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 10508, "ras-frostwhisper"),
      notes: "Frost lich boss.",
      loot: [
        {
          id: 13952,
          name: "Iceblade Hacker",
          type: "Two-Hand Axe",
          url: createWowheadUrl("item", 13952, "iceblade-hacker"),
        },
        {
          id: 13314,
          name: "Alanna's Embrace",
          type: "Cloth Chest",
          url: createWowheadUrl("item", 13314, "alannas-embrace"),
        },
      ],
    },

    {
      id: "the-ravenian",
      type: "boss",
      label: "The Ravenian",
      npcId: 10507,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 10507, "the-ravenian"),
      notes: "Massive flesh beast.",
      loot: [
        {
          id: 13955,
          name: "Stoneform Shoulders",
          type: "Mail Shoulders",
          url: createWowheadUrl("item", 13955, "stoneform-shoulders"),
        },
        {
          id: 13956,
          name: "Clutch of Andros",
          type: "Cloth Waist",
          url: createWowheadUrl("item", 13956, "clutch-of-andros"),
        },
      ],
    },

    {
      id: "kirtonos-the-herald",
      type: "boss",
      label: "Kirtonos the Herald",
      npcId: 10506,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 10506, "kirtonos-the-herald"),
      notes: "Summoned gargoyle boss.",
      loot: [
        {
          id: 13957,
          name: "Gargoyle Slashers",
          type: "Leather Hands",
          url: createWowheadUrl("item", 13957, "gargoyle-slashers"),
        },
        {
          id: 13983,
          name: "Gravestone War Axe",
          type: "Two-Hand Axe",
          url: createWowheadUrl("item", 13983, "gravestone-war-axe"),
        },
      ],
    },

    {
      id: "lord-alexei-barov",
      type: "boss",
      label: "Lord Alexei Barov",
      npcId: 10504,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 10504, "lord-alexei-barov"),
      notes: "Member of the Barov family.",
      loot: [
        {
          id: 14538,
          name: "Deadwalker Mantle",
          type: "Cloth Shoulders",
          url: createWowheadUrl("item", 14538, "deadwalker-mantle"),
        },
        {
          id: 14539,
          name: "Bone Ring Helm",
          type: "Leather Head",
          url: createWowheadUrl("item", 14539, "bone-ring-helm"),
        },
      ],
    },

    {
      id: "darkmaster-gandling",
      type: "boss",
      label: "Darkmaster Gandling",
      npcId: 1853,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 1853, "darkmaster-gandling"),
      notes: "Final boss of Scholomance.",
      loot: [
        {
          id: 13937,
          name: "Headmaster's Charge",
          type: "Two-Hand Staff",
          url: createWowheadUrl("item", 13937, "headmasters-charge"),
        },
        {
          id: 13944,
          name: "Tombstone Breastplate",
          type: "Plate Chest",
          url: createWowheadUrl("item", 13944, "tombstone-breastplate"),
        },
        {
          id: 13950,
          name: "Detention Strap",
          type: "Leather Waist",
          url: createWowheadUrl("item", 13950, "detention-strap"),
        },
      ],
    },

  ],
};

export default scholomance;