
export type AppCategory = 'Games' | 'Apps' | 'Tools' | 'Social' | 'Entertainment' | 'Productivity';

export interface AppVersion {
  version: string;
  size: string;
  updatedAt: string;
  downloadUrl: string; // This points to dl.mysite.com/...
}

export interface AppData {
  id: string;
  slug: string;
  name: string;
  developer: string;
  category: AppCategory;
  rating: number;
  downloads: string;
  iconUrl: string;
  description: string;
  modFeatures?: string[];
  screenshots: string[];
  latestVersion: AppVersion;
  isFeatured?: boolean;
}
