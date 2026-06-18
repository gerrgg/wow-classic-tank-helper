const createWowheadUrl = (type, id, slug) => {
  return `https://www.wowhead.com/classic/${type}=${id}${slug ? `/${slug}` : ""}`;
};

export const templeOfAtalhakkar = {
  id: "temple-of-atalhakkar",
  zoneId: 1477,
  name: "Temple of Atal'Hakkar",
  shortName: "Sunken Temple",
  levelRange: "50–60",
  zone: "Swamp of Sorrows",
  mapSrc: "/wow-classic-tank-helper/maps/sunken-temple.jpg",
  width: 1024,
  height: 733,

  markers: [
    {
      id: "atalalarion",
      type: "boss",
      label: "Atal'alarion",
      npcId: 8440,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 8440, "atalalarion"),
      notes: "Stone sentinel awakened by activating the statue sequence.",
      loot: [
        {
          id: 10798,
          name: "Atal'alarion's Tusk Ring",
          type: "Finger",
          url: createWowheadUrl("item", 10798, "atalalarions-tusk-ring"),
        },
        {
          id: 10799,
          name: "Headspike",
          type: "Two-Hand Mace",
          url: createWowheadUrl("item", 10799, "headspike"),
        },
      ],
    },

    {
      id: "avatar-of-hakkar",
      type: "boss",
      label: "Avatar of Hakkar",
      npcId: 8443,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 8443, "avatar-of-hakkar"),
      notes: "Summoned event boss.",
      loot: [
        {
          id: 10842,
          name: "Windscale Sarong",
          type: "Leather Legs",
          url: createWowheadUrl("item", 10842, "windscale-sarong"),
        },
        {
          id: 10846,
          name: "Bloodshot Greaves",
          type: "Mail Feet",
          url: createWowheadUrl("item", 10846, "bloodshot-greaves"),
        },
        {
          id: 10844,
          name: "Spire of Hakkar",
          type: "Two-Hand Staff",
          url: createWowheadUrl("item", 10844, "spire-of-hakkar"),
        },
      ],
    },

    {
      id: "jammalan-the-prophet",
      type: "boss",
      label: "Jammal'an the Prophet",
      npcId: 5710,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 5710, "jammalan-the-prophet"),
      notes: "Troll prophet encountered with Ogom the Wretched.",
      loot: [
        {
          id: 10806,
          name: "Vestments of the Atal'ai Prophet",
          type: "Cloth Chest",
          url: createWowheadUrl("item", 10806, "vestments-of-the-atalai-prophet"),
        },
        {
          id: 10808,
          name: "Gloves of the Atal'ai Prophet",
          type: "Cloth Hands",
          url: createWowheadUrl("item", 10808, "gloves-of-the-atalai-prophet"),
        },
      ],
    },

    {
      id: "ogom-the-wretched",
      type: "boss",
      label: "Ogom the Wretched",
      npcId: 5711,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 5711, "ogom-the-wretched"),
      notes: "Shadow caster paired with Jammal'an.",
      loot: [
        {
          id: 10805,
          name: "Eater of the Dead",
          type: "One-Hand Mace",
          url: createWowheadUrl("item", 10805, "eater-of-the-dead"),
        },
        {
          id: 10803,
          name: "Blade of the Wretched",
          type: "One-Hand Sword",
          url: createWowheadUrl("item", 10803, "blade-of-the-wretched"),
        },
      ],
    },

    {
      id: "dreamscythe",
      type: "boss",
      label: "Dreamscythe",
      npcId: 5721,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 5721, "dreamscythe"),
      notes: "Green dragonkin mini-boss.",
      loot: [
        {
          id: 12464,
          name: "Bloodfire Talons",
          type: "Fist Weapon",
          url: createWowheadUrl("item", 12464, "bloodfire-talons"),
        },
        {
          id: 10797,
          name: "Firebreather",
          type: "One-Hand Sword",
          url: createWowheadUrl("item", 10797, "firebreather"),
        },
      ],
    },

    {
      id: "weaver",
      type: "boss",
      label: "Weaver",
      npcId: 5720,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 5720, "weaver"),
      notes: "Green dragonkin mini-boss.",
      loot: [
        {
          id: 12465,
          name: "Nightfall Drape",
          type: "Cloak",
          url: createWowheadUrl("item", 12465, "nightfall-drape"),
        },
        {
          id: 12466,
          name: "Dawnspire Cord",
          type: "Cloth Waist",
          url: createWowheadUrl("item", 12466, "dawnspire-cord"),
        },
      ],
    },

    {
      id: "hazzas",
      type: "boss",
      label: "Hazzas",
      npcId: 5722,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 5722, "hazzas"),
      notes: "Green dragonkin paired with Morphaz.",
      loot: [
        {
          id: 10828,
          name: "Dire Nail",
          type: "Two-Hand Polearm",
          url: createWowheadUrl("item", 10828, "dire-nail"),
        },
        {
          id: 10836,
          name: "Rod of Corrosion",
          type: "Wand",
          url: createWowheadUrl("item", 10836, "rod-of-corrosion"),
        },
      ],
    },

    {
      id: "morphaz",
      type: "boss",
      label: "Morphaz",
      npcId: 5719,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 5719, "morphaz"),
      notes: "Green dragonkin paired with Hazzas.",
      loot: [
        {
          id: 10847,
          name: "Dragon's Call",
          type: "One-Hand Sword",
          url: createWowheadUrl("item", 10847, "dragons-call"),
        },
        {
          id: 10845,
          name: "Warrior's Embrace",
          type: "Mail Chest",
          url: createWowheadUrl("item", 10845, "warriors-embrace"),
        },
      ],
    },

    {
      id: "shade-of-eranikus",
      type: "boss",
      label: "Shade of Eranikus",
      npcId: 5709,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 5709, "shade-of-eranikus"),
      notes: "Final boss of the Sunken Temple.",
      loot: [
        {
          id: 10833,
          name: "Horns of Eranikus",
          type: "Leather Head",
          url: createWowheadUrl("item", 10833, "horns-of-eranikus"),
        },
        {
          id: 10835,
          name: "Crest of Supremacy",
          type: "Trinket",
          url: createWowheadUrl("item", 10835, "crest-of-supremacy"),
        },
        {
          id: 10837,
          name: "Tooth of Eranikus",
          type: "One-Hand Dagger",
          url: createWowheadUrl("item", 10837, "tooth-of-eranikus"),
        },
      ],
    },

  ],
};

export default templeOfAtalhakkar;