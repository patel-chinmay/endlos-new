import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Toaster } from "react-hot-toast";
import SocialMedia from "../components/social-media/Social-media";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />

      {/* <SocialMedia /> */}
      <WhatsAppButton />

      <Toaster position="top-center" reverseOrder={true} />

      <Component {...pageProps} />
      <Footer />
    </>
  );
}
