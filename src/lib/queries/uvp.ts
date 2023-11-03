import { UVP } from '@ippsop/models/uvp';
import { sanityFetch } from '@ippsop/lib/sanity-fetch';

import { UVP_TAG_NAME } from '@ippsop/lib/constants/tag-names';

export function fetchUvps() {
  return sanityFetch<UVP[]>(
    `*[_type == '${UVP_TAG_NAME}']{'slug': reference->slug.current, ...} | order(position asc)`,
    UVP_TAG_NAME
  );
}
