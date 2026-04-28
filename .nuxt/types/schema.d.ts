import { RuntimeConfig as UserRuntimeConfig, PublicRuntimeConfig as UserPublicRuntimeConfig } from 'nuxt/schema'
import { NuxtModule, ModuleDependencyMeta } from '@nuxt/schema'
  interface SharedRuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },

   content: {
      cacheVersion: number,

      cacheIntegrity: string,

      transformers: Array<any>,

      base: string,

      api: {
         baseURL: string,
      },

      watch: {
         ws: {
            port: {
               port: number,

               portRange: Array<number>,
            },

            hostname: string,

            showURL: boolean,
         },
      },

      sources: any,

      ignores: Array<any>,

      locales: Array<any>,

      defaultLocale: any,

      highlight: {
         theme: {
            default: string,

            dark: string,
         },

         langs: Array<string>,

         highlighter: string,

         shikiEngine: string,
      },

      markdown: {
         tags: {
            p: string,

            a: string,

            blockquote: string,

            "code-inline": string,

            code: string,

            em: string,

            h1: string,

            h2: string,

            h3: string,

            h4: string,

            h5: string,

            h6: string,

            hr: string,

            img: string,

            ul: string,

            ol: string,

            li: string,

            strong: string,

            table: string,

            thead: string,

            tbody: string,

            td: string,

            th: string,

            tr: string,
         },

         anchorLinks: {
            depth: number,

            exclude: Array<number>,
         },

         toc: {
            depth: number,

            searchDepth: number,
         },

         remarkPlugins: any,

         rehypePlugins: any,
      },

      yaml: any,

      csv: {
         delimeter: string,

         json: boolean,
      },

      navigation: {
         fields: Array<any>,
      },

      contentHead: boolean,

      documentDriven: boolean,

      respectPathCase: boolean,

      experimental: {
         clientDB: boolean,

         cacheContents: boolean,

         stripQueryParameters: boolean,

         advanceQuery: boolean,

         search: any,
      },
   },

   sitemap: {
      isI18nMapped: boolean,

      sitemapName: string,

      isMultiSitemap: boolean,

      excludeAppSources: Array<any>,

      cacheMaxAgeSeconds: number,

      autoLastmod: boolean,

      defaultSitemapsChunkSize: number,

      minify: boolean,

      sortEntries: boolean,

      debug: boolean,

      discoverImages: boolean,

      discoverVideos: boolean,

      sitemapsPathPrefix: string,

      isNuxtContentDocumentDriven: boolean,

      xsl: string,

      xslTips: boolean,

      xslColumns: Array<{

      }>,

      credits: boolean,

      version: string,

      sitemaps: {
         "sitemap.xml": {
            sitemapName: string,

            route: string,

            defaults: {
               lastmod: string,
            },

            include: Array<any>,

            exclude: Array<string>,

            includeAppSources: boolean,
         },
      },
   },

   "nuxt-site-config": {
      stack: Array<{

      }>,

      version: string,

      debug: boolean,

      multiTenancy: Array<any>,
   },

   "nuxt-robots": {
      version: string,

      isNuxtContentV2: boolean,

      debug: boolean,

      credits: boolean,

      groups: Array<{

      }>,

      sitemap: Array<string>,

      header: boolean,

      robotsEnabledValue: string,

      robotsDisabledValue: string,

      cacheControl: string,

      botDetection: boolean,

      pageMetaRobots: any,
   },
  }
  interface SharedPublicRuntimeConfig {
   siteUrl: string,

   mdc: {
      components: {
         prose: boolean,

         map: {
            p: string,

            a: string,

            blockquote: string,

            "code-inline": string,

            code: string,

            em: string,

            h1: string,

            h2: string,

            h3: string,

            h4: string,

            h5: string,

            h6: string,

            hr: string,

            img: string,

            ul: string,

            ol: string,

            li: string,

            strong: string,

            table: string,

            thead: string,

            tbody: string,

            td: string,

            th: string,

            tr: string,
         },
      },

      headings: {
         anchorLinks: {
            h1: boolean,

            h2: boolean,

            h3: boolean,

            h4: boolean,

            h5: boolean,

            h6: boolean,
         },
      },
   },

   content: {
      locales: Array<any>,

      defaultLocale: any,

      integrity: any,

      experimental: {
         stripQueryParameters: boolean,

         advanceQuery: boolean,

         clientDB: boolean,
      },

      respectPathCase: boolean,

      api: {
         baseURL: string,
      },

      navigation: {
         fields: Array<any>,
      },

      tags: {
         p: string,

         a: string,

         blockquote: string,

         "code-inline": string,

         code: string,

         em: string,

         h1: string,

         h2: string,

         h3: string,

         h4: string,

         h5: string,

         h6: string,

         hr: string,

         img: string,

         ul: string,

         ol: string,

         li: string,

         strong: string,

         table: string,

         thead: string,

         tbody: string,

         td: string,

         th: string,

         tr: string,
      },

      highlight: {
         theme: {
            default: string,

            dark: string,
         },

         langs: Array<string>,

         highlighter: string,

         shikiEngine: string,
      },

      wsUrl: string,

      documentDriven: boolean,

      host: string,

      trailingSlash: boolean,

      search: any,

      contentHead: boolean,

      anchorLinks: {
         depth: number,

         exclude: Array<number>,
      },
   },

   "nuxt-schema-org": {
      reactive: boolean,

      minify: boolean,

      scriptAttributes: {
         "data-nuxt-schema-org": boolean,
      },

      identity: any,

      version: string,
   },

   "nuxt-link-checker": {
      version: string,

      hasSitemapModule: boolean,

      rootDir: string,

      excludeLinks: Array<{

      }>,

      skipInspections: Array<any>,

      fetchTimeout: number,

      showLiveInspections: boolean,

      fetchRemoteUrls: boolean,
   },

   "nuxt-robots": {
      version: string,

      isNuxtContentV2: boolean,

      debug: boolean,

      credits: boolean,

      groups: Array<{

      }>,

      sitemap: Array<string>,

      header: boolean,

      robotsEnabledValue: string,

      robotsDisabledValue: string,

      cacheControl: string,

      botDetection: boolean,

      pageMetaRobots: any,
   },
  }
