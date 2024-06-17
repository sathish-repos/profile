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

export type AboutContent = {
  contact: ContactSection;
};
