export interface navMenuItems {
    name: string;
    link: string;
  };

export interface topCarouselBannersProps {
  id: number;
  imgUrl: string;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: string;
  value: string;
}

export interface CuisineSuggestionsProps {
  text: string
  highlightedText: string
  type: string
  tagToDisplay: string
  cloudinaryId: string
  tagToDisplayColor: string
  metadata: string
  cta: Cta
  category: string
  categoryColor: string
  subCategory: string
  subCategoryColor: string
}

export interface Cta {
  text: string
  type: string
  link: string
}