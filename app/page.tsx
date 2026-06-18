import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Trabajos from "@/components/Trabajos";
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
        <Trabajos />
        <Servicios />
        <Proceso />
        <Equipo />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
