/* CONFIGURACIÓN DEL TABLERO
   Pegá acá los links de las 3 pestañas publicadas como CSV
   (Google Sheets → Archivo → Compartir → Publicar en la web → elegir la pestaña → "Valores separados por comas (.csv)").
   Mientras algún link esté vacío, el tablero muestra los datos de ejemplo. */
window.TABLERO_CONFIG = {
  titulo: 'Tablero de Comando',

  csv: {
    diario: '',     // pestaña DIARIO
    balance: '',    // pestaña BALANCE
    objetivos: ''   // pestaña OBJETIVOS
  },

  // Cada cuántos minutos se vuelven a leer los datos con la página abierta.
  refrescoMinutos: 5
};
