import {
  LightService,
  ServicePageContent,
} from '@ippsop/models/service-page-content';
import { sanityFetch } from '@ippsop/lib/sanity-fetch';

import { SERVICES_TAG_NAME } from '@ippsop/lib/constants/tag-names';

export function fetchLightServiceList() {
  return sanityFetch<LightService[]>(
    `*[_type == '${SERVICES_TAG_NAME}']| order(position asc) {title,'slug':slug.current}`
  );
}

export function fetchServicePage(slug: string) {
  return sanityFetch<ServicePageContent>(
    `*[_type== '${SERVICES_TAG_NAME}' && slug.current=='${slug}'][0]`
  );
}
