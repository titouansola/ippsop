import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import {
  defineUrlResolver,
  Iframe,
  IframeOptions,
} from 'sanity-plugin-iframe-pane';
import { previewUrl } from 'sanity-plugin-iframe-pane/preview-url';
import { visionTool } from '@sanity/vision';
import {
  apiVersion,
  dataset,
  previewSecretId,
  projectId,
} from '@ippsop/lib/sanity.api';
import { schema } from '@ippsop/schema';

const iFrameOptions = {
  url: defineUrlResolver({
    base: '/api/draft',
  }),
  urlSecretId: previewSecretId,
  reload: { button: true },
} satisfies IframeOptions;

export default defineConfig({
  basePath: '/studio',
  name: 'ippsop',
  title: 'IPPSOP Gaël Guenec',
  projectId,
  dataset,
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
    previewUrl({
      base: '/api/draft',
      urlSecretId: previewSecretId,
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
