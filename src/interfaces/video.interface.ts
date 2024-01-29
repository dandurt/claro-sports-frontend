export interface PlayerProps {
  id: string;
  url: string;
  title: string;
  country: string;
  description: string;
  posterUrl: string;
  isActive: boolean;
  imagePreview: string;
  previewText: string;
  onClick?: (id: string) => void;
}

export interface List {
  data: PlayerProps[];
  onClick?: (id: string) => void;
}

export interface PosterProps {
  title: string;
  country: string;
  description: string;
  posterUrl: string;
  previewText: string;
}
