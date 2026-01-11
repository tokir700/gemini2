
import { AppData } from '../types';

export const APPS: AppData[] = [
  {
    id: '1',
    slug: 'spotify-mod-premium',
    name: 'Spotify Premium MOD',
    developer: 'Spotify AB',
    category: 'Entertainment',
    rating: 4.8,
    downloads: '100M+',
    iconUrl: 'https://picsum.photos/seed/spotify/200/200',
    description: 'Listen to your favorite music and podcasts without any interruptions. With Spotify Premium MOD, you get ad-free music, offline listening, and unlimited skips.',
    modFeatures: ['Ad-Free', 'Unlimited Skips', 'Extreme Audio Quality', 'Unlocked Connect'],
    screenshots: [
      'https://picsum.photos/seed/sp1/400/800',
      'https://picsum.photos/seed/sp2/400/800',
      'https://picsum.photos/seed/sp3/400/800'
    ],
    latestVersion: {
      version: '8.9.10.616',
      size: '32.5 MB',
      updatedAt: '2024-05-20',
      downloadUrl: 'https://dl.apkflow.com/apps/spotify-premium-mod-8.9.apk'
    },
    isFeatured: true
  },
  {
    id: '2',
    slug: 'minecraft-pocket-edition',
    name: 'Minecraft PE',
    developer: 'Mojang Studios',
    category: 'Games',
    rating: 4.5,
    downloads: '50M+',
    iconUrl: 'https://picsum.photos/seed/minecraft/200/200',
    description: 'Explore infinite worlds and build everything from the simplest of homes to the grandest of castles. Play in creative mode with unlimited resources or mine deep into the world in survival mode.',
    modFeatures: ['Unlocked Skins', 'Unlocked Textures', 'No Damage Mod'],
    screenshots: [
      'https://picsum.photos/seed/mc1/400/800',
      'https://picsum.photos/seed/mc2/400/800'
    ],
    latestVersion: {
      version: '1.20.81.01',
      size: '650 MB',
      updatedAt: '2024-05-18',
      downloadUrl: 'https://dl.apkflow.com/games/minecraft-pe-v1.20.apk'
    },
    isFeatured: true
  },
  {
    id: '3',
    slug: 'canva-pro-mod',
    name: 'Canva Pro',
    developer: 'Canva',
    category: 'Tools',
    rating: 4.7,
    downloads: '10M+',
    iconUrl: 'https://picsum.photos/seed/canva/200/200',
    description: 'Canva makes design and video editing amazingly simple. Create stunning social media posts, videos, cards, flyers, photo collages & more.',
    modFeatures: ['Premium Unlocked', 'Brand Kit Unlocked', 'All Elements Free'],
    screenshots: [
      'https://picsum.photos/seed/cv1/400/800',
      'https://picsum.photos/seed/cv2/400/800'
    ],
    latestVersion: {
      version: '2.250.0',
      size: '45 MB',
      updatedAt: '2024-05-15',
      downloadUrl: 'https://dl.apkflow.com/apps/canva-pro-v2.25.apk'
    }
  },
  // Adding more dummy data to show scalability
  ...Array.from({ length: 12 }).map((_, i) => ({
    id: `dummy-${i}`,
    slug: `app-slug-${i}`,
    name: `Premium App ${i + 4}`,
    developer: 'MOD Studio',
    category: (['Games', 'Apps', 'Tools', 'Social', 'Entertainment', 'Productivity'][i % 6]) as any,
    rating: 4.2 + (Math.random() * 0.7),
    downloads: '1M+',
    iconUrl: `https://picsum.photos/seed/app${i}/200/200`,
    description: 'A high-performance utility application designed for modern users who want more features.',
    modFeatures: ['Unlocked Pro', 'No Ads'],
    screenshots: ['https://picsum.photos/seed/ss1/400/800'],
    latestVersion: {
      version: `1.${i}.0`,
      size: '25 MB',
      updatedAt: '2024-05-21',
      downloadUrl: `https://dl.apkflow.com/apps/app-${i}.apk`
    }
  }))
];
