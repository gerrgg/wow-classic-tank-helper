const createWowheadUrl = (type, id, slug) => {
  return `https://www.wowhead.com/classic/${type}=${id}${slug ? `/${slug}` : ""}`;
};

export const blackrockDepthsDetentionBlock = {
  id: "blackrock-depths-detention-block",
  zoneId: 1584,
  name: "Blackrock Depths: Detention Block",
  shortName: "BRD Key",
  levelRange: "52–60",
  zone: "Blackrock Mountain",
  mapSrc: "/wow-classic-tank-helper/maps/blackrock-depths.jpg",
  width: 1024,
  height: 683,

  markers: [
    {
      id: "high-interrogator-gerstahn",
      type: "boss",
      label: "High Interrogator Gerstahn",
      npcId: 9018,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 9018, "high-interrogator-gerstahn"),
      notes: "First major Detention Block boss.",
      loot: [
        {
          id: 11625,
          name: "Enthralled Sphere",
          type: "Held In Off-hand",
          url: createWowheadUrl("item", 11625, "enthralled-sphere"),
        },
        {
          id: 11626,
          name: "Blackveil Cape",
          type: "Cloak",
          url: createWowheadUrl("item", 11626, "blackveil-cape"),
        },
        {
          id: 11624,
          name: "Kentic Amice",
          type: "Cloth Shoulders",
          url: createWowheadUrl("item", 11624, "kentic-amice"),
        },
      ],
    },

    {
      id: "lord-roccor",
      type: "boss",
      label: "Lord Roccor",
      npcId: 9025,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 9025, "lord-roccor"),
      notes: "Optional elemental boss.",
      loot: [
        {
          id: 11631,
          name: "Stoneshell Guard",
          type: "Shield",
          url: createWowheadUrl("item", 11631, "stoneshell-guard"),
        },
        {
          id: 11632,
          name: "Earthslag Shoulders",
          type: "Mail Shoulders",
          url: createWowheadUrl("item", 11632, "earthslag-shoulders"),
        },
      ],
    },

    {
      id: "houndmaster-grebmar",
      type: "boss",
      label: "Houndmaster Grebmar",
      npcId: 9319,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 9319, "houndmaster-grebmar"),
      notes: "Optional boss with hounds.",
      loot: [
        {
          id: 11623,
          name: "Spritecaster Cape",
          type: "Cloak",
          url: createWowheadUrl("item", 11623, "spritecaster-cape"),
        },
        {
          id: 11627,
          name: "Fleetfoot Greaves",
          type: "Mail Feet",
          url: createWowheadUrl("item", 11627, "fleetfoot-greaves"),
        },
      ],
    },

    {
      id: "anubshiah",
      type: "boss",
      label: "Anub'shiah",
      npcId: 9031,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 9031, "anubshiah"),
      notes: "Possible Ring of Law boss.",
      loot: [
        {
          id: 11678,
          name: "Carapace of Anub'shiah",
          type: "Plate Chest",
          url: createWowheadUrl("item", 11678, "carapace-of-anubshiah"),
        },
      ],
    },

    {
      id: "eviscerator",
      type: "boss",
      label: "Eviscerator",
      npcId: 9029,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 9029, "eviscerator"),
      notes: "Possible Ring of Law boss.",
      loot: [
        {
          id: 11679,
          name: "Rubicund Armguards",
          type: "Mail Wrist",
          url: createWowheadUrl("item", 11679, "rubicund-armguards"),
        },
      ],
    },

    {
      id: "gorosh-the-dervish",
      type: "boss",
      label: "Gorosh the Dervish",
      npcId: 9027,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 9027, "gorosh-the-dervish"),
      notes: "Possible Ring of Law boss.",
      loot: [
        {
          id: 11726,
          name: "Savage Gladiator Chain",
          type: "Mail Chest",
          url: createWowheadUrl("item", 11726, "savage-gladiator-chain"),
        },
      ],
    },

    {
      id: "grizzle",
      type: "boss",
      label: "Grizzle",
      npcId: 9028,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 9028, "grizzle"),
      notes: "Possible Ring of Law boss.",
      loot: [
        {
          id: 11702,
          name: "Grizzle's Skinner",
          type: "One-Hand Dagger",
          url: createWowheadUrl("item", 11702, "grizzles-skinner"),
        },
        {
          id: 11703,
          name: "Stonewall Girdle",
          type: "Plate Waist",
          url: createWowheadUrl("item", 11703, "stonewall-girdle"),
        },
      ],
    },

    {
      id: "hedrum-the-creeper",
      type: "boss",
      label: "Hedrum the Creeper",
      npcId: 9032,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 9032, "hedrum-the-creeper"),
      notes: "Possible Ring of Law boss.",
      loot: [
        {
          id: 11633,
          name: "Spiderfang Carapace",
          type: "Plate Chest",
          url: createWowheadUrl("item", 11633, "spiderfang-carapace"),
        },
      ],
    },

    {
      id: "okthor-the-breaker",
      type: "boss",
      label: "Ok'thor the Breaker",
      npcId: 9030,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 9030, "okthor-the-breaker"),
      notes: "Possible Ring of Law boss.",
      loot: [
        {
          id: 11662,
          name: "Ban'thok Sash",
          type: "Cloth Waist",
          url: createWowheadUrl("item", 11662, "banthok-sash"),
        },
        {
          id: 11824,
          name: "Cyclopean Band",
          type: "Finger",
          url: createWowheadUrl("item", 11824, "cyclopean-band"),
        },
      ],
    },

    {
      id: "pyromancer-loregrain",
      type: "boss",
      label: "Pyromancer Loregrain",
      npcId: 9024,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 9024, "pyromancer-loregrain"),
      notes: "Dark Iron caster boss.",
      loot: [
        {
          id: 11747,
          name: "Flamestrider Robes",
          type: "Leather Chest",
          url: createWowheadUrl("item", 11747, "flamestrider-robes"),
        },
        {
          id: 11748,
          name: "Pyric Caduceus",
          type: "Two-Hand Staff",
          url: createWowheadUrl("item", 11748, "pyric-caduceus"),
        },
      ],
    },

    {
      id: "warder-stilgiss",
      type: "boss",
      label: "Warder Stilgiss",
      npcId: 9041,
      secondaryNpcId: 9042,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 9041, "warder-stilgiss"),
      notes: "Boss guarding the vault area.",
      loot: [
        {
          id: 11782,
          name: "Boreal Mantle",
          type: "Cloth Shoulders",
          url: createWowheadUrl("item", 11782, "boreal-mantle"),
        },
        {
          id: 11784,
          name: "Arbiter's Blade",
          type: "One-Hand Sword",
          url: createWowheadUrl("item", 11784, "arbiters-blade"),
        },
      ],
    },

    {
      id: "doomrel",
      type: "boss",
      label: "Doom'rel",
      npcId: 9039,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 9039, "doomrel"),
      notes: "One of the Seven.",
      loot: [
        {
          id: 11920,
          name: "Wraith Scythe",
          type: "Two-Hand Axe",
          url: createWowheadUrl("item", 11920, "wraith-scythe"),
        },
        {
          id: 11923,
          name: "The Hammer of Grace",
          type: "Main Hand Mace",
          url: createWowheadUrl("item", 11923, "the-hammer-of-grace"),
        },
      ],
    },

    {
      id: "baelgar",
      type: "boss",
      label: "Bael'Gar",
      npcId: 9016,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 9016, "baelgar"),
      notes: "Large fire elemental optional boss.",
      loot: [
        {
          id: 11805,
          name: "Rubidium Hammer",
          type: "Two-Hand Mace",
          url: createWowheadUrl("item", 11805, "rubidium-hammer"),
        },
        {
          id: 11807,
          name: "Sash of the Burning Heart",
          type: "Cloth Waist",
          url: createWowheadUrl("item", 11807, "sash-of-the-burning-heart"),
        },
      ],
    },

    {
      id: "fineous-darkvire",
      type: "boss",
      label: "Fineous Darkvire",
      npcId: 9056,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 9056, "fineous-darkvire"),
      notes: "Dark Iron architect carrying the Ironfel.",
      loot: [
        {
          id: 11839,
          name: "Chief Architect's Monocle",
          type: "Cloth Head",
          url: createWowheadUrl("item", 11839, "chief-architects-monocle"),
        },
        {
          id: 11842,
          name: "Lead Surveyor's Mantle",
          type: "Leather Shoulders",
          url: createWowheadUrl("item", 11842, "lead-surveyors-mantle"),
        },
      ],
    },

  ],
};

export default blackrockDepthsDetentionBlock;