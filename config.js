/*
  CONFIGURACIÓN DE LA PÁGINA DE RESERVAS — Maschik Style
  ------------------------------------------------------
  Aquí se cambian los datos sin tocar el resto de la página.
  - Precios en pesos chilenos, sin puntos (15000 = $15.000).
  - "duracion" en minutos: se usa para calcular qué horas quedan disponibles.
  - IMPORTANTE: no cambies el "id" de los servicios. El panel del salón
    los usa para importar las reservas que llegan por WhatsApp.
  - Precio 0 = se muestra "Consultar precio".
  - Horario: 0 = domingo, 1 = lunes ... 6 = sábado. null = cerrado.
*/
window.CONFIG = {
  nombre: "Maschik Style",
  estilista: "Hodalis Chacón",
  frase: "Peluquería y estilismo",
  whatsapp: "56982715329",
  instagram: "maschik_style",
  direccion: "",              // ej: "Calle 123, Puerto Montt" (vacío = no se muestra)
  preciosDesde: true,         // muestra "desde $15.000"
  intervalo: 30,              // cada cuántos minutos se ofrece una hora
  diasVisibles: 35,           // cuántos días hacia adelante se pueden reservar
  horario: {                 // por ahora: solo fines de semana
    0: { abre: "10:00", cierra: "18:00" },
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: { abre: "10:00", cierra: "18:00" }
  },
  servicios: [
    { id: "s1", nombre: "Corte de dama",                      precio: 15000, duracion: 45,  cat: "Corte" },
    { id: "s2", nombre: "Corte + secado",                     precio: 20000, duracion: 60,  cat: "Corte" },
    { id: "s4", nombre: "Tinte",                              precio: 30000, duracion: 120, cat: "Color" },
    { id: "s6", nombre: "Mechas",                             precio: 50000, duracion: 180, cat: "Color" },
    { id: "s7", nombre: "Tratamiento de hidratación capilar", precio: 25000, duracion: 60,  cat: "Tratamiento" },
    { id: "s8", nombre: "Alisado permanente",                 precio: 50000, duracion: 180, cat: "Tratamiento" },
    { id: "d1", nombre: "Depilación de cejas",                precio: 0,     duracion: 15,  cat: "Depilación" },
    { id: "d2", nombre: "Depilación de bozo",                 precio: 0,     duracion: 15,  cat: "Depilación" },
    { id: "d3", nombre: "Depilación de mentón",               precio: 0,     duracion: 15,  cat: "Depilación" },
    { id: "d4", nombre: "Depilación de axilas",               precio: 0,     duracion: 20,  cat: "Depilación" }
  ]
};
