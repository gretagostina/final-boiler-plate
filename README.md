# daily comments

DÍA UNO: Introducción al proyecto, configuraciones en la supabase, task app, etc y además hemos contado con la ayuda de Diego al finalizar la clase para crear y mostrar tareas.

DÍA DOS: He tenido conflictos para acceder a la app, me ha llevado un rato localizar el problema, hacer simulacros varios para verificar el funcionamiento y, al no poder resolverlo, he recurrido a la ayuda de Aleix para dar con una solución. Luego de eso he empezado con las rutas y posteriormente he completado la autenticación (sign out).
He terminado de definir la funcionalidad que añade tareas al supabase, pero todavía no se ve en la web.

DÍA TRES: En la reunión hemos hecho que las tareas se vean en la web, como planeaba hacerlo. Y luego hemos creado la función de actualizar y eliminar tareas. En la función de actualizar he añadido que también se pueda modificar la descripción, tomando como referencia el sistema que usa para modificar el título. También he añadido un condicional para ocultar/mostrar los campos de edición.

DÍA CUATRO: He buscado ideas para la task app y empecé a aplicar algunos atributos generales del sign in y sign up y además la he hecho responsive.

DÍA CINCO: Maquetación del create task y he mejorado el sign in y sign up.

DÍA SEIS: Intentar acabar de maquetar la sección del create task, los tasks item me cuestan un poco de estilizarlos. He creado el footer pero no es el definitivo, estoy valorando qué más detalles añadir.

DÍA SIETE: Hemos hecho el deployment en vercel. En mi caso hubieron algunos fallos para hacer el deployment y he contado con la ayuda de Jarko y Aleix para localizar los problemas. Una vez resuelto, he procedido a eliminar la extensión del correo en el home y he modificado el JS del create task y el task item.

DÍA OCHO:
He puesto el burger y lo hice responsive. He corregido un botón del taskitem. Y he corregido un input que no funcionaba correctamente al escribir textos largos. Y he aprovechado para añadir un texto descriptivo cuando se señala un botón en caso de que al usuario no le parezca lo suficientemente intuitivo.

```sh
PREVISIÓN DÍA NUEVE:
·agregar un forgot password
·pulir tareas JS
·colocar fechas actuales para el título del home.
·Terminar de diseñar la app.
```

-------0-------

# final-boiler-plate

This template should help get you started developing the final project running on Vue 3 with the composition API, Pinia as a state management tool, vue router, vite and lastly Supabase running on the backend.

This is meant as an advanced starter ready to plug in your supabase variables and run directly on a local server already connected to your Supabase instance.

You are given some functions to see how the supabase ecosystem works with Vue and more specifically, pinia as a state management tool.

You can add any CSS framework of your liking like tailwindCSS, Bootstrap, MaterialUI or many of the cool libaries that exist in the web.

## Important

This app is not setUp to be deployed to a production environment like vercel or netlify.

## Project Setup

```sh
npm install
```

## Set Up your Environment Variables from Supabase located at the root folder of the project

```sh
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

#### Once you have added your environment variables, head to your .gitIgnore file located at the root folder and uncomment the .env file naming to avoid sharing any private access keys to your database

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Good Music is always key!

```sh
Wu Tang Clan
A tribe called quest
Kendrick Lamar
Outkast
Dr. Dre
N.W.A
De La Soul
Ms. Lauryn Hill
J. Cole
Guts
Naughty By Nature
People under the stairs
Nujabes
NAS
KRS-One
The Pharcyde
Jurassic 5
Gang starr
Jay Z
Mobb Depp
Common
Lil Supa
```

[Hip Hop Spotify Playlist](https://open.spotify.com/playlist/4vKftyhS1gQovakehVcq1u?si=a7a119382dfe40da)
