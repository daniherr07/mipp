
import "./globals.css";

export const metadata = {
  title: "Feliz Convivencia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
