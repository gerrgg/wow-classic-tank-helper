const createWowheadUrl = (type, id, slug) => {
  return `https://www.wowhead.com/classic/${type}=${id}${slug ? `/${slug}` : ""}`;
};

export const shadowfangKeep = {
  id: "shadowfang-keep",
  zoneId: 209,
  name: "Shadowfang Keep",
  shortName: "SFK",
  levelRange: "22–30",
  zone: "Silverpine Forest",
  mapSrc: "/wow-classic-tank-helper/maps/shadowfang-keep.jpg",
  width: 1024,
  height: 768,

  markers: [
    {
      id: "rethilgore",
      type: "boss",
      label: "Rethilgore",
      npcId: 3914,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 3914, "rethilgore"),
      notes: "Opening boss of Shadowfang Keep.",
      loot: [
        {
          id: 5254,
          name: "Rugged Spaulders",
          type: "Leather Shoulders",
          url: createWowheadUrl("item", 5254, "rugged-spaulders"),
        },
      ],
    },

    {
      id: "fel-steeds-shadow-charger",
      type: "boss",
      label: "Fel Steeds / Shadow Charger",
      npcId: 3864,
      secondaryNpcId: 3865,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 3864, "fel-steeds-shadow-charger"),
      notes: "Stable encounter. Pulling one horse pulls all three.",
      loot: [
        {
          id: 932,
          name: "Fel Steed Saddlebags",
          type: "Bag",
          url: createWowheadUrl("item", 932, "fel-steed-saddlebags"),
        },
        {
          id: 6341,
          name: "Eerie Stable Lantern",
          type: "Held In Off-hand",
          url: createWowheadUrl("item", 6341, "eerie-stable-lantern"),
        },
      ],
    },

    {
      id: "razorclaw-the-butcher",
      type: "boss",
      label: "Razorclaw the Butcher",
      npcId: 3886,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 3886, "razorclaw-the-butcher"),
      notes: "Kitchen boss. Clear the room and nearby patrols before pulling.",
      loot: [
        {
          id: 6226,
          name: "Bloody Apron",
          type: "Cloth Chest",
          url: createWowheadUrl("item", 6226, "bloody-apron"),
        },
        {
          id: 6633,
          name: "Butcher's Slicer",
          type: "One-Hand Sword",
          url: createWowheadUrl("item", 6633, "butchers-slicer"),
        },
        {
          id: 1292,
          name: "Butcher's Cleaver",
          type: "One-Hand Axe",
          url: createWowheadUrl("item", 1292, "butchers-cleaver"),
        },
      ],
    },

    {
      id: "baron-silverlaine",
      type: "boss",
      label: "Baron Silverlaine",
      npcId: 3887,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 3887, "baron-silverlaine"),
      notes: "Ghostly boss with Veil of Shadow.",
      loot: [
        {
          id: 6323,
          name: "Baron's Scepter",
          type: "Main Hand Mace",
          url: createWowheadUrl("item", 6323, "barons-scepter"),
        },
        {
          id: 6321,
          name: "Silverlaine's Family Seal",
          type: "Finger",
          url: createWowheadUrl("item", 6321, "silverlaines-family-seal"),
        },
      ],
    },

    {
      id: "commander-springvale",
      type: "boss",
      label: "Commander Springvale",
      npcId: 4278,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 4278, "commander-springvale"),
      notes: "Commander with two adds.",
      loot: [
        {
          id: 3191,
          name: "Arced War Axe",
          type: "Two-Hand Axe",
          url: createWowheadUrl("item", 3191, "arced-war-axe"),
        },
        {
          id: 6320,
          name: "Commander's Crest",
          type: "Shield",
          url: createWowheadUrl("item", 6320, "commanders-crest"),
        },
      ],
    },

    {
      id: "odo-the-blindwatcher",
      type: "boss",
      label: "Odo the Blindwatcher",
      npcId: 4279,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 4279, "odo-the-blindwatcher"),
      notes: "Bat boss with two Vile Bat adds.",
      loot: [
        {
          id: 6319,
          name: "Girdle of the Blindwatcher",
          type: "Leather Waist",
          url: createWowheadUrl("item", 6319, "girdle-of-the-blindwatcher"),
        },
        {
          id: 6318,
          name: "Odo's Ley Staff",
          type: "Two-Hand Staff",
          url: createWowheadUrl("item", 6318, "odos-ley-staff"),
        },
      ],
    },

    {
      id: "deathsworn-captain",
      type: "rare",
      label: "Deathsworn Captain",
      npcId: 3872,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 3872, "deathsworn-captain"),
      notes: "Rare elite in Shadowfang Keep.",
      loot: [
        {
          id: 6641,
          name: "Haunting Blade",
          type: "Two-Hand Sword",
          url: createWowheadUrl("item", 6641, "haunting-blade"),
        },
        {
          id: 6642,
          name: "Phantom Armor",
          type: "Mail Chest",
          url: createWowheadUrl("item", 6642, "phantom-armor"),
        },
      ],
    },

    {
      id: "fenrus-the-devourer",
      type: "boss",
      label: "Fenrus the Devourer",
      npcId: 4274,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 4274, "fenrus-the-devourer"),
      notes: "Large worg boss.",
      loot: [
        {
          id: 6340,
          name: "Fenrus' Hide",
          type: "Cloak",
          url: createWowheadUrl("item", 6340, "fenrus-hide"),
        },
        {
          id: 3230,
          name: "Black Wolf Bracers",
          type: "Leather Wrist",
          url: createWowheadUrl("item", 3230, "black-wolf-bracers"),
        },
      ],
    },

    {
      id: "wolf-master-nandos",
      type: "boss",
      label: "Wolf Master Nandos",
      npcId: 3927,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 3927, "wolf-master-nandos"),
      notes: "Worg master boss. Clear surrounding worgs first.",
      loot: [
        {
          id: 3748,
          name: "Feline Mantle",
          type: "Cloth Shoulders",
          url: createWowheadUrl("item", 3748, "feline-mantle"),
        },
        {
          id: 6314,
          name: "Wolfmaster Cape",
          type: "Cloak",
          url: createWowheadUrl("item", 6314, "wolfmaster-cape"),
        },
      ],
    },

    {
      id: "archmage-arugal",
      type: "boss",
      label: "Archmage Arugal",
      npcId: 4275,
      x: 0,
      y: 0,
      wowheadUrl: createWowheadUrl("npc", 4275, "archmage-arugal"),
      notes: "Final boss of Shadowfang Keep. Teleports around the room.",
      loot: [
        {
          id: 6324,
          name: "Robes of Arugal",
          type: "Cloth Chest",
          url: createWowheadUrl("item", 6324, "robes-of-arugal"),
        },
        {
          id: 6392,
          name: "Belt of Arugal",
          type: "Cloth Waist",
          url: createWowheadUrl("item", 6392, "belt-of-arugal"),
        },
        {
          id: 6220,
          name: "Meteor Shard",
          type: "One-Hand Dagger",
          url: createWowheadUrl("item", 6220, "meteor-shard"),
        },
      ],
    },

  ],
};

export default shadowfangKeep;