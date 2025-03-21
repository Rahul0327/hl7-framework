import NavBar from '@/components/NavBar';
import './globals.css';

export const metadata = {
  title: 'HL7 Framework Master Data Model',
  description: 'A comprehensive approach to healthcare interoperability',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
