import "@/app/ui/global.css"
import { montserrat } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* IMPORTO LA FONT y el antialiased es para mejorar el randerizado*/}
      <body className={`${montserrat.className} antialiased`} >{children}</body>
    </html>
  );
}

// EL LAYOUT ES EL MEJOR LUGAR PARA CARGAR ESTILOS GLOBALES
