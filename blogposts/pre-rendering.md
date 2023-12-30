---
title: "Dos manera de pre-renderizado"
date: "2023-12-25"
---

Next.js tiene dos manera de pre-renderizacion: **Static Generation** y **Server-side Rendering**. La diferencia entre ellos es **Cuando** se genera el HTML para la pagina.

- **Static Generation** es el método de pre-renderizado que general el HTML al momento de la compilación. Luego, el HTML renderizado previamente se reutiliza en cada solicitud.
- **Server-side Rendering** es el método de pre-renderizado que general el HTML en cada solicitud.

Importante, Next.js deja que **selecciones** el método de pre-renderización para cada página. Cuando creas una aplicación "hibrida" en Next.js, se utiliza Static Generation para la mayor parte de las páginas y Server-side Rendering para las otras.
