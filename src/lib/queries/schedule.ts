import { Schedule } from '@ippsop/models/schedule';
import { sanityClient } from '@ippsop/lib/sanity.client';

export function fetchSchedule() {
  return sanityClient.fetch<Schedule[]>("*[_type == 'schedule']");
}
