const createWowheadUrl = (type, id, slug) => {
  return `https://www.wowhead.com/classic/${type}=${id}${slug ? `/${slug}` : ""}`;
};

const createItem = (id, name, type, slug) => {
  return {
    id,
    name,
    type,
    url: createWowheadUrl("item", id, slug),
  };
};

const blackfathomDeeps = {
  id: "blackfathom-deeps",
  zoneId: 719,
  name: "Blackfathom Deeps",
  shortName: "BFD",
  levelRange: "24–32",
  zone: "Ashenvale",
  mapSrc: "/wow-classic-tank-helper/maps/blackfathom-deeps.jpg",
  width: 1024,
  height: 865,

  markers: [
    {
      id: "ghamoo-ra",
      type: "boss",
      label: "Ghamoo-Ra",
      npcId: 4887,
      x: 256,
      y: 492,
      wowheadUrl: createWowheadUrl("npc", 4887, "ghamoo-ra"),
      notes:
        "Turtle boss. Very high armor; mostly a simple tank-and-spank encounter.",
      loot: [
        createItem(6907, "Tortoise Armor", "Mail Chest", "tortoise-armor"),
        createItem(6908, "Ghamoo-Ra's Bind", "Cloth Belt", "ghamoo-ras-bind"),
      ],
    },

    {
      id: "lady-sarevess",
      type: "boss",
      label: "Lady Sarevess",
      npcId: 4831,
      x: 57,
      y: 618,
      wowheadUrl: createWowheadUrl("npc", 4831, "lady-sarevess"),
      notes:
        "Naga boss who patrols with two bodyguards. Clear the cave before pulling.",
      loot: [
        createItem(
          888,
          "Naga Battle Gloves",
          "Leather Gloves",
          "naga-battle-gloves",
        ),
        createItem(
          11121,
          "Darkwater Talwar",
          "Main Hand Sword",
          "darkwater-talwar",
        ),
        createItem(3078, "Naga Heartpiercer", "Bow", "naga-heartpiercer"),
      ],
    },

    {
      id: "gelihast",
      type: "boss",
      label: "Gelihast",
      npcId: 6243,
      x: 461,
      y: 514,
      wowheadUrl: createWowheadUrl("npc", 6243, "gelihast"),
      notes:
        "Murloc boss. Clear the room first; the altar behind him grants Blessing of Blackfathom.",
      loot: [
        createItem(6906, "Algae Fists", "Mail Gloves", "algae-fists"),
        createItem(6905, "Reef Axe", "Two-Hand Axe", "reef-axe"),
      ],
    },

    {
      id: "lorgus-jett",
      type: "quest-boss",
      label: "Lorgus Jett",
      npcId: 12902,
      x: 549,
      y: 416,
      wowheadUrl: createWowheadUrl("npc", 12902, "lorgus-jett"),
      notes:
        "Horde quest target for Allegiance to the Old Gods. Can appear in a few locations inside BFD.",
      loot: [
        createItem(14375, "Sanguine Cuffs", "Cloth Wrist", "sanguine-cuffs"),
        createItem(
          15116,
          "Rigid Shoulders",
          "Leather Shoulders",
          "rigid-shoulders",
        ),
      ],
    },

    {
      id: "baron-aquanis",
      type: "quest-boss",
      label: "Baron Aquanis",
      npcId: 12876,
      x: 535,
      y: 162,
      wowheadUrl: createWowheadUrl("npc", 12876, "baron-aquanis"),
      notes:
        "Horde-only summoned mini-boss tied to the Fathom Core / Baron Aquanis quest.",
      loot: [
        createItem(
          16782,
          "Strange Water Globe",
          "Quest Item",
          "strange-water-globe",
        ),
      ],
    },

    {
      id: "twilight-lord-kelris",
      type: "boss",
      label: "Twilight Lord Kelris",
      npcId: 4832,
      x: 645,
      y: 121,
      wowheadUrl: createWowheadUrl("npc", 4832, "twilight-lord-kelris"),
      notes:
        "Twilight's Hammer commander. Watch for Sleep and Mind Blast. His death enables the Fire of Aku'Mai event.",
      loot: [
        createItem(
          1155,
          "Rod of the Sleepwalker",
          "Two-Hand Staff",
          "rod-of-the-sleepwalker",
        ),
        createItem(
          6903,
          "Gaze Dreamer Pants",
          "Leather Legs",
          "gaze-dreamer-pants",
        ),
        createItem(5881, "Head of Kelris", "Quest Item", "head-of-kelris"),
      ],
    },

    {
      id: "old-serrakis",
      type: "optional-boss",
      label: "Old Serra'kis",
      npcId: 4830,
      x: 132,
      y: 177,
      wowheadUrl: createWowheadUrl("npc", 4830, "old-serrakis"),
      notes: "Optional underwater boss. Watch your breath meter.",
      loot: [
        createItem(
          6901,
          "Glowing Thresher Cape",
          "Cloak",
          "glowing-thresher-cape",
        ),
        createItem(
          6902,
          "Bands of Serra'kis",
          "Leather Wrist",
          "bands-of-serrakis",
        ),
        createItem(
          6904,
          "Bite of Serra'kis",
          "One-Hand Dagger",
          "bite-of-serrakis",
        ),
      ],
    },

    {
      id: "akumai",
      type: "boss",
      label: "Aku'mai",
      npcId: 4829,
      x: 944,
      y: 75,
      wowheadUrl: createWowheadUrl("npc", 4829, "akumai"),
      notes:
        "Final boss of Blackfathom Deeps. Avoid poison clouds and heal through heavy tank damage.",
      loot: [
        createItem(6910, "Leech Pants", "Leather Legs", "leech-pants"),
        createItem(6911, "Moss Cinch", "Leather Waist", "moss-cinch"),
        createItem(
          6909,
          "Strike of the Hydra",
          "Two-Hand Sword",
          "strike-of-the-hydra",
        ),
      ],
    },
  ],
};

export default blackfathomDeeps;