declare module '@nuxt/schema' {
  interface ModuleDependencies {
    ["@nuxtjs/tailwindcss"]?: ModuleDependencyMeta<typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxtjs/mdc"]?: ModuleDependencyMeta<typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/content"]?: ModuleDependencyMeta<typeof import("@nuxt/content").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-site-config"]?: ModuleDependencyMeta<typeof import("nuxt-site-config").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxtjs/robots"]?: ModuleDependencyMeta<typeof import("@nuxtjs/robots").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-site-config"]?: ModuleDependencyMeta<typeof import("nuxt-site-config").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxtjs/sitemap"]?: ModuleDependencyMeta<typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-og-image"]?: ModuleDependencyMeta<typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-site-config"]?: ModuleDependencyMeta<typeof import("nuxt-site-config").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-schema-org"]?: ModuleDependencyMeta<typeof import("nuxt-schema-org").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-site-config"]?: ModuleDependencyMeta<typeof import("nuxt-site-config").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-link-checker"]?: ModuleDependencyMeta<typeof import("nuxt-link-checker").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-seo-utils"]?: ModuleDependencyMeta<typeof import("nuxt-seo-utils").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxtseo"]?: ModuleDependencyMeta<typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/devtools"]?: ModuleDependencyMeta<typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/telemetry"]?: ModuleDependencyMeta<typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
  }
  interface NuxtOptions {
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     */
    ["tailwindcss"]: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/mdc`
     */
    ["mdc"]: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/content`
     */
    ["content"]: typeof import("@nuxt/content").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/robots`
     */
    ["robots"]: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/sitemap`
     */
    ["sitemap"]: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-og-image`
     */
    ["ogImage"]: typeof import("nuxt-og-image").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-schema-org`
     */
    ["schemaOrg"]: typeof import("nuxt-schema-org").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-link-checker`
     */
    ["linkChecker"]: typeof import("nuxt-link-checker").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-seo-utils`
     */
    ["seo"]: typeof import("nuxt-seo-utils").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/seo`
     */
    ["nuxtseo"]: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     */
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/mdc`
     */
    ["mdc"]?: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/content`
     */
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]?: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/robots`
     */
    ["robots"]?: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]?: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/sitemap`
     */
    ["sitemap"]?: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-og-image`
     */
    ["ogImage"]?: typeof import("nuxt-og-image").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]?: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-schema-org`
     */
    ["schemaOrg"]?: typeof import("nuxt-schema-org").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]?: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-link-checker`
     */
    ["linkChecker"]?: typeof import("nuxt-link-checker").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-seo-utils`
     */
    ["seo"]?: typeof import("nuxt-seo-utils").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/seo`
     */
    ["nuxtseo"]?: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@nuxtjs/mdc", Exclude<NuxtConfig["mdc"], boolean>] | ["@nuxt/content", Exclude<NuxtConfig["content"], boolean>] | ["F:/33024/claude-code-myblogs/node_modules/nuxt-site-config/dist/module.mjs", Exclude<NuxtConfig["site"], boolean>] | ["@nuxtjs/robots", Exclude<NuxtConfig["robots"], boolean>] | ["F:/33024/claude-code-myblogs/node_modules/nuxt-site-config/dist/module.mjs", Exclude<NuxtConfig["site"], boolean>] | ["@nuxtjs/sitemap", Exclude<NuxtConfig["sitemap"], boolean>] | ["nuxt-og-image", Exclude<NuxtConfig["ogImage"], boolean>] | ["F:/33024/claude-code-myblogs/node_modules/nuxt-site-config/dist/module.mjs", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-schema-org", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["F:/33024/claude-code-myblogs/node_modules/nuxt-site-config/dist/module.mjs", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-link-checker", Exclude<NuxtConfig["linkChecker"], boolean>] | ["nuxt-seo-utils", Exclude<NuxtConfig["seo"], boolean>] | ["@nuxtjs/seo", Exclude<NuxtConfig["nuxtseo"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig extends UserRuntimeConfig {}
  interface PublicRuntimeConfig extends UserPublicRuntimeConfig {}
}
declare module 'nuxt/schema' {
  interface ModuleDependencies {
    ["@nuxtjs/tailwindcss"]?: ModuleDependencyMeta<typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxtjs/mdc"]?: ModuleDependencyMeta<typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/content"]?: ModuleDependencyMeta<typeof import("@nuxt/content").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-site-config"]?: ModuleDependencyMeta<typeof import("nuxt-site-config").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxtjs/robots"]?: ModuleDependencyMeta<typeof import("@nuxtjs/robots").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-site-config"]?: ModuleDependencyMeta<typeof import("nuxt-site-config").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxtjs/sitemap"]?: ModuleDependencyMeta<typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-og-image"]?: ModuleDependencyMeta<typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-site-config"]?: ModuleDependencyMeta<typeof import("nuxt-site-config").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-schema-org"]?: ModuleDependencyMeta<typeof import("nuxt-schema-org").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-site-config"]?: ModuleDependencyMeta<typeof import("nuxt-site-config").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-link-checker"]?: ModuleDependencyMeta<typeof import("nuxt-link-checker").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-seo-utils"]?: ModuleDependencyMeta<typeof import("nuxt-seo-utils").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxtseo"]?: ModuleDependencyMeta<typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/devtools"]?: ModuleDependencyMeta<typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/telemetry"]?: ModuleDependencyMeta<typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
  }
  interface NuxtOptions {
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     * @see https://www.npmjs.com/package/@nuxtjs/tailwindcss
     */
    ["tailwindcss"]: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/mdc`
     * @see https://www.npmjs.com/package/@nuxtjs/mdc
     */
    ["mdc"]: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/content`
     * @see https://www.npmjs.com/package/@nuxt/content
     */
    ["content"]: typeof import("@nuxt/content").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/robots`
     * @see https://www.npmjs.com/package/@nuxtjs/robots
     */
    ["robots"]: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/sitemap`
     * @see https://www.npmjs.com/package/@nuxtjs/sitemap
     */
    ["sitemap"]: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-og-image`
     * @see https://www.npmjs.com/package/nuxt-og-image
     */
    ["ogImage"]: typeof import("nuxt-og-image").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-schema-org`
     * @see https://www.npmjs.com/package/nuxt-schema-org
     */
    ["schemaOrg"]: typeof import("nuxt-schema-org").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-link-checker`
     * @see https://www.npmjs.com/package/nuxt-link-checker
     */
    ["linkChecker"]: typeof import("nuxt-link-checker").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-seo-utils`
     * @see https://www.npmjs.com/package/nuxt-seo-utils
     */
    ["seo"]: typeof import("nuxt-seo-utils").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/seo`
     * @see https://www.npmjs.com/package/@nuxtjs/seo
     */
    ["nuxtseo"]: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     * @see https://www.npmjs.com/package/@nuxtjs/tailwindcss
     */
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/mdc`
     * @see https://www.npmjs.com/package/@nuxtjs/mdc
     */
    ["mdc"]?: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/content`
     * @see https://www.npmjs.com/package/@nuxt/content
     */
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]?: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/robots`
     * @see https://www.npmjs.com/package/@nuxtjs/robots
     */
    ["robots"]?: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]?: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/sitemap`
     * @see https://www.npmjs.com/package/@nuxtjs/sitemap
     */
    ["sitemap"]?: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-og-image`
     * @see https://www.npmjs.com/package/nuxt-og-image
     */
    ["ogImage"]?: typeof import("nuxt-og-image").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]?: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-schema-org`
     * @see https://www.npmjs.com/package/nuxt-schema-org
     */
    ["schemaOrg"]?: typeof import("nuxt-schema-org").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-site-config`
     */
    ["site"]?: typeof import("nuxt-site-config").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-link-checker`
     * @see https://www.npmjs.com/package/nuxt-link-checker
     */
    ["linkChecker"]?: typeof import("nuxt-link-checker").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-seo-utils`
     * @see https://www.npmjs.com/package/nuxt-seo-utils
     */
    ["seo"]?: typeof import("nuxt-seo-utils").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/seo`
     * @see https://www.npmjs.com/package/@nuxtjs/seo
     */
    ["nuxtseo"]?: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@nuxtjs/mdc", Exclude<NuxtConfig["mdc"], boolean>] | ["@nuxt/content", Exclude<NuxtConfig["content"], boolean>] | ["F:/33024/claude-code-myblogs/node_modules/nuxt-site-config/dist/module.mjs", Exclude<NuxtConfig["site"], boolean>] | ["@nuxtjs/robots", Exclude<NuxtConfig["robots"], boolean>] | ["F:/33024/claude-code-myblogs/node_modules/nuxt-site-config/dist/module.mjs", Exclude<NuxtConfig["site"], boolean>] | ["@nuxtjs/sitemap", Exclude<NuxtConfig["sitemap"], boolean>] | ["nuxt-og-image", Exclude<NuxtConfig["ogImage"], boolean>] | ["F:/33024/claude-code-myblogs/node_modules/nuxt-site-config/dist/module.mjs", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-schema-org", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["F:/33024/claude-code-myblogs/node_modules/nuxt-site-config/dist/module.mjs", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-link-checker", Exclude<NuxtConfig["linkChecker"], boolean>] | ["nuxt-seo-utils", Exclude<NuxtConfig["seo"], boolean>] | ["@nuxtjs/seo", Exclude<NuxtConfig["nuxtseo"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig extends SharedRuntimeConfig {}
  interface PublicRuntimeConfig extends SharedPublicRuntimeConfig {}
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: UserRuntimeConfig
        }
      }