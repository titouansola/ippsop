import { PropsWithChildren, useMemo } from 'react';
import LiveQueryProvider from '@sanity/preview-kit';
import { getClient } from '@ippsop/lib/sanity.client';

type PreviewProviderProps = PropsWithChildren<{
  previewToken: string;
}>;

export function PreviewProvider({
  children,
  previewToken,
}: PreviewProviderProps) {
  const client = useMemo(() => getClient(previewToken), [previewToken]);
  return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>;
}
