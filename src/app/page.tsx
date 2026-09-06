import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Games from "@/components/Games";
import Studio from "@/components/Studio";
import Devlog from "@/components/Devlog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Games />
        <Studio />
        <Devlog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
