const createWowheadUrl = (type, id, slug) => {
  return `https://www.wowhead.com/classic/${type}=${id}${slug ? `/${slug}` : ""}`;
};

export const stratholmeUndead = {
  id: "stratholme-undead",
  zoneId: 2017,
  name: "Stratholme: Undead Side",
  shortName: "Strat UD",
  levelRange: "55–60",
  zone: "Eastern Plaguelands",
  mapSrc: "/wow-classic-tank-helper/maps/stratholme.jpg",
  width: 1024,
  height: 781,

  markers: [
    {
      id: "magistrate-barthilas",
      type: "boss",
      label: "Magistrate Barthilas",
      npcId: 10435,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 10435, "magistrate-barthilas"),
      notes: "Drops Key to the City.",
      loot: [
        {
          id: 18725,
          name: "Peacemaker",
          type: "Polearm",
          url: createWowheadUrl("item", 18725, "peacemaker"),
        },
        {
          id: 18726,
          name: "Magistrate's Cuffs",
          type: "Leather Wrist",
          url: createWowheadUrl("item", 18726, "magistrates-cuffs"),
        },
        {
          id: 18722,
          name: "Death Grips",
          type: "Plate Hands",
          url: createWowheadUrl("item", 18722, "death-grips"),
        },
        {
          id: 18727,
          name: "Crimson Felt Hat",
          type: "Cloth Head",
          url: createWowheadUrl("item", 18727, "crimson-felt-hat"),
        },
        {
          id: 13376,
          name: "Royal Tribunal Cloak",
          type: "Cloak",
          url: createWowheadUrl("item", 13376, "royal-tribunal-cloak"),
        },
        {
          id: 12382,
          name: "Key to the City",
          type: "Key",
          url: createWowheadUrl("item", 12382, "key-to-the-city"),
        },
      ],
    },

    {
      id: "stonespine",
      type: "rare",
      label: "Stonespine",
      npcId: 10809,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 10809, "stonespine"),
      notes: "Rare gargoyle spawn.",
      loot: [
        {
          id: 13954,
          name: "Verdant Footpads",
          type: "Leather Feet",
          url: createWowheadUrl("item", 13954, "verdant-footpads"),
        },
        {
          id: 13397,
          name: "Stoneskin Gargoyle Cape",
          type: "Cloak",
          url: createWowheadUrl("item", 13397, "stoneskin-gargoyle-cape"),
        },
        {
          id: 13399,
          name: "Gargoyle Shredder Talons",
          type: "Fist Weapon",
          url: createWowheadUrl("item", 13399, "gargoyle-shredder-talons"),
        },
      ],
    },

    {
      id: "nerubenkan",
      type: "boss",
      label: "Nerub'enkan",
      npcId: 10437,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 10437, "nerubenkan"),
      notes: "Crypt lord boss.",
      loot: [
        {
          id: 16675,
          name: "Beaststalker's Boots",
          type: "Mail Feet",
          url: createWowheadUrl("item", 16675, "beaststalkers-boots"),
        },
        {
          id: 13529,
          name: "Husk of Nerub'enkan",
          type: "Shield",
          url: createWowheadUrl("item", 13529, "husk-of-nerubenkan"),
        },
        {
          id: 18738,
          name: "Carapace Spine Crossbow",
          type: "Crossbow",
          url: createWowheadUrl("item", 18738, "carapace-spine-crossbow"),
        },
      ],
    },

    {
      id: "baroness-anastari",
      type: "boss",
      label: "Baroness Anastari",
      npcId: 10436,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 10436, "baroness-anastari"),
      notes: "Banshee boss.",
      loot: [
        {
          id: 18728,
          name: "Anastari Heirloom",
          type: "Wand",
          url: createWowheadUrl("item", 18728, "anastari-heirloom"),
        },
        {
          id: 16704,
          name: "Dreadmist Sandals",
          type: "Cloth Feet",
          url: createWowheadUrl("item", 16704, "dreadmist-sandals"),
        },
        {
          id: 13534,
          name: "Banshee Finger",
          type: "Wand",
          url: createWowheadUrl("item", 13534, "banshee-finger"),
        },
      ],
    },

    {
      id: "maleki-the-pallid",
      type: "boss",
      label: "Maleki the Pallid",
      npcId: 10438,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 10438, "maleki-the-pallid"),
      notes: "Frost-themed lich boss.",
      loot: [
        {
          id: 18735,
          name: "Maleki's Footwraps",
          type: "Cloth Feet",
          url: createWowheadUrl("item", 18735, "malekis-footwraps"),
        },
        {
          id: 16691,
          name: "Devout Sandals",
          type: "Cloth Feet",
          url: createWowheadUrl("item", 16691, "devout-sandals"),
        },
        {
          id: 18737,
          name: "Bone Slicing Hatchet",
          type: "One-Hand Axe",
          url: createWowheadUrl("item", 18737, "bone-slicing-hatchet"),
        },
      ],
    },

    {
      id: "ramstein-the-gorger",
      type: "boss",
      label: "Ramstein the Gorger",
      npcId: 10439,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 10439, "ramstein-the-gorger"),
      notes: "Abomination boss before Baron.",
      loot: [
        {
          id: 16737,
          name: "Gauntlets of Valor",
          type: "Plate Hands",
          url: createWowheadUrl("item", 16737, "gauntlets-of-valor"),
        },
        {
          id: 18723,
          name: "Animated Chain Necklace",
          type: "Neck",
          url: createWowheadUrl("item", 18723, "animated-chain-necklace"),
        },
        {
          id: 13373,
          name: "Band of Flesh",
          type: "Finger",
          url: createWowheadUrl("item", 13373, "band-of-flesh"),
        },
      ],
    },

    {
      id: "baron-rivendare",
      type: "boss",
      label: "Baron Rivendare",
      npcId: 10440,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 10440, "baron-rivendare"),
      notes: "Final boss of Stratholme Undead.",
      loot: [
        {
          id: 13335,
          name: "Deathcharger's Reins",
          type: "Mount",
          url: createWowheadUrl("item", 13335, "deathchargers-reins"),
        },
        {
          id: 13346,
          name: "Robes of the Exalted",
          type: "Cloth Chest",
          url: createWowheadUrl("item", 13346, "robes-of-the-exalted"),
        },
        {
          id: 13340,
          name: "Cape of the Black Baron",
          type: "Cloak",
          url: createWowheadUrl("item", 13340, "cape-of-the-black-baron"),
        },
        {
          id: 13368,
          name: "Bonescraper",
          type: "One-Hand Dagger",
          url: createWowheadUrl("item", 13368, "bonescraper"),
        },
        {
          id: 13349,
          name: "Scepter of the Unholy",
          type: "Main Hand Mace",
          url: createWowheadUrl("item", 13349, "scepter-of-the-unholy"),
        },
      ],
    },

  ],
};

export default stratholmeUndead;