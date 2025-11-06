import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <head>
        <meta
          name="facebook-domain-verification"
          content="wlcs9tyal5d13gy1mcj6w19k292ptu"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
