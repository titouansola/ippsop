import { QnaElement } from '@ippsop/models/qna-element';
import { sanityClient } from '@ippsop/lib/sanity.client';

export function fetchQnaElts() {
  return sanityClient.fetch<QnaElement[]>(
    `*[_type == 'qna'] | order(position asc)`
  );
}
