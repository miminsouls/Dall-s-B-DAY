# M & D — Birthday Album (base)

Esta base es HTML/CSS/JavaScript sin librerías externas. Abre `index.html` directamente en Chrome o con Live Server de VS Code.

## Qué funciona
- Broche dorado interactivo para abrir la portada.
- Cinco dobles páginas de scrapbook.
- Esquinas inferiores clicables para avanzar y retroceder.
- Sobres desplegables con cartas.
- Diseño adaptable a móvil.
- Navegación opcional con flechas del teclado.

## Qué falta
- Sustituir placeholders por fotografías reales.
- Animación 3D de pasar hojas (las esquinas funcionan, pero aún no doblan físicamente el papel).
- Ajustes artísticos de portada y páginas con materiales e ilustraciones reales.
- Música opcional.

## Fotografías
Puedes crear carpetas en `images/` (por ejemplo `images/01-morphine-bebe/`) y luego colocar una imagen en el HTML reemplazando el contenido de un `.polaroid` por `<img src="images/01-morphine-bebe/foto-01.jpg" alt="Morphine de bebé">`.

## Integración
No reemplaces directamente archivos existentes de Antigravity sin revisar primero su estructura. Si usa React/Vite, pide al agente que integre la maqueta dentro de los componentes existentes, sin borrar código funcional.
