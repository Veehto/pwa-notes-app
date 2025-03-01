# Notes PW-app (React) 📝

Este proyecto es una **aplicación web para administrar y gestionar notas**, desarrollada con **React y Vite**. Permite a los usuarios crear, editar y eliminar notas de manera sencilla. La aplicación está diseñada para ser rápida, responsiva y fácilmente actualmente es **Progressive Web App (PWA)**, pero futuras actualizaciones aplicaremos el uso de **LocalStorage**.

## **📌 Características**

- **Crear, editar y eliminar notas** en una interfaz amigable.
- **Organización de notas** en un listado dinámico.
- **Diseño responsivo** para dispositivos móviles y escritorio.
- **Código modular y escalable** con componentes reutilizables.
- **Preparada para integrar localStorage, imágenes y geolocalización** (próxima implementación).


## **📁 Estructura del Proyecto**

```
├── dist
├── nodemodules
├── public/
│   ├── icons/
│   ├── manifest.json
│   ├── sw.js
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── NoteCard.jsx
│   │   ├── NoteForm.jsx
│   │   └── NotesList.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.jsx
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```


## **🚀 Instalación y Ejecución (Entorno desarrollador)**

Para ejecutar la aplicación localmente, sigue estos pasos:

1. Clonar el Repositorio

```bash
git clone https://github.com/Veehto/pwa-notes-app
cd TU_CARPETA
```

2. Instalar Dependencias

```bash
npm install
```

3. Ejecutar la Aplicación

```bash
npm run dev
```

Luego, abre tu navegador y accede a **`http://localhost:5173`**.


## **🚀 Montar Servidor para build (Distribución)**
1. Ejecutar comando para crear build

```bash
npm run build
```

2. Instalar serve npm package

```bash
npm install -g serve
```

3. Levantar servidor de distribución

```bash
serve -s dist
```

Luego, abre tu navegador y accede a **`http://localhost:3000`**.


## **🛠️ Funcionalidades de los Componentes**
- `NoteForm.jsx` - Formulario para Agregar y Editar Notas
  - Este componente permite a los usuarios ingresar nuevas notas y editarlas.
- `NoteCard.jsx` - Componente para Mostrar Notas
  - Cada nota se renderiza dentro de este componente.
- `NotesList.jsx` - Listado de Notas
  - Administra la lista de notas dinámicamente.


## Autor
- [Victor CS](https://github.com/Veehto)


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
