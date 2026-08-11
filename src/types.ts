export type Language = 'fr' | 'en' | 'ar';

export type StorageCategoryId = 'positive' | 'negative' | 'general';

export interface StorageCategory {
  id: StorageCategoryId;
  title: string;
  subtitle: string;
  tempRange: string;
  badgeText: string;
  description: string;
  items: string[];
  specs: {
    label: string;
    value: string;
  }[];
  imageUrl: string;
}

export type FacilityAreaId = 
  | 'entrance'
  | 'reception'
  | 'positive_rooms'
  | 'negative_rooms'
  | 'storage_areas'
  | 'corridors'
  | 'loading'
  | 'equipment'
  | 'safety'
  | 'access'
  | 'other_spaces';

export interface FacilityArea {
  id: FacilityAreaId;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  specs: string[];
  imageUrl: string;
}

export type GalleryCategory = 
  | 'all'
  | 'cold_rooms'
  | 'storage_areas'
  | 'equipment'
  | 'facility'
  | 'access'
  | 'loading';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  categoryLabel: string;
  imageUrl: string;
  caption: string;
  specs?: string;
}

export interface AdvantageGroup {
  clusterTitle: string;
  clusterSubtitle: string;
  items: {
    title: string;
    description: string;
    iconName: string;
    metric?: string;
  }[];
}

export interface QuoteFormData {
  companyName: string;
  contactName: string;
  phone: string;
  email: string;
  productType: string;
  approxVolumeNum: number; // in pallets or m³
  volumeUnit: 'pallets' | 'm3' | 'tons';
  storageType: 'positive' | 'negative' | 'general';
  targetTemp: string;
  durationMonths: number;
  startDate: string;
  additionalNotes: string;
}

export interface TourChapter {
  id: string;
  title: string;
  timestamp: string;
  description: string;
  posterUrl: string;
}
