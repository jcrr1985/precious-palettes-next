import "./global.css";
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
  keywords: "next,javascript,nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
