const SHOP_DATA = [
  {
    title: 'Action Games',
    items: [
      {
        id: 1,
        name: 'Forspoken',
        imageUrl: 'https://i.ibb.co/Yft9S0J/Forspoken.jpg',
        price: 379,
      },
      {
        id: 2,
        name: 'Redfall',
        imageUrl: 'https://i.ibb.co/CsGzXnW/Redfall.jpg',
        price: 349,
      },
      {
        id: 3,
        name: 'Avatar: Frontiers of Pandora',
        imageUrl: 'https://i.ibb.co/Q6NJxPL/Avatar-Frontiers-of-Pandora.jpg',
        price: 339,
      },
      {
        id: 4,
        name: 'STAR WARS Jedi: Survivor',
        imageUrl: 'https://i.ibb.co/dMmCsF6/STAR-WARS-Jedi-Survivor.jpg',
        price: 339,
      },
      {
        id: 5,
        name: 'WILD HEARTS Standard Edition',
        imageUrl: 'https://i.ibb.co/rHyY8nN/WILD-HEARTS-Standard-Edition.jpg',
        price: 339,
      },
      {
        id: 6,
        name: 'Cyberpunk 2077',
        imageUrl: 'https://i.ibb.co/rpjqx3F/Cyberpunk-2077.jpg',
        price: 291,
      },
      {
        id: 7,
        name: 'Dying Light 2 Stay Human - Reloaded Edition',
        imageUrl: 'https://i.ibb.co/MDQ2L6W/Dying-Light-2-Stay-Human-Reloaded-Edition.jpg',
        price: 295,
      },
      {
        id: 8,
        name: 'Red Dead Redemption 2',
        imageUrl: 'https://i.ibb.co/q1Fjc2S/Red-Dead-Redemption-2.jpg',
        price: 290,
      },
      {
        id: 9,
        name: 'Horizon Forbidden West Complete Edition',
        imageUrl: 'https://i.ibb.co/TcvvvRt/Horizon-Forbidden-West-Complete-Edition.jpg',
        price: 289,
      },
    ],
  },
  {
    title: 'Adventure Games',
    items: [
      {
        id: 10,
        name: 'The Witcher® 3: Wild Hunt',
        imageUrl: 'https://i.ibb.co/c8nwwqq/The-Witcher-3-Wild-Hunt.jpg',
        price: 242,
      },
      {
        id: 11,
        name: 'Marvel\'s Guardians of the Galaxy',
        imageUrl: 'https://i.ibb.co/P6qrHsg/Marvel-s-Guardians-of-the-Galaxy.jpg',
        price: 244,
      },
      {
        id: 12,
        name: 'Hoghwarts Legacy',
        imageUrl: 'https://i.ibb.co/jDgsh3k/hogwarts-legacy.jpg',
        price: 289,
      },
      {
        id: 13,
        name: 'Baldur\'s Gate 3',
        imageUrl: 'https://i.ibb.co/S3qzcb2/Baldur-s-Gate-3.jpg',
        price: 289,
      },
      {
        id: 14,
        name: 'Marvel\'s Spider-Man Remastered',
        imageUrl: 'https://i.ibb.co/rHCkD9Y/Marvel-s-Spider-Man-Remastered.jpg',
        price: 289,
      },
      {
        id: 15,
        name: 'Tiny Tina\'s Wonderlands',
        imageUrl: 'https://i.ibb.co/MVtHCgm/Tiny-Tina-s-Wonderlands.jpg',
        price: 289,
      },
      {
        id: 16,
        name: 'The Last of Us Part 1',
        imageUrl: 'https://i.ibb.co/XjmqNSK/the-last-of-us.jpg',
        price: 289,
      },
      {
        id: 17,
        name: 'God of War',
        imageUrl: 'https://i.ibb.co/Ln4dYfq/God-of-War.jpg',
        price: 239,
      },
    ],
  },
  {
    title: 'Strategy Games',
    items: [
      {
        id: 18,
        name: 'Dota 2',
        imageUrl: 'https://i.ibb.co/PWyf219/Dota-2.jpg',
        price: 330,
      },
      {
        id: 19,
        name: 'Sid Meier\’s Civilization® VI',
        imageUrl: 'https://i.ibb.co/zX3K2Jv/Sid-Meier-s-Civilization-VI.jpg',
        price: 194,
      },
      {
        id: 20,
        name: 'Plants vs. Zombies GOTY Edition',
        imageUrl: 'https://i.ibb.co/xG3JBVt/Plants-vs-Zombies.jpg',
        price: 192,
      },
      {
        id: 21,
        name: 'Age of Empires II: Definitive Edition',
        imageUrl: 'https://i.ibb.co/YQbpkXX/Age-of-Empires-II-Definitive-Edition.jpg',
        price: 153,
      },
      {
        id: 22,
        name: 'STAR WARS™ Empire at War - Gold Pack',
        imageUrl: 'https://i.ibb.co/JFq7BKB/STAR-WARS-Empire-at-War.jpg',
        price: 87,
      },
    ],
  },
  {
    title: 'Role-Playing Games',
    items: [
      {
        id: 23,
        name: 'Monster Hunter: World',
        imageUrl: 'https://i.ibb.co/5sz67TK/Monster-Hunter-World.jpg',
        price: 50,
      },
      {
        id: 24,
        name: 'Baldur\'s Gate 3',
        imageUrl: 'https://i.ibb.co/S3qzcb2/Baldur-s-Gate-3.jpg',
        price: 250,
      },
      {
        id: 25,
        name: 'ELDEN RING',
        imageUrl: 'https://i.ibb.co/PrgNWGt/ELDEN-RING.jpg',
        price: 245,
      },
      {
        id: 26,
        name: 'Lost Ark',
        imageUrl: 'https://i.ibb.co/rMpbNdn/Lost-Ark.jpg',
        price: 60,
      },
      {
        id: 27,
        name: 'FINAL FANTASY XIV Online',
        imageUrl: 'https://i.ibb.co/bbYmW3T/FINAL-FANTASY-XIV-Online.jpg',
        price: 70,
      },
    ],
  },
  {
    title: 'Simulation Games',
    items: [
      {
        id: 28,
        name: 'Euro Truck Simulator 2',
        imageUrl: 'https://i.ibb.co/HzJJF8Y/Euro-Truck-Simulator-2.jpg',
        price: 99,
      },
      {
        id: 29,
        name: 'Stardew Valley',
        imageUrl: 'https://i.ibb.co/2tZwgxy/Stardew-Valley.jpg',
        price: 140,
      },
      {
        id: 30,
        name: 'Cities: Skylines',
        imageUrl: 'https://i.ibb.co/jTmxRKL/Cities-Skylines.jpg',
        price: 289,
      },
      {
        id: 31,
        name: 'American Truck Simulator',
        imageUrl: 'https://i.ibb.co/vHZC7L0/american-truck-simulator.jpg',
        price: 90,
      },
      {
        id: 32,
        name: 'DAVE THE DIVER',
        imageUrl: 'https://i.ibb.co/bdn5rWq/DAVE-THE-DIVER.jpg',
        price: 120,
      },
    ],
  },
  {
    title: 'Racing Games',
    items: [
      {
        id: 33,
        name: 'Forza Horizon 5',
        imageUrl: 'https://i.ibb.co/zZjhL5C/Forza-Horizon-5.jpg',
        price: 120,
      },
      {
        id: 34,
        name: 'Need for Speed™ Heat',
        imageUrl: 'https://i.ibb.co/KWr1stP/Need-for-Speed-Heat.jpg',
        price: 350,
      },
      {
        id: 35,
        name: 'CarX Drift Racing Online',
        imageUrl: 'https://i.ibb.co/yQVK9zK/Car-X-Drift-Racing-Online.jpg',
        price: 160,
      },
      {
        id: 36,
        name: 'Assetto Corsa',
        imageUrl: 'https://i.ibb.co/ZNjWVNq/Assetto-Corsa.jpg',
        price: 120,
      },
      {
        id: 37,
        name: 'iRacing',
        imageUrl: 'https://i.ibb.co/wMJK43n/iRacing.jpg',
        price: 60,
      },
    ],
  },
];

export default SHOP_DATA;