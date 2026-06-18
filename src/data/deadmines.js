// src/data/dungeons.js

const createWowheadUrl = (type, id, slug) => {
  return `https://www.wowhead.com/classic/${type}=${id}${slug ? `/${slug}` : ""}`;
};

export const deadmines = {
  id: "deadmines",
  zoneId: 1581,
  name: "The Deadmines",
  shortName: "DM",
  levelRange: "17–26",
  zone: "Westfall",
  mapSrc: `${import.meta.env.BASE_URL}maps/deadmines.jpg`,
  width: 1024,
  height: 772,
  markers: [
    {
      id: "rhahkzor",
      type: "boss",
      label: "Rhahk'Zor",
      npcId: 644,
      x: 175,
      y: 206,
      wowheadUrl: createWowheadUrl("npc", 644, "rhahkzor"),
      notes: "First boss of The Deadmines.",
      loot: [
        {
          id: 5187,
          name: "Rhahk'Zor's Hammer",
          type: "Two-Hand Mace",
          url: createWowheadUrl("item", 5187, "rhahkzors-hammer"),
        },
        {
          id: 872,
          name: "Rockslicer",
          type: "Two-Hand Axe",
          url: createWowheadUrl("item", 872, "rockslicer"),
        },
      ],
    },

    {
      id: "miner-johnson",
      type: "rare",
      label: "Miner Johnson",
      npcId: 3586,
      x: 308,
      y: 273,
      wowheadUrl: createWowheadUrl("npc", 3586, "miner-johnson"),
      notes: "Rare spawn in The Deadmines.",
      loot: [
        {
          id: 5443,
          name: "Gold-Plated Buckler",
          type: "Shield",
          url: createWowheadUrl("item", 5443, "gold-plated-buckler"),
        },
        {
          id: 5444,
          name: "Miner's Cape",
          type: "Cloak",
          url: createWowheadUrl("item", 5444, "miners-cape"),
        },
      ],
    },

    {
      id: "sneeds-shredder",
      type: "boss",
      label: "Sneed's Shredder / Sneed",
      npcId: 642,
      secondaryNpcId: 643,
      x: 288,
      y: 68,
      wowheadUrl: createWowheadUrl("npc", 642, "sneeds-shredder"),
      notes:
        "Two-stage encounter. Kill Sneed's Shredder first, then Sneed hops out.",
      loot: [
        {
          id: 5194,
          name: "Taskmaster Axe",
          type: "Two-Hand Axe",
          url: createWowheadUrl("item", 5194, "taskmaster-axe"),
        },
        {
          id: 5195,
          name: "Gold-Flecked Gloves",
          type: "Cloth Hands",
          url: createWowheadUrl("item", 5195, "gold-flecked-gloves"),
        },
        {
          id: 2169,
          name: "Buzzer Blade",
          type: "One-Hand Dagger",
          url: createWowheadUrl("item", 2169, "buzzer-blade"),
        },
        {
          id: 1937,
          name: "Buzz Saw",
          type: "One-Hand Sword",
          url: createWowheadUrl("item", 1937, "buzz-saw"),
        },
      ],
    },

    {
      id: "gilnid",
      type: "boss",
      label: "Gilnid",
      npcId: 1763,
      x: 382,
      y: 216,
      wowheadUrl: createWowheadUrl("npc", 1763, "gilnid"),
      notes: "Goblin smelter boss in the foundry.",
      loot: [
        {
          id: 5199,
          name: "Smelting Pants",
          type: "Leather Legs",
          url: createWowheadUrl("item", 5199, "smelting-pants"),
        },
        {
          id: 1156,
          name: "Lavishly Jeweled Ring",
          type: "Finger",
          url: createWowheadUrl("item", 1156, "lavishly-jeweled-ring"),
        },
      ],
    },

    {
      id: "mr-smite",
      type: "boss",
      label: "Mr. Smite",
      npcId: 646,
      x: 724,
      y: 541,
      wowheadUrl: createWowheadUrl("npc", 646, "mr-smite"),
      notes:
        "Tauren first mate. Uses a staged weapon-swap encounter with stuns.",
      loot: [
        {
          id: 7230,
          name: "Smite's Mighty Hammer",
          type: "Two-Hand Mace",
          url: createWowheadUrl("item", 7230, "smites-mighty-hammer"),
        },
        {
          id: 5196,
          name: "Smite's Reaver",
          type: "One-Hand Axe",
          url: createWowheadUrl("item", 5196, "smites-reaver"),
        },
        {
          id: 5192,
          name: "Thief's Blade",
          type: "One-Hand Sword",
          url: createWowheadUrl("item", 5192, "thiefs-blade"),
        },
      ],
    },

    {
      id: "captain-greenskin",
      type: "boss",
      label: "Captain Greenskin",
      npcId: 647,
      x: 782,
      y: 440,
      wowheadUrl: createWowheadUrl("npc", 647, "captain-greenskin"),
      notes: "Goblin captain aboard the ship.",
      loot: [
        {
          id: 5201,
          name: "Emberstone Staff",
          type: "Two-Hand Staff",
          url: createWowheadUrl("item", 5201, "emberstone-staff"),
        },
        {
          id: 5200,
          name: "Impaling Harpoon",
          type: "Two-Hand Polearm",
          url: createWowheadUrl("item", 5200, "impaling-harpoon"),
        },
        {
          id: 10403,
          name: "Blackened Defias Belt",
          type: "Leather Waist",
          url: createWowheadUrl("item", 10403, "blackened-defias-belt"),
        },
      ],
    },

    {
      id: "edwin-vancleef",
      type: "boss",
      label: "Edwin VanCleef",
      npcId: 639,
      x: 784,
      y: 396,
      wowheadUrl: createWowheadUrl("npc", 639, "edwin-vancleef"),
      notes:
        "Final boss of The Deadmines. Summons Defias Blackguards during the fight.",
      loot: [
        {
          id: 5193,
          name: "Cape of the Brotherhood",
          type: "Cloak",
          url: createWowheadUrl("item", 5193, "cape-of-the-brotherhood"),
        },
        {
          id: 5202,
          name: "Corsair's Overshirt",
          type: "Cloth Chest",
          url: createWowheadUrl("item", 5202, "corsairs-overshirt"),
        },
        {
          id: 5191,
          name: "Cruel Barb",
          type: "One-Hand Sword",
          url: createWowheadUrl("item", 5191, "cruel-barb"),
        },
        {
          id: 10399,
          name: "Blackened Defias Armor",
          type: "Leather Chest",
          url: createWowheadUrl("item", 10399, "blackened-defias-armor"),
        },
        {
          id: 2874,
          name: "An Unsent Letter",
          type: "Quest Starter",
          url: createWowheadUrl("item", 2874, "an-unsent-letter"),
        },
      ],
    },

    {
      id: "cookie",
      type: "bonus",
      label: "Cookie",
      npcId: 645,
      x: 832,
      y: 481,
      wowheadUrl: createWowheadUrl("npc", 645, "cookie"),
      notes: "Optional bonus boss. Located around the ship after VanCleef.",
      loot: [
        {
          id: 5198,
          name: "Cookie's Stirring Rod",
          type: "Wand",
          url: createWowheadUrl("item", 5198, "cookies-stirring-rod"),
        },
        {
          id: 5197,
          name: "Cookie's Tenderizer",
          type: "One-Hand Mace",
          url: createWowheadUrl("item", 5197, "cookies-tenderizer"),
        },
      ],
    },
  ],
};

export default deadmines;
