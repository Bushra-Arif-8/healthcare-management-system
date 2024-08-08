import createNextIntlPlugin from 'next-intl/plugin';

// Update the path to point to your new i18.ts location
const withNextIntl = createNextIntlPlugin('./src/utils/i18.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);
