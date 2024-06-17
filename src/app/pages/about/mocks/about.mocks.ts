import { AboutContent, ContactSection } from "../models/about.model";

export const ContactSectionMocks: ContactSection = {
  title: 'Contact',
  description: `Feel free to reach out for projects, collaborations, or just to say hello!
    Currently seeking new opportunities.`,
  email: {
    label: 'Email',
    id: 'me.sathish.git@gmail.com',
  },
  phoneNo: {
    label: 'Ph No.: ',
    number: 6380891338,
  },
};

export const AboutContentMocks: AboutContent = {
  contact: ContactSectionMocks
}