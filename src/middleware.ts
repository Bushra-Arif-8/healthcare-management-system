import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ur'],
  defaultLocale: 'en'
});

export const config = {
  matcher: ['/', '/(en|ur)/:path*']  // Ensure that the matcher covers the routes
};
