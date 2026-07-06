/**
 * Configure static export for GitHub Pages.
 * - `output: 'export'` enables `next export` static HTML export
 * - `images.unoptimized` disables Next.js image optimization (not available on static hosts)
 */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
