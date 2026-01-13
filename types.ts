
export interface Artwork {
  id: string;
  title: string;
  year: string;
  medium: string;
  description: string;
  imageUrl: string;
  dimensions: string;
}

export interface CuratorInsight {
  painting: string;
  analysis: string;
  historicalContext: string;
  keyDetails: string[];
}
