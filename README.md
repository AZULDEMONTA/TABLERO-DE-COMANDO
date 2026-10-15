# Tablero de Comando

Tablero de control de gestión que lee los datos de un Google Sheet y se publica en Vercel con un link de libre acceso.
Es un sitio estático: no necesita instalar nada ni compilar.

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | Página del tablero |
| `config.js` | **El único archivo que hay que editar:** los links de las 3 pestañas del Sheet |
| `styles.css` | Diseño |
| `js/calc.js` | Lectura de los CSV y cálculos (acumulados, proyección, balance, ácido) |
| `js/app.js` | Dibuja la pantalla y refresca los datos cada 5 minutos |
| `datos-ejemplo/` | Datos de prueba que se muestran mientras `config.js` no tenga los links |

## 1. Preparar el Google Sheet

1. Subí `Tablero_de_Comando_carga.xlsx` a Google Drive y abrilo con Google Sheets (*Archivo → Guardar como Hojas de cálculo de Google*).
2. Reemplazá las filas de ejemplo por los datos reales.
3. Publicá cada pestaña: *Archivo → Compartir → Publicar en la web*.
   - En el primer desplegable elegí **DIARIO**, en el segundo **Valores separados por comas (.csv)** y tocá *Publicar*. Copiá el link.
   - Repetí para **BALANCE** y **OBJETIVOS**.
   - Dejá tildado "Volver a publicar automáticamente cuando se realicen cambios".
4. Pegá los 3 links en `config.js`:

```js
csv: {
  diario:    'https://docs.google.com/spreadsheets/d/e/.../pub?gid=...&single=true&output=csv',
  balance:   'https://docs.google.com/spreadsheets/d/e/.../pub?gid=...&single=true&output=csv',
  objetivos: 'https://docs.google.com/spreadsheets/d/e/.../pub?gid=...&single=true&output=csv'
}
```

> Importante: cualquiera que tenga esos links (o el del tablero) puede ver los números. El Sheet en sí sigue siendo editable solo por quien vos autorices.

## 2. Subir a GitHub

1. Creá un repositorio nuevo en GitHub (por ejemplo `tablero-de-comando`). Puede ser privado.
2. Subí todo el contenido de esta carpeta (*Add file → Upload files*, arrastrando los archivos y carpetas).

## 3. Publicar en Vercel

1. En Vercel: *Add New → Project* → importá el repositorio.
2. Framework Preset: **Other**. No hace falta Build Command ni Output Directory.
3. *Deploy*. El tablero queda en `https://<nombre>.vercel.app`.

Cada vez que edites algo en GitHub (por ejemplo `config.js`), Vercel vuelve a publicar solo.

## Cómo se actualizan los datos

- Se cargan en el Sheet; Google demora hasta ~5 minutos en reflejar los cambios en el CSV publicado.
- El tablero los vuelve a leer cada 5 minutos con la página abierta, o al tocar **Actualizar**.
- El selector de mes permite ver meses anteriores (los que tengan días en DIARIO).
- El balance muestra siempre el último corte cargado (la fecha más reciente en BALANCE).

## Reglas de carga

- Importes en pesos, sin $ (se aceptan con o sin puntos de miles).
- Fechas dd/mm/aaaa.
- No renombrar pestañas ni encabezados.
- Venta y Facturación del **día** (no acumuladas).
- En OBJETIVOS, una fila por mes (`2026-10`), con días hábiles. Si falta ese dato, se cuentan los días de lunes a viernes.

## Fórmulas

- **Proyección al cierre** = promedio diario facturado × días hábiles del mes
- **Necesario por día** = (objetivo − facturación acumulada) ÷ días hábiles restantes
- **Ritmo esperado** = objetivo × días hábiles transcurridos ÷ días hábiles del mes
- **Balance** = Total activo − Total pasivo
- **Balance ácido** = (Caja y bancos + Ch. en cartera + Cuentas a cobrar) − (Proveedores + Ch. propio pendiente)
