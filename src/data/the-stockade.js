const createWowheadUrl = (type, id, slug) => {
  return `https://www.wowhead.com/classic/${type}=${id}${slug ? `/${slug}` : ""}`;
};

export const theStockade = {
  id: "the-stockade",
  zoneId: 717,
  name: "The Stockade",
  shortName: "Stocks",
  levelRange: "24–30",
  zone: "Stormwind City",
  mapSrc: `${import.meta.env.BASE_URL}maps/the-stockade.jpg`,
  width: 1024,
  height: 683,
  markers: [
    {
      id: "targorr-the-dread",
      type: "boss",
      label: "Targorr the Dread",
      npcId: 1696,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 1696, "targorr-the-dread"),
      notes: "Quest boss surrounded by Defias mobs.",
      loot: [],
    },

    {
      id: "kam-deepfury",
      type: "boss",
      label: "Kam Deepfury",
      npcId: 1666,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 1666, "kam-deepfury"),
      notes: "Shield-using boss inside The Stockade.",
      loot: [],
    },

    {
      id: "hamhock",
      type: "boss",
      label: "Hamhock",
      npcId: 1717,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 1717, "hamhock"),
      notes: "Ogre boss with Bloodlust.",
      loot: [],
    },

    {
      id: "bazil-thredd",
      type: "boss",
      label: "Bazil Thredd",
      npcId: 1708,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 1708, "bazil-thredd"),
      notes: "High-damage rogue boss and major quest target.",
      loot: [],
    },

    {
      id: "dextren-ward",
      type: "boss",
      label: "Dextren Ward",
      npcId: 1663,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 1663, "dextren-ward"),
      notes: "Fear-based boss; clear nearby corridors before pulling.",
      loot: [],
    },

    {
      id: "bruegal-ironknuckle",
      type: "rare",
      label: "Bruegal Ironknuckle",
      npcId: 1720,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 1720, "bruegal-ironknuckle"),
      notes: "Rare spawn and primary loot target in The Stockade.",
      loot: [
        {
          id: 2941,
          name: "Prison Shank",
          type: "One-Hand Dagger",
          url: createWowheadUrl("item", 2941, "prison-shank"),
        },
        {
          id: 2942,
          name: "Iron Knuckles",
          type: "Fist Weapon",
          url: createWowheadUrl("item", 2942, "iron-knuckles"),
        },
        {
          id: 3228,
          name: "Jimmied Handcuffs",
          type: "Mail Wrist",
          url: createWowheadUrl("item", 3228, "jimmied-handcuffs"),
        },
      ],
    },
  ],
};

export default theStockade;
