import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@ippsop/lib/sanity-image-loader';

export function RichText({ value }: { value: any }) {
  return (
    <PortableText
      value={value}
      components={{
        types: {
          image: ({ value }) => (
            <div className={'relative my-20 h-96 w-full'}>
              <Image
                className={'object-contain'}
                src={urlFor(value).url()}
                alt={''}
                fill
              />
            </div>
          ),
        },
      }}
    />
  );
}
