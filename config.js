/* CONFIGURACIÓN DEL TABLERO (la usan las dos páginas: semáforo y detalle).
   Normalmente no hace falta tocar nada: los datos y los umbrales del semáforo se cargan en las planillas. */
window.TABLERO_CONFIG = {
  titulo: 'Tablero de Comando',

  // Planilla de VentasTrack: ventas, objetivos, facturación y feriados.
  // Es la misma planilla publicada que usa VentasTrack; no hay que cargar nada dos veces.
  ventastrack: {
    pubId: '2PACX-1vSL2SaKcCwnmKdjPkw4wBNbYWfzNfHNaW1gX8Q7e-dbKALFjUd6gu3u8gffeRU-cQ',
    gid: { ventas: '496653887', objetivos: '852661634', facturacion: '571985744', feriados: '260722128' }
  },

  // Planilla del tablero: situación financiera (se actualiza una vez por semana).
  tablero: {
    balance: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRz5nifBc-NTsGJmckvLZI1VwPZOgQSjM-FFCsXwpKpozHccIAsEqSIjIwNn4GDcxAIwTGn6Cil3K65/pub?gid=285403348&single=true&output=csv',
    vencimientos: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRz5nifBc-NTsGJmckvLZI1VwPZOgQSjM-FFCsXwpKpozHccIAsEqSIjIwNn4GDcxAIwTGn6Cil3K65/pub?gid=332075885&single=true&output=csv',
    // Opcional: pestaña OBJETIVOS con "Mes" y "Punto de equilibrio" si cambia mes a mes.
    equilibrio: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRz5nifBc-NTsGJmckvLZI1VwPZOgQSjM-FFCsXwpKpozHccIAsEqSIjIwNn4GDcxAIwTGn6Cil3K65/pub?gid=673734435&single=true&output=csv',
    // Pestaña UMBRALES: límites verde y rojo de cada indicador del semáforo.
    umbrales: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRz5nifBc-NTsGJmckvLZI1VwPZOgQSjM-FFCsXwpKpozHccIAsEqSIjIwNn4GDcxAIwTGn6Cil3K65/pub?gid=1560430586&single=true&output=csv'
  },

  // Punto de equilibrio mensual, si no figura en la planilla para ese mes.
  puntoEquilibrio: 260000000,

  // Inflación para ajustar el año anterior en la comparativa (30 = 30%).
  // También se puede cambiar desde el mismo gráfico; ese valor queda guardado en el navegador.
  inflacion: 30,

  // Cada cuántos minutos se vuelven a leer los datos con la página abierta.
  refrescoMinutos: 5
};
