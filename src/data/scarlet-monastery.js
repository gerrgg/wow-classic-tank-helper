const createWowheadUrl = (type, id, slug) => {
  return `https://www.wowhead.com/classic/${type}=${id}${slug ? `/${slug}` : ""}`;
};

export const scarletMonastery = {
  id: "scarlet-monastery",
  zoneId: 796,
  name: "Scarlet Monastery",
  shortName: "SM",
  levelRange: "26–45",
  zone: "Tirisfal Glades",
  mapSrc: "/wow-classic-tank-helper/maps/scarlet-monastery-graveyard.jpg",
  width: 1024,
  height: 683,

  markers: [
    {
      id: "interrogator-vishas",
      type: "boss",
      label: "Interrogator Vishas",
      npcId: 3983,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 3983, "interrogator-vishas"),
      notes: "First Graveyard boss.",
      loot: [
        {
          id: 7683,
          name: "Bloody Brass Knuckles",
          type: "Fist Weapon",
          url: createWowheadUrl("item", 7683, "bloody-brass-knuckles"),
        },
        {
          id: 7682,
          name: "Torturing Poker",
          type: "One-Hand Dagger",
          url: createWowheadUrl("item", 7682, "torturing-poker"),
        },
      ],
    },

    {
      id: "bloodmage-thalnos",
      type: "boss",
      label: "Bloodmage Thalnos",
      npcId: 4543,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 4543, "bloodmage-thalnos"),
      notes: "Final Graveyard boss.",
      loot: [
        {
          id: 7684,
          name: "Bloodmage Mantle",
          type: "Cloth Shoulders",
          url: createWowheadUrl("item", 7684, "bloodmage-mantle"),
        },
        {
          id: 7685,
          name: "Orb of the Forgotten Seer",
          type: "Held In Off-hand",
          url: createWowheadUrl("item", 7685, "orb-of-the-forgotten-seer"),
        },
      ],
    },

    {
      id: "azshir-the-sleepless",
      type: "rare",
      label: "Azshir the Sleepless",
      npcId: 6490,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 6490, "azshir-the-sleepless"),
      notes: "Rare Graveyard spawn.",
      loot: [
        {
          id: 7708,
          name: "Necrotic Wand",
          type: "Wand",
          url: createWowheadUrl("item", 7708, "necrotic-wand"),
        },
        {
          id: 7731,
          name: "Ghostshard Talisman",
          type: "Neck",
          url: createWowheadUrl("item", 7731, "ghostshard-talisman"),
        },
        {
          id: 7709,
          name: "Blighted Leggings",
          type: "Cloth Legs",
          url: createWowheadUrl("item", 7709, "blighted-leggings"),
        },
      ],
    },

    {
      id: "fallen-champion",
      type: "rare",
      label: "Fallen Champion",
      npcId: 6488,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 6488, "fallen-champion"),
      notes: "Rare Graveyard spawn.",
      loot: [
        {
          id: 7691,
          name: "Embalmed Shroud",
          type: "Cloth Head",
          url: createWowheadUrl("item", 7691, "embalmed-shroud"),
        },
        {
          id: 7690,
          name: "Ebon Vise",
          type: "Leather Hands",
          url: createWowheadUrl("item", 7690, "ebon-vise"),
        },
        {
          id: 7689,
          name: "Morbid Dawn",
          type: "Two-Hand Sword",
          url: createWowheadUrl("item", 7689, "morbid-dawn"),
        },
      ],
    },

    {
      id: "ironspine",
      type: "rare",
      label: "Ironspine",
      npcId: 6489,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 6489, "ironspine"),
      notes: "Rare Graveyard spawn.",
      loot: [
        {
          id: 7688,
          name: "Ironspine's Ribcage",
          type: "Mail Chest",
          url: createWowheadUrl("item", 7688, "ironspines-ribcage"),
        },
        {
          id: 7686,
          name: "Ironspine's Eye",
          type: "Finger",
          url: createWowheadUrl("item", 7686, "ironspines-eye"),
        },
        {
          id: 7687,
          name: "Ironspine's Fist",
          type: "One-Hand Mace",
          url: createWowheadUrl("item", 7687, "ironspines-fist"),
        },
      ],
    },

    {
      id: "houndmaster-loksey",
      type: "boss",
      label: "Houndmaster Loksey",
      npcId: 3974,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 3974, "houndmaster-loksey"),
      notes: "First Library boss with three hounds.",
      loot: [
        {
          id: 3456,
          name: "Dog Whistle",
          type: "Item",
          url: createWowheadUrl("item", 3456, "dog-whistle"),
        },
        {
          id: 7756,
          name: "Dog Training Gloves",
          type: "Leather Hands",
          url: createWowheadUrl("item", 7756, "dog-training-gloves"),
        },
        {
          id: 7710,
          name: "Loksey's Training Stick",
          type: "Two-Hand Staff",
          url: createWowheadUrl("item", 7710, "lokseys-training-stick"),
        },
      ],
    },

    {
      id: "arcanist-doan",
      type: "boss",
      label: "Arcanist Doan",
      npcId: 3984,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 3984, "arcanist-doan"),
      notes: "Final Library boss. Loots The Scarlet Key chest after death.",
      loot: [
        {
          id: 7712,
          name: "Mantle of Doan",
          type: "Cloth Shoulders",
          url: createWowheadUrl("item", 7712, "mantle-of-doan"),
        },
        {
          id: 7711,
          name: "Robe of Doan",
          type: "Cloth Chest",
          url: createWowheadUrl("item", 7711, "robe-of-doan"),
        },
        {
          id: 7713,
          name: "Illusionary Rod",
          type: "Two-Hand Staff",
          url: createWowheadUrl("item", 7713, "illusionary-rod"),
        },
        {
          id: 7714,
          name: "Hypnotic Blade",
          type: "Main Hand Dagger",
          url: createWowheadUrl("item", 7714, "hypnotic-blade"),
        },
      ],
    },

    {
      id: "herod",
      type: "boss",
      label: "Herod",
      npcId: 3975,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 3975, "herod"),
      notes: "Armory final boss known for Whirlwind.",
      loot: [
        {
          id: 7719,
          name: "Raging Berserker's Helm",
          type: "Mail Head",
          url: createWowheadUrl("item", 7719, "raging-berserkers-helm"),
        },
        {
          id: 7718,
          name: "Herod's Shoulder",
          type: "Mail Shoulders",
          url: createWowheadUrl("item", 7718, "herods-shoulder"),
        },
        {
          id: 10330,
          name: "Scarlet Leggings",
          type: "Mail Legs",
          url: createWowheadUrl("item", 10330, "scarlet-leggings"),
        },
        {
          id: 7717,
          name: "Ravager",
          type: "Two-Hand Axe",
          url: createWowheadUrl("item", 7717, "ravager"),
        },
      ],
    },

    {
      id: "scarlet-commander-mograine",
      type: "boss",
      label: "Scarlet Commander Mograine",
      npcId: 3976,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 3976, "scarlet-commander-mograine"),
      notes: "Cathedral boss resurrected by Whitemane.",
      loot: [
        {
          id: 7726,
          name: "Aegis of the Scarlet Commander",
          type: "Shield",
          url: createWowheadUrl("item", 7726, "aegis-of-the-scarlet-commander"),
        },
        {
          id: 7723,
          name: "Mograine's Might",
          type: "Two-Hand Mace",
          url: createWowheadUrl("item", 7723, "mograines-might"),
        },
        {
          id: 7724,
          name: "Gauntlets of Divinity",
          type: "Mail Hands",
          url: createWowheadUrl("item", 7724, "gauntlets-of-divinity"),
        },
        {
          id: 10330,
          name: "Scarlet Leggings",
          type: "Mail Legs",
          url: createWowheadUrl("item", 10330, "scarlet-leggings"),
        },
      ],
    },

    {
      id: "high-inquisitor-whitemane",
      type: "boss",
      label: "High Inquisitor Whitemane",
      npcId: 3977,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 3977, "high-inquisitor-whitemane"),
      notes: "Cathedral final boss. Sleeps the party and resurrects Mograine.",
      loot: [
        {
          id: 7720,
          name: "Whitemane's Chapeau",
          type: "Cloth Head",
          url: createWowheadUrl("item", 7720, "whitemanes-chapeau"),
        },
        {
          id: 7721,
          name: "Hand of Righteousness",
          type: "Main Hand Mace",
          url: createWowheadUrl("item", 7721, "hand-of-righteousness"),
        },
        {
          id: 7722,
          name: "Triune Amulet",
          type: "Neck",
          url: createWowheadUrl("item", 7722, "triune-amulet"),
        },
      ],
    },

  ],
};

export default scarletMonastery;