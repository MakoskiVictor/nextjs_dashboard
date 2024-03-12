// BIBLIOTECA DE NEXTJS QUE TE PERMITE IMPORTAR FUENTES DE GOOGLE FONTS
import { Montserrat } from "next/font/google"
// CREO LA CONST PARA EXPORTAR AL LAYOUT
export const montserrat = Montserrat({ subsets: ["latin"], weight: ["100","200","300","400","500","600","700"] })