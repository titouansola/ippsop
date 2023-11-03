import { QnaElement } from '@ippsop/models/qna-element';
import { sanityFetch } from '@ippsop/lib/sanity-fetch';

import { QNA_TAG_NAME } from '@ippsop/lib/constants/tag-names';

export function fetchQnaElts() {
  return sanityFetch<QnaElement[]>(
    `*[_type == '${QNA_TAG_NAME}'] | order(position asc)`
  );
}
