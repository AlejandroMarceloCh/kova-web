import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Proceso from "@/components/Proceso";
import Servicios from "@/components/Servicios";
import Garantias from "@/components/Garantias";
import Portfolio from "@/components/Portfolio";
import Equipo from "@/components/Equipo";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="contenido-principal">
        <Hero />
        <Proceso />
        <Servicios />
        <Garantias />
        <Portfolio />
        <Equipo />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
