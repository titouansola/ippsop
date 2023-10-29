import { sanityClient } from '@ippsop/lib/sanity.client';
import { AboutData } from '@ippsop/models/about-data';

export function fetchAboutData() {
  return sanityClient.fetch<AboutData>(`*[_type == 'about'][0]`);
}
