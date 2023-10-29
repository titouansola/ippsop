import { sanityClient } from '@ippsop/lib/sanity.client';
import {
  LightService,
  ServicePageContent,
} from '@ippsop/models/service-page-content';

export function fetchLightServiceList() {
  return sanityClient.fetch<LightService[]>(
    `*[_type == 'services']| order(position asc) {title,'slug':slug.current}`
  );
}

export function fetchServicePage(slug: string) {
  return sanityClient.fetch<ServicePageContent>(
    `*[_type=='services' && slug.current=='${slug}'][0]`
  );
}
