import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kova",
    short_name: "Kova",
    description:
      "Sistemas de datos, ML e IA en producción para equipos que necesitan ejecutar, no presentar.",
    start_url: "/",
    display: "standalone",
    background_color: "#14100E",
    theme_color: "#14100E",
    lang: "es-PE",
  };
}
