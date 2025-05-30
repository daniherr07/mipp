
import "./globals.css";
import { Suspense} from 'react';

export const metadata = {
  title: "Feliz Convivencia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
         <Suspense fallback={<div>Cargando...</div>}> 
        {children}
        </Suspense>
      </body>
    </html>
  );
}
