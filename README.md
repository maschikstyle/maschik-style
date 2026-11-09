# Maschik Style · Página de reservas

Página para que las clientas de Maschik Style reserven su hora desde el teléfono.
Eligen servicios, día y hora, y la solicitud llega por WhatsApp al +56 9 8271 5329.

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La página |
| `config.js` | **Datos del salón: servicios, precios, horario, dirección.** Es el único archivo que hay que editar normalmente |
| `logo.jpg`, `icon-*.png` | Logo e íconos para "Agregar a pantalla de inicio" |
| `manifest.webmanifest`, `sw.js` | Permiten instalarla como app en el teléfono |

## Publicar en GitHub Pages (gratis)

1. Entra a https://github.com e inicia sesión (o crea una cuenta).
2. Arriba a la derecha, toca **+** → **New repository**.
   - Nombre: `maschik-style`
   - Marca **Public**
   - Toca **Create repository**.
3. En la página del repositorio, toca **uploading an existing file**.
4. Arrastra **todos** los archivos de esta carpeta (incluido `.nojekyll`) y toca **Commit changes**.
5. Ve a **Settings** → **Pages**.
   - En **Source** elige **Deploy from a branch**.
   - En **Branch** elige **main** y la carpeta **/ (root)** → **Save**.
6. Espera 1 o 2 minutos y recarga. Aparecerá el link, por ejemplo:
   `https://TU-USUARIO.github.io/maschik-style/`

Ese link es el que se pone en la bio de Instagram, en WhatsApp Business y en los grupos de Facebook.

## Cambiar precios, servicios u horario

1. En GitHub, abre `config.js` y toca el lápiz (**Edit**).
2. Cambia lo necesario y toca **Commit changes**.
3. Abre `sw.js`, cambia `ms-v1` por `ms-v2` (y así cada vez) y guarda. Esto hace que los teléfonos descarguen la versión nueva.

**No cambies el `id` de los servicios** (s1, s2, …): el panel del salón los usa para importar las reservas.

## Cómo llega la reserva al panel

La clienta envía un mensaje de WhatsApp que termina en una línea como:
`Código: RSV|2026-11-12|10:30|s1,s7|Camila Soto|56987654321`

En el panel del salón: **Agenda → Importar de WhatsApp** → pegar el mensaje → revisar → **Guardar**.
