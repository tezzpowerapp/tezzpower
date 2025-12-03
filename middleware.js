    import {
        NextResponse
    } from "next/server";

    const defaultLocale = "az";
    const locales = ["az", "en"]; // Kullandığınız diller

    export function middleware(request) {
        const {
            pathname
        } = request.nextUrl;

        // 1. Eğer path tam olarak "/az" ise veya "/az/" ile başlıyorsa, bunu kaldırıp redirect et.
        // Örnek: /az/hizmetler -> /hizmetler
        if (pathname === `/${defaultLocale}` || pathname.startsWith(`/${defaultLocale}/`)) {
            // /az kısmını kaldır
            const newPath = pathname.replace(`/${defaultLocale}`, "");
            // Eğer geriye boş string kalırsa (sadece /az ise) '/' yap, yoksa yolu koru.
            return NextResponse.redirect(new URL(newPath || "/", request.url));
        }

        // 2. Eğer path bilinen bir dil ile başlamıyorsa (ve api veya static dosya değilse)
        // Bunu varsayılan dil (az) klasörüne REWRITE et (URL değişmez, içerik gelir).
        const pathnameIsMissingLocale = locales.every(
            (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
        );

        if (pathnameIsMissingLocale) {
            return NextResponse.rewrite(
                new URL(`/${defaultLocale}${pathname}`, request.url)
            );
        }
    }

    export const config = {
        matcher: [
            // _next, api, static dosyalar, resimler hariç tüm yolları yakala
            '/((?!api|_next/static|_next/image|favicon.ico|.*\\.svg|.*\\.png|.*\\.jpg).*)',
        ],
    };