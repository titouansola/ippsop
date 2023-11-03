import { AboutData } from '@ippsop/models/about-data';
import { sanityFetch } from '@ippsop/lib/sanity-fetch';

import { ABOUT_TAG_NAME } from '@ippsop/lib/constants/tag-names';

export function fetchAboutData() {
  return sanityFetch<AboutData>(`*[_type == '${ABOUT_TAG_NAME}'][0]`);
}
