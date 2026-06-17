export type Bloque = {
  label: string;
  heading: string;
  paragraphs: string[];
  cards?: { title: string; text: string }[];
};

export type Caso = {
  slug: string;
  eyebrow: string[];
  title: string;
  lead: string;
  stats: { v: string; l: string }[];
  blocks: Bloque[];
  stack: string[];
  cta: { heading: string; text: string };
};

export const casos: Caso[] = [
  {
    slug: "wasi",
    eyebrow: ["PropTech", "Machine Learning", "Lima"],
    title: "Wasi",
    lead: "Un motor que predice el precio justo de alquiler y venta en Lima. Del dato crudo al producto en producción.",
    stats: [
      { v: "Lima", l: "Cobertura completa" },
      { v: "2", l: "Modelos especializados" },
      { v: "Venta + alquiler", l: "Mercados cubiertos" },
      { v: "E2E", l: "De datos a web" },
    ],
    blocks: [
      {
        label: "El problema",
        heading: "Nadie sabe cuánto vale un depa en Lima",
        paragraphs: [
          "Los portales muestran precios de publicación, no de mercado. Comprar, alquilar o invertir es decidir a ciegas.",
        ],
      },
      {
        label: "La solución",
        heading: "Scraping → modelo → producto",
        paragraphs: [
          "Pipeline completo: datos reales, dos modelos y una web que predice en tiempo real.",
        ],
        cards: [
          { title: "Datos", text: "Avisos reales de Lima. Limpieza, normalización y geocodificación por distrito." },
          { title: "Modelado", text: "Dos XGBoost especializados. Validación espacial por distrito, sin leakage." },
          { title: "API", text: "FastAPI con SHAP: cada predicción explica su porqué." },
          { title: "Frontend", text: "React + mapa interactivo. Compara zonas y precios." },
        ],
      },
    ],
    stack: ["XGBoost", "FastAPI", "React", "SHAP", "Leaflet", "Pandas", "PostgreSQL", "Docker", "BeautifulSoup"],
    cta: {
      heading: "¿Datos sin explotar?",
      text: "Los convertimos en decisiones.",
    },
  },
  {
    slug: "inmoba",
    eyebrow: ["PropTech", "Startup Perú 11G"],
    title: "Inmoba",
    lead: "Decisiones inmobiliarias con datos. Ganadora del fondo Startup Perú 11G.",
    stats: [
      { v: "11G", l: "Startup Perú · CONCYTEC" },
      { v: "CTO", l: "Desde el día 1" },
      { v: "11 meses", l: "Nov 2024 – Sep 2025" },
    ],
    blocks: [
      {
        label: "Contexto",
        heading: "Invertir en ladrillo, a ciegas",
        paragraphs: [
          "En Perú no hay forma simple de saber si un precio o una zona valen la pena. Inmoba lo resuelve con datos.",
        ],
      },
      {
        label: "Rol técnico",
        heading: "CTO desde la fundación",
        paragraphs: [
          "Diego lideró todo: stack, datos, modelos ML y despliegue. En paralelo a su rol de ML Engineer en Yape.",
        ],
      },
      {
        label: "Reconocimiento",
        heading: "Startup Perú 11G",
        paragraphs: [
          "Ganadora del fondo de innovación del CONCYTEC, contra cientos de postulantes a nivel nacional.",
        ],
      },
    ],
    stack: ["Machine Learning", "Full-stack", "Data pipeline", "PropTech"],
    cta: {
      heading: "¿Construyes un producto de datos?",
      text: "Te llevamos del modelo al producto.",
    },
  },
  {
    slug: "erp",
    eyebrow: ["ERP", "Industria", "Lima"],
    title: "ERP & Costos",
    lead: "ERP y analítica para una industria en Lima. De hojas de cálculo a tiempo real.",
    stats: [
      { v: "0", l: "Hojas de cálculo manuales" },
      { v: "Real-time", l: "Dashboards de costos" },
      { v: "ERP", l: "Gestión centralizada" },
    ],
    blocks: [
      {
        label: "El problema",
        heading: "Todo en hojas de cálculo",
        paragraphs: [
          "Costos, inventario y proyecciones en Excel. Sin trazabilidad y con cierres de mes de días.",
        ],
      },
      {
        label: "La solución",
        heading: "ERP + analítica",
        paragraphs: [
          "Un solo flujo de datos, dashboards de KPIs y proyección de costos.",
        ],
        cards: [
          { title: "ERP centralizado", text: "Costos por SKU, inventario, producción y cierre automatizado." },
          { title: "Proyección", text: "Costos futuros con escenarios de insumos y volumen." },
          { title: "Dashboards", text: "Margen por producto, evolución de costos, desvío vs. presupuesto." },
          { title: "Auditoría", text: "Cada cambio registrado: usuario, fecha y motivo." },
        ],
      },
      {
        label: "Impacto",
        heading: "De días a minutos",
        paragraphs: [
          "El cierre mensual ahora es automático. La gerencia ve costos en vivo y simula escenarios al instante.",
        ],
      },
    ],
    stack: ["Python", "PostgreSQL", "FastAPI", "React", "Pandas", "Recharts", "Docker"],
    cta: {
      heading: "¿Sigues operando en Excel?",
      text: "Digitalizamos en semanas, no meses.",
    },
  },
];

export const getCaso = (slug: string) => casos.find((c) => c.slug === slug);
