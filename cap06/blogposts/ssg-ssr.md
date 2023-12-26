---
title: "Cuándo utilizar Static Generation vs Server-side Rendering"
date: "2023-12-25"
---

Se recomiendo utilizar **Static Generation** (con y sin información) cuando sea posible, porque la página que desarrollas puede compilarse una vez y ser servida por CDN,
haciendolo mucho más rápido que teniendo un servidor renderizando la página en cada solicitud.

Puedes utilizar Static Generation para varios tipos de páginas, incluyendo:

- Sitios de mercadeo
- Posteo de Blogs
- Listado de productos de E-commerce
- Ayuda y Documentación

Debes preguntarte: "¿Puedo pre-rednerizar esta página antes que el usario haga la solicitud?" Si la respueta es si, entonces deberías escoger Static Generation.

Por otro lado, Static Generation no es una buena idea si no puedes pre-renderizar la pagina antes que el usuario haga la solicitud. Quizas tu sitio o página tenga que mostrar de manera frecuente información actualizada, y el contenido de la página cambie en cada solicitud.

En ese caso, puedes utilizar **Server-side Rendering**. Será lento, pero el pre-renderidzado de la pagina siempre estará al día. O puedes omitir el pre-renderizado y usar cliente-side de Javascript para completar la información.
