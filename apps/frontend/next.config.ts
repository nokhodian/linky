import { withSentryConfig } from '@sentry/nextjs';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@trylinky/ui', '@trylinky/common'],
  rewrites: async () => [
    {
      source: '/',
      destination: `${process.env.NEXT_PUBLIC_MARKETING_URL}/`,
    },
    {
      source: '/sitemap.xml',
      destination: `${process.env.NEXT_PUBLIC_MARKETING_URL}/sitemap.xml`,
    },
    {
      source: '/pricing',
      destination: `${process.env.NEXT_PUBLIC_MARKETING_URL}/pricing`,
    },
    {
      source: '/explore',
      destination: `${process.env.NEXT_PUBLIC_MARKETING_URL}/explore`,
    },
    {
      source: '/learn/:path*',
      destination: `${process.env.NEXT_PUBLIC_MARKETING_URL}/learn/:path*`,
    },
    {
      source: '/blog/:path*',
      destination: `${process.env.NEXT_PUBLIC_MARKETING_URL}/blog/:path*`,
    },
    {
      source: '/images/:path*',
      destination: `${process.env.NEXT_PUBLIC_MARKETING_URL}/images/:path*`,
    },
    {
      source: '/privacy',
      destination: `${process.env.NEXT_PUBLIC_MARKETING_URL}/privacy`,
    },
    {
      source: '/terms',
      destination: `${process.env.NEXT_PUBLIC_MARKETING_URL}/terms`,
    },
    {
      source: '/i/:path*',
      destination: `${process.env.NEXT_PUBLIC_MARKETING_URL}/:path*`,
    },
  ],
  redirects: async () => [
    {
      source: '/learn/what-is-glow',
      destination: '/learn/what-is-linky',
      permanent: true,
    },
    {
      source: '/learn/is-glow-free',
      destination: '/learn/is-linky-free',
      permanent: true,
    },
  ],
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dev.glow.as',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'cdn.glow.as',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'cdn.dev.lin.ky',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'cdn.lin.ky',
        port: '',
      },
    ],
  },
};

export default withSentryConfig(nextConfig, {
  org: 'hyperdusk',
  project: 'glow',
  silent: false,
  sourcemaps: {
    deleteSourcemapsAfterUpload: true,
  },
});
