/*
 * Google Analytics 4 — kai Furniture
 *
 * Para activarlo:
 *   1. Entra a https://analytics.google.com y crea una propiedad para el sitio.
 *   2. Copia el "ID de medición" (empieza con "G-") desde Administrar > Flujos de datos.
 *   3. Pégalo en MEASUREMENT_ID aquí abajo.
 *
 * Mientras el ID siga siendo el de ejemplo, este archivo no carga nada ni envía datos.
 */
(function () {
  var MEASUREMENT_ID = 'G-QQLZ071CKB';

  if (MEASUREMENT_ID.indexOf('XXXX') !== -1) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', MEASUREMENT_ID);

  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(MEASUREMENT_ID);
  document.head.appendChild(script);
})();
