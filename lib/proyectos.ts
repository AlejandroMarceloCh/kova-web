import type { ComponentType } from "react";
import WasiViz from "@/components/viz/WasiViz";
import InmobaViz from "@/components/viz/InmobaViz";
import ErpViz from "@/components/viz/ErpViz";
import ChammyViz from "@/components/viz/ChammyViz";
import GeoAssayViz from "@/components/viz/GeoAssayViz";
import AmelieViz from "@/components/viz/AmelieViz";

export type Detalle = {
  contexto: string;
  construccion: string;
  resultado: string;
  stack: string;
};

export type Proyecto = {
  tipo: string;
  title: string;
  desc: string;
  Viz: ComponentType;
  detalle: Detalle;
};

export type Grupo = {
  tipo: string;
  items: Omit<Proyecto, "tipo">[];
};

export const grupos: Grupo[] = [
  {
    tipo: "Machine Learning & Datos",
    items: [
      {
        title: "Motor de precios inmobiliarios",
        desc: "Pipeline completo: scraping de avisos reales, dos modelos por mercado, API con explicabilidad por zona. El precio que predice no es un promedio — es específico y trazable.",
        Viz: WasiViz,
        detalle: {
          contexto:
            "Tasar un inmueble en Lima dependía del criterio de cada agente. Sin un precio de referencia objetivo, cada operación arrancaba en una discusión sobre cuánto vale realmente.",
          construccion:
            "Recolectamos avisos reales del mercado, los limpiamos y geolocalizamos. Entrenamos dos modelos separados —uno para venta y otro para alquiler, porque se comportan distinto— y los servimos detrás de una API que devuelve el precio junto con su explicación por zona y atributos. No una caja negra.",
          resultado:
            "El precio que entrega es específico para ese inmueble y trazable: se puede ver por qué da lo que da, atributo por atributo. Deja de ser una opinión y pasa a ser un dato defendible.",
          stack: "Python · scraping · gradient boosting · API REST",
        },
      },
    ],
  },
  {
    tipo: "Plataformas a medida",
    items: [
      {
        title: "Plataforma de inversión inmobiliaria",
        desc: "Motor de recomendación que cruza perfil del inversionista con señales de mercado. Stack completo: datos, modelo y producto. Ganadora del fondo de innovación del CONCYTEC.",
        Viz: InmobaViz,
        detalle: {
          contexto:
            "Un inversionista sin tiempo para analizar decenas de proyectos uno por uno necesitaba que algo filtrara por él y le mostrara primero lo que de verdad encaja con su perfil.",
          construccion:
            "Motor de recomendación que cruza el perfil del inversionista con señales de mercado y rankea las oportunidades por afinidad. Construimos el stack completo: la captura de datos, el modelo y el producto sobre el que el usuario decide.",
          resultado:
            "Ganó el fondo de innovación del CONCYTEC y llegó a producción con usuarios reales. No quedó en prototipo.",
          stack: "Python · sistemas de recomendación · web app",
        },
      },
      {
        title: "Sistema de reservas para hospedaje",
        desc: "Calendario de disponibilidad, confirmación automática y reserva directa. Infraestructura digital construida desde cero para un negocio que operaba solo por teléfono.",
        Viz: AmelieViz,
        detalle: {
          contexto:
            "Un hospedaje fuera de Lima tomaba todas sus reservas por teléfono y WhatsApp. Sin disponibilidad en línea, perdía al huésped que decidía de noche o el fin de semana, cuando no había nadie para contestar.",
          construccion:
            "Web propia con calendario de disponibilidad en tiempo real, confirmación automática y reserva directa, sin intermediario que se quede con una comisión por cada noche.",
          resultado:
            "Pasó de operar solo por teléfono a recibir reservas a cualquier hora, con la disponibilidad siempre al día y sin doble booking.",
          stack: "Next.js · calendario de disponibilidad · reservas",
        },
      },
    ],
  },
  {
    tipo: "ERP & Operaciones",
    items: [
      {
        title: "ERP de costos industriales",
        desc: "Visibilidad de costo por SKU, trazabilidad de insumos y simulador de escenarios. Cierre mensual automatizado. La gerencia ve el margen real de cada producto — no el estimado.",
        Viz: ErpViz,
        detalle: {
          contexto:
            "La gerencia calculaba el costo de cada producto en hojas de cálculo frágiles que se rompían con cada cambio. El margen real por artículo era una estimación, no un dato en el que apoyar una decisión de precio.",
          construccion:
            "Módulo de costos sobre el ERP: costo por SKU calculado desde la receta, trazabilidad de cada insumo, simulador de escenarios para mover precios o costos y ver el impacto, y cierre mensual automatizado.",
          resultado:
            "La gerencia ve el margen real de cada producto al cerrar el mes —no semanas después y no estimado a ojo— y puede simular un cambio de precio antes de aplicarlo.",
          stack: "ERP · costeo por receta · simulación de escenarios",
        },
      },
    ],
  },
  {
    tipo: "Optimización",
    items: [
      {
        title: "Asignación de personal por pronóstico",
        desc: "El sistema lee la demanda proyectada y genera el roster de turnos respetando restricciones de roles y disponibilidad. Cero iteraciones manuales.",
        Viz: ChammyViz,
        detalle: {
          contexto:
            "Armar los turnos de la semana era un Excel manual que alguien rehacía entero cada vez que cambiaba la demanda o faltaba alguien. Lento, propenso a errores y difícil de justificar.",
          construccion:
            "El sistema lee la demanda proyectada y genera el roster respetando las restricciones reales: roles, disponibilidad y carga máxima por persona. El encargado ajusta sobre una propuesta, ya no construye desde una hoja en blanco.",
          resultado:
            "Lo que tomaba horas de Excel cada semana se resuelve en una corrida, y el turno respeta todas las restricciones por construcción.",
          stack: "pronóstico de demanda · optimización de turnos",
        },
      },
      {
        title: "Scheduler con solver de restricciones",
        desc: "Problema de scheduling con restricciones duras de capacidad, equipo y secuencia. Implementado con búsqueda tabú en Julia. Iguala el óptimo de referencia y lo mejora en la instancia más grande.",
        Viz: GeoAssayViz,
        detalle: {
          contexto:
            "Un laboratorio geoquímico procesa órdenes de ensayo que compiten por las mismas estaciones y equipos. El orden en que entran define cuánto tarda en cerrar todo el lote, y ese orden se armaba a mano.",
          construccion:
            "Solver de scheduling con búsqueda tabú en Julia, sin dependencias externas. La búsqueda mueve una permutación de prioridad y un decodificador voraz la traduce a un cronograma factible por construcción —respeta precedencia, capacidad y lotes—. Es determinista: mismo input, mismo resultado.",
          resultado:
            "Iguala el óptimo de referencia en 9 de 10 instancias y lo mejora en la más grande (de 774 a 770), con cero violaciones de restricciones en las diez. Reemplaza el armado manual por un plan reproducible.",
          stack: "Julia (solo stdlib) · búsqueda tabú · decodificador ASAP",
        },
      },
    ],
  },
];
