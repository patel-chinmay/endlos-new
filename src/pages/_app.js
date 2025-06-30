import { useRouter } from "next/router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Toaster } from "react-hot-toast";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Check if the current route matches the blog detail page
  // const isBlogDetailsPage = router.pathname.startsWith(
  // "/company/blog-list/blog-details"
  // );

  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <ToastContainer autoClose={5000} position="top-right" />;
      <Toaster position="top-center" reverseOrder={true} />
      <Component {...pageProps} />
      {/* {!isBlogDetailsPage && <Footer />} */}
      <Footer />
    </>
  );
}
