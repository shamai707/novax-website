import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css"; // מוודא ש-Tailwind נטען

// טעינת הפונט דרך המנגנון המובנה של Next.js
const rubik = Rubik({ 
  subsets: ["latin", "hebrew"],
  weight: ['300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: "NovaX | הספאמר הטוב בישראל",
  description: "קבלו גישה מיידית למערכת שליחת ה-SMS החזקה, המהירה והמתקדמת ביותר.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={rubik.className}>
        {children}
      </body>
    </html>
  );
}