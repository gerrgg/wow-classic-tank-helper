const createWowheadUrl = (type, id, slug) => {
  return `https://www.wowhead.com/classic/${type}=${id}${slug ? `/${slug}` : ""}`;
};

export const gnomeregan = {
  id: "gnomeregan",
  zoneId: 721,
  name: "Gnomeregan",
  shortName: "Gnomer",
  levelRange: "24–34",
  zone: "Dun Morogh",
  mapSrc: "/wow-classic-tank-helper/maps/gnomeregan.jpg",
  width: 1024,
  height: 777,

  markers: [
    {
      id: "grubbis",
      type: "boss",
      label: "Grubbis",
      npcId: 7361,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 7361, "grubbis"),
      notes: "Trogg boss encountered during the escort event.",
      loot: [
        {
          id: 9445,
          name: "Grubbis' Paws",
          type: "Leather Hands",
          url: createWowheadUrl("item", 9445, "grubbis-paws"),
        },
        {
          id: 9446,
          name: "Electrocutioner Leg",
          type: "One-Hand Mace",
          url: createWowheadUrl("item", 9446, "electrocutioner-leg"),
        },
      ],
    },

    {
      id: "viscous-fallout",
      type: "boss",
      label: "Viscous Fallout",
      npcId: 7079,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 7079, "viscous-fallout"),
      notes: "Toxic elemental boss.",
      loot: [
        {
          id: 9454,
          name: "Acidic Walkers",
          type: "Cloth Feet",
          url: createWowheadUrl("item", 9454, "acidic-walkers"),
        },
        {
          id: 9453,
          name: "Toxic Revenger",
          type: "One-Hand Sword",
          url: createWowheadUrl("item", 9453, "toxic-revenger"),
        },
        {
          id: 9452,
          name: "Hydrocane",
          type: "Two-Hand Staff",
          url: createWowheadUrl("item", 9452, "hydrocane"),
        },
      ],
    },

    {
      id: "electrocutioner-6000",
      type: "boss",
      label: "Electrocutioner 6000",
      npcId: 6235,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 6235, "electrocutioner-6000"),
      notes: "Mechanical boss that deals Nature damage.",
      loot: [
        {
          id: 9447,
          name: "Electrocutioner Lagnut",
          type: "Finger",
          url: createWowheadUrl("item", 9447, "electrocutioner-lagnut"),
        },
        {
          id: 9448,
          name: "Spidertank Oilrag",
          type: "Cloth Hands",
          url: createWowheadUrl("item", 9448, "spidertank-oilrag"),
        },
        {
          id: 9492,
          name: "Electromagnetic Gigaflux Reactivator",
          type: "Cloth Head",
          url: createWowheadUrl("item", 9492, "electromagnetic-gigaflux-reactivator"),
        },
      ],
    },

    {
      id: "crowd-pummeler-9-60",
      type: "boss",
      label: "Crowd Pummeler 9-60",
      npcId: 6229,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 6229, "crowd-pummeler-9-60"),
      notes: "Mechanical boss famous for Manual Crowd Pummeler.",
      loot: [
        {
          id: 9449,
          name: "Manual Crowd Pummeler",
          type: "Two-Hand Mace",
          url: createWowheadUrl("item", 9449, "manual-crowd-pummeler"),
        },
        {
          id: 9450,
          name: "Gnomebot Operating Boots",
          type: "Leather Feet",
          url: createWowheadUrl("item", 9450, "gnomebot-operating-boots"),
        },
      ],
    },

    {
      id: "dark-iron-ambassador",
      type: "rare",
      label: "Dark Iron Ambassador",
      npcId: 6228,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 6228, "dark-iron-ambassador"),
      notes: "Rare Dark Iron dwarf boss.",
      loot: [
        {
          id: 9456,
          name: "Glass Shooter",
          type: "Gun",
          url: createWowheadUrl("item", 9456, "glass-shooter"),
        },
        {
          id: 9457,
          name: "Royal Diplomatic Scepter",
          type: "Main Hand Mace",
          url: createWowheadUrl("item", 9457, "royal-diplomatic-scepter"),
        },
      ],
    },

    {
      id: "mekgineer-thermaplugg",
      type: "boss",
      label: "Mekgineer Thermaplugg",
      npcId: 7800,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 7800, "mekgineer-thermaplugg"),
      notes: "Final boss of Gnomeregan.",
      loot: [
        {
          id: 9458,
          name: "Thermaplugg's Central Core",
          type: "Shield",
          url: createWowheadUrl("item", 9458, "thermapluggs-central-core"),
        },
        {
          id: 9459,
          name: "Thermaplugg's Left Arm",
          type: "Two-Hand Axe",
          url: createWowheadUrl("item", 9459, "thermapluggs-left-arm"),
        },
        {
          id: 9461,
          name: "Charged Gear",
          type: "Finger",
          url: createWowheadUrl("item", 9461, "charged-gear"),
        },
      ],
    },

  ],
};

export default gnomeregan;