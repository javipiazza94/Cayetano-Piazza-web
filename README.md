# Epic Tributes - Portal de Conciertos

Esta es la plataforma web desarrollada para la promoción de conciertos de grupos tributo (Meccano, El Señor de los Anillos, Harry Potter, etc.). 

El proyecto proporciona tanto un portal público para que los usuarios vean las bandas y compren entradas, como un panel de administración privado para gestionar la base de datos de grupos, salas y eventos.

## Características

- **Portal Público**:
  - **Inicio**: Página de presentación con diseño *premium* y animaciones.
  - **Grupos**: Lista de todas las bandas tributo promocionadas.
  - **Conciertos**: Calendario de próximos eventos con enlaces de compra.
  - **Contacto**: Formulario para que nuevas bandas o salas se pongan en contacto.
- **Panel del Promotor (`/dashboard`)**:
  - Interfaz privada (sin necesidad de código) para añadir nuevas Bandas.
  - Interfaz para registrar Salas de conciertos.
  - Sistema para programar nuevos Conciertos vinculando banda y sala.
- **Base de Datos Local**:
  - Utiliza SQLite (`promoter.db`), lo que significa que todos los datos se guardan en un único archivo dentro de este mismo proyecto, facilitando enormemente las copias de seguridad.

## Tecnologías Utilizadas

- **Frontend & Backend**: Next.js (App Router)
- **Base de Datos**: SQLite (mediante `better-sqlite3`)
- **Estilos**: Vanilla CSS (`globals.css`) con diseño oscuro "Glassmorphism" y sin dependencias pesadas.

## Instrucciones de Instalación y Uso

Para ejecutar este proyecto en tu ordenador, sigue estos pasos:

### 1. Requisitos Previos
Asegúrate de tener instalado [Node.js](https://nodejs.org/) en tu ordenador.

### 2. Abrir el proyecto
Abre una terminal (Símbolo del sistema o PowerShell) y navega hasta la carpeta del proyecto:
```bash
cd "c:\Users\javip\Documents\Python Scripts\promoter-web"
```

### 3. Iniciar el servidor de desarrollo
Ejecuta el siguiente comando para encender la página web:
```bash
npm run dev
```

### 4. Ver la página
Una vez que el comando anterior esté funcionando, abre tu navegador web (Chrome, Firefox, Edge, etc.) y visita:
- **Web principal:** [http://localhost:3000](http://localhost:3000)
- **Panel de control:** [http://localhost:3000/dashboard](http://localhost:3000/dashboard)

*Nota: La primera vez que entres a la web, el archivo de la base de datos (`promoter.db`) se creará automáticamente junto con todas sus tablas.*
