import "@/app/ui/global.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

// EL LAYOUT ES EL MEJOR LUGAR PARA CARGAR ESTILOS GLOBALES
