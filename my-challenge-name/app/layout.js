import "./globals.css";

export const metadata = {
  title: "Extensions Dashboard",
  description: "Frontend Mentor Challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}