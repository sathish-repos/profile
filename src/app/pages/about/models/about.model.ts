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

export type DisciplinesSection = {
  title: string;
  disciplines: string[];
};

export type Educations = {
  study: string;
  from: string;
  year: string;
  score: string;
};

export type EducationSection = {
  title: string;
  educations: Educations[];
};

export type AboutContent = {
  contact: ContactSection;
  description: DescriptionSection;
  disciplines: DisciplinesSection;
  educations: EducationSection;
};
