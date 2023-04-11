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