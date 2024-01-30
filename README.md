# claro-sports-frontend

Proyecto para prueba tecnica de claro-shop

### Datos relevantes:

- Se ocupa un custom server de express para poder simular un caso real del
  punto 3 Contenidos de videos que se menciona en las instrucciones de la prueba
- Ocupe styled-components para los estilos de la aplicacion ya que me resultan
  flexibles
- El contador regresivo esta implementado con rxjs
- La gestion de estado ocupe el mismo estado de react ya que no encontre necesario
  utilizar redux.
- En el punto 3 de las instrucciones menciona que "Los videos deben reproducirse dentro de la página, preferiblemente usando un reproductor de video que admita incrustación."
  y la imagen del diseño no me cuadraban mucho. Implemente un tipo poster para los videos, cuando se da click, embebi los videos de youtube (los 4 videos de la pagina son los mismos)
- Version de node v18.17.0

### Instalamos las dependencias necesarias

```bash
yarn install
```

Ó

```bash
npm install2
```

### corremos el proyecto

```bash
yarn dev
```

Ó

```bash
npm run dev
```

### Abre [http://localhost](http://localhost) para ver el resultado
