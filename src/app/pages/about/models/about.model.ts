export type ContactSection = {
  title: string;
  description: string;
  email: {
    label: string;
    id: string;
  };
  phoneNo: {
    label: string;
    number: number;
  };
};

export type DescriptionSection = {
  title: string;
  description: string[];
  profile: {
    imageUrl: string;
    altText: string;
  };
};

export type AboutContent = {
  contact: ContactSection;
  description: DescriptionSection;
};
