import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Statistics from "@/components/sections/Statistics";
import Products from "@/components/sections/Products";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Statistics />
      <Products />
    </>
  );
}