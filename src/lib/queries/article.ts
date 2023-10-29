import { Article } from '@ippsop/models/article';
import { sanityClient } from '@ippsop/lib/sanity.client';

export async function fetchArticles() {
  return sanityClient.fetch<Article[]>(
    `*[_type == 'article']{...,'createdAt': _createdAt} | order(_createdAt desc)`
  );
}
