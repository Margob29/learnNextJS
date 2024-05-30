import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* antialiased c'est une classe Tailwind pour rendre le text plus smooth */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
