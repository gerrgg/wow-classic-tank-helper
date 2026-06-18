const createWowheadUrl = (type, id, slug) => {
  return `https://www.wowhead.com/classic/${type}=${id}${slug ? `/${slug}` : ""}`;
};

export const stratholmeLive = {
  id: "stratholme-live",
  zoneId: 2017,
  name: "Stratholme: Live Side",
  shortName: "Strat Live",
  levelRange: "55–60",
  zone: "Eastern Plaguelands",
  mapSrc: "/wow-classic-tank-helper/maps/stratholme.jpg",
  width: 1024,
  height: 781,

  markers: [
    {
      id: "timmy-the-cruel",
      type: "rare",
      label: "Timmy the Cruel",
      npcId: 10808,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 10808, "timmy-the-cruel"),
      notes: "Rare spawn near the live-side entrance.",
      loot: [
        {
          id: 13402,
          name: "Timmy's Galoshes",
          type: "Cloth Feet",
          url: createWowheadUrl("item", 13402, "timmys-galoshes"),
        },
        {
          id: 13400,
          name: "Vambraces of the Sadist",
          type: "Mail Wrist",
          url: createWowheadUrl("item", 13400, "vambraces-of-the-sadist"),
        },
      ],
    },

    {
      id: "cannon-master-willey",
      type: "boss",
      label: "Cannon Master Willey",
      npcId: 10997,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 10997, "cannon-master-willey"),
      notes: "Scarlet Crusade boss with cannon mechanics.",
      loot: [
        {
          id: 13380,
          name: "Willey's Portable Howitzer",
          type: "Gun",
          url: createWowheadUrl("item", 13380, "willeys-portable-howitzer"),
        },
        {
          id: 13382,
          name: "Cannonball Runner",
          type: "Mail Feet",
          url: createWowheadUrl("item", 13382, "cannonball-runner"),
        },
        {
          id: 13383,
          name: "Willey's Back Scratcher",
          type: "Two-Hand Polearm",
          url: createWowheadUrl("item", 13383, "willeys-back-scratcher"),
        },
      ],
    },

    {
      id: "archivist-galford",
      type: "boss",
      label: "Archivist Galford",
      npcId: 10811,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 10811, "archivist-galford"),
      notes: "Caster boss in the archives.",
      loot: [
        {
          id: 13386,
          name: "Archivist Cape",
          type: "Cloak",
          url: createWowheadUrl("item", 13386, "archivist-cape"),
        },
        {
          id: 13385,
          name: "Tome of Knowledge",
          type: "Held In Off-hand",
          url: createWowheadUrl("item", 13385, "tome-of-knowledge"),
        },
      ],
    },

    {
      id: "balnazzar",
      type: "boss",
      label: "Balnazzar",
      npcId: 10813,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 10813, "balnazzar"),
      notes: "Final boss of Stratholme Live, disguised as Dathrohan.",
      loot: [
        {
          id: 13353,
          name: "Book of the Dead",
          type: "Held In Off-hand",
          url: createWowheadUrl("item", 13353, "book-of-the-dead"),
        },
        {
          id: 13360,
          name: "Gift of the Elven Magi",
          type: "Wand",
          url: createWowheadUrl("item", 13360, "gift-of-the-elven-magi"),
        },
        {
          id: 16725,
          name: "Lightforge Boots",
          type: "Plate Feet",
          url: createWowheadUrl("item", 16725, "lightforge-boots"),
        },
      ],
    },

  ],
};

export default stratholmeLive;