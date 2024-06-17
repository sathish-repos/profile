import {
  FooterSection,
  HeaderFooterContent,
  HeaderSection,
} from '../models/shared.interfaces';

export const HeaderSectionMocks: HeaderSection = {
  logo: 'Sathishkumar.dev',
  about: 'About',
};

export const FooterSectionMocks: FooterSection = {
  copyright: '© Sathishkumar 2024',
  resume: {
    label: 'Resume',
    url: 'https://sathish-repos.github.io/assets/pdfs/resume/resume.pdf',
  },
};

export const HeaderFooterContentMocks: HeaderFooterContent = {
  header: HeaderSectionMocks,
  footer: FooterSectionMocks,
};
