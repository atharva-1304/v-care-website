import "./globals.css";

export const metadata = {
  title: "V-Care | Dealership operations, made clearer",
  description:
    "V-Care is a desktop application for organizing dealership customers, vehicles, service records, and follow-ups.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
