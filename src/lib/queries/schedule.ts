import { Schedule } from '@ippsop/models/schedule';
import { sanityFetch } from '@ippsop/lib/sanity-fetch';

import { SCHEDULE_TAG_NAME } from '@ippsop/lib/constants/tag-names';

export function fetchSchedule() {
  return sanityFetch<Schedule[]>(
    `*[_type == '${SCHEDULE_TAG_NAME}']`,
    SCHEDULE_TAG_NAME
  );
}
