/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'api.tezz.az',
            port: '',
            pathname: '/storage/**',
        }, ],
    },
    async redirects() {
        return [
            // YENİ VE HATASIZ KURALLAR
            // Kural 1: 'az' ile başlayan ama tam olarak 'az' olmayan ilk segmenti düzeltir.
            // Örnek: /az123/haqqimizda -> /az/haqqimizda
            // Örnek: /aztest -> /az
            {
                // Sadece /azabc veya /az123 gibi yolları yakalar, /az/ veya /az'ı yakalamaz.
                source: '/:lang(az[^/?]+)/:path*',
                destination: '/az/:path*',
                permanent: true,
            },

            // Kural 2: 'en' ile başlayan ama tam olarak 'en' olmayan ilk segmenti düzeltir.
            {
                source: '/:lang(en[^/?]+)/:path*',
                destination: '/en/:path*',
                permanent: true,
            },

            // Kural 3: 'ru' ile başlayan ama tam olarak 'ru' olmayan ilk segmenti düzeltir.
            {
                source: '/:lang(ru[^/?]+)/:path*',
                destination: '/ru/:path*',
                permanent: true,
            },

            // ANA SAYFA YÖNLENDİRMESİ (bu en sonda kalmalı)
            {
                source: '/',
                destination: '/az',
                permanent: true,
            },
        ];
    },
    reactStrictMode: false,
};

export default nextConfig;