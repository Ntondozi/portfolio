import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio de Justice NTONDOZI - Développeur Mobile et Web Full Stack",
  description:
    "Bienvenue sur le portfolio de Justice NTONDOZI. Je suis développeur mobile Flutter et web, passionné par la création d'applications modernes et performantes. Je suis curieux, autodidacte et toujours prêt à relever de nouveaux défis. Ouvert à toute opportunité correspondant à mes compétences et centres d'intérêt.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {/* Conteneur pour les notifications Toast */}
        <ToastContainer />
        
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          {/* Barre de navigation */}
          <Navbar />
          
          {/* Contenu principal */}
          {children}
          
          {/* Bouton pour remonter en haut de page */}
          <ScrollToTop />
        </main>

        {/* Pied de page */}
        <Footer />

        {/* Google Tag Manager */}
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
      </body>
    </html>
  );
}
