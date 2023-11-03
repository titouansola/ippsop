import { Article } from '@ippsop/models/article';
import { sanityFetch } from '@ippsop/lib/sanity-fetch';

import { ARTICLE_TAG_NAME } from '@ippsop/lib/constants/tag-names';

export async function fetchArticles() {
  return sanityFetch<Article[]>(
    `*[_type == '${ARTICLE_TAG_NAME}']{...,'createdAt': _createdAt} | order(_createdAt desc)`
  );
}
