import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Servicios from "@/components/Servicios";
import Proceso from "@/components/Proceso";
import Equipo from "@/components/Equipo";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="contenido-principal">
        <Hero />
        <Portfolio />
        <Servicios />
        <Proceso />
        <Equipo />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
