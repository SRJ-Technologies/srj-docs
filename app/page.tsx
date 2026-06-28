import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/hero/Hero";

import Statistics from "@/components/sections/Statistics";
import Products from "@/components/sections/Products";
import WhySRJ from "@/components/sections/WhySRJ";
import DocumentationHub from "@/components/sections/DocumentationHub";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Statistics />
      <Products />
      <WhySRJ />
      <DocumentationHub />
      <Footer />
    </>
  );
}