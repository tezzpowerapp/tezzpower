import {
    NextResponse
} from "next/server";

const defaultLocale = "az";
const locales = ["az", "en"];

export function middleware(request) {
    const {
        pathname
    } = request.nextUrl;

    // --- DÜZELTME BAŞLANGICI ---
    // Eğer istek /qr ile başlıyorsa, middleware hiçbir şey yapmasın, direkt geçsin.
    if (pathname.startsWith("/qr")) {
        return NextResponse.next();
    }
    // --- DÜZELTME BİTİŞİ ---

    // 1. /az yolunu URL'den temizle (Redirect)
    if (pathname === `/${defaultLocale}` || pathname.startsWith(`/${defaultLocale}/`)) {
        const newPath = pathname.replace(`/${defaultLocale}`, "");
        return NextResponse.redirect(new URL(newPath || "/", request.url));
    }

    // 2. Eksik dil kodu varsa varsayılan dilden sun (Rewrite)
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
        // api, _next ve static dosyalar hariç her şeyi yakala
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\.svg|.*\\.png|.*\\.jpg).*)',
    ],
};