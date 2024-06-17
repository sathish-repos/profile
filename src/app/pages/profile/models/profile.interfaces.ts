export type HeroSection = {
  name: string;
  description: string;
};

export type AppsSection = {
  title: string;
  appsList: AppContent[];
};

export type AppContent = {
  name: string;
  description: string;
  imageUrl: {
    mobile: string;
    desktop: string;
  };
  link: {
    url: string;
    target: string;
  };
};

export type ProfileContent = {
  hero: HeroSection;
  apps: AppsSection;
};
