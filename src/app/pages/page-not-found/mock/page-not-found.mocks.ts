import { PageNotFoundSection } from "../models/page-not-found.interfaces";

export const PageNotFoundSectionMocks: PageNotFoundSection = {
  error: {
    code: 404,
    message: 'Not Found',
    description: 'The resource requested could not be found on this server!',
  },
};