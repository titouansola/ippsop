'use client';

import Head from 'next/head';
import { metadata } from 'next-sanity/studio/metadata';
import { NextStudio } from 'next-sanity/studio';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import {
  sanityApiVersion,
  sanityDataset,
  sanityProjectId,
} from '@ippsop/lib/client.api';
import { schema } from '@ippsop/schema';

export default function StudioPage() {
  return (
    <>
      <Head>
        {Object.entries(metadata).map(([key, value]) => (
          <meta key={key} name={key} content={value} />
        ))}
      </Head>
      <NextStudio
        config={defineConfig({
          basePath: '/studio',
          name: 'ippsop',
          title: 'IPPSOP Website Studio',
          projectId: sanityProjectId,
          dataset: sanityDataset,
          schema,
          plugins: [
            deskTool(),
            visionTool({ defaultApiVersion: sanityApiVersion }),
          ],
        })}
        unstable_globalStyles
      />
    </>
  );
}
