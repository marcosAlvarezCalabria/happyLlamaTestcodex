# Fondo oscuro durante la animación — 12 de noviembre de 2026

## Síntoma

En algunos móviles, al tocar la llama el paisaje seleccionado quedaba cubierto por un fondo oscuro durante la animación. La imagen estática anterior al toque seguía mostrando el paisaje correctamente.

## Evidencia y causa

La revisión `52dc8b5` utilizaba un vídeo VP9 WebM con canal alfa para el movimiento. El archivo declaraba transparencia, pero la reproducción del canal alfa no fue consistente en el dispositivo donde se observó el fallo. La versión estática WebP no presentaba el problema.

## Corrección

La animación se convirtió a WebP animado con transparencia y se mantuvo la imagen WebP estática como estado inicial. El código cambia entre ambos recursos al tocar la llama y vuelve al estado inicial al terminar.

## Comprobaciones

- El fondo de Machu Picchu permanece visible durante el movimiento en una prueba móvil de 390 × 844 px.
- La imagen animada se carga y el estado `is-walking` se activa al tocar la llama.
- `astro check`, `astro build` y el detector de interfaz terminan sin errores.

## Prevención

Para animaciones transparentes esenciales en móvil, validar el formato final sobre el fondo real del producto y conservar una alternativa estática visible si el recurso animado no puede cargarse.
