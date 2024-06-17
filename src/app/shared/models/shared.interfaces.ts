export type HeaderSection = {
  logo: string;
  about: string;
};

export type FooterSection = {
  copyright: string;
  resume: {
    label: string;
    url: string;
  };
};

export type HeaderFooterContent = {
  header: HeaderSection;
  footer: FooterSection;
};
