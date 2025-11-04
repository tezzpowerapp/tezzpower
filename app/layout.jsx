import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <body>{children}</body>
    </html>
  );
}
