import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import {
  defineUrlResolver,
  Iframe,
  IframeOptions,
} from 'sanity-plugin-iframe-pane';
import { visionTool } from '@sanity/vision';
import {
  sanityApiVersion,
  sanityDataset,
  sanityProjectId,
} from '@ippsop/lib/client.api';
import { schema } from '@ippsop/schema';

const iFrameOptions = {
  url: defineUrlResolver({
    base: '/api/preview',
  }),
} satisfies IframeOptions;

export default defineConfig({
  basePath: '/studio',
  name: 'ippsop',
  title: 'IPPSOP Gaël Guenec',
  projectId: sanityProjectId,
  dataset: sanityDataset,
  schema,
  plugins: [
    deskTool({
      defaultDocumentNode: (S, { schemaType }) => {
        return S.document().views([
          S.view.form(),
          S.view.component(Iframe).options(iFrameOptions).title('Preview'),
        ]);
      },
    }),
    visionTool({ defaultApiVersion: sanityApiVersion }),
  ],
});
