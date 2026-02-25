# Glory Nights — Portal de Conciertos Tributo

Plataforma web premium orientada a la promoción y venta de entradas para conciertos tributo a la luz de las velas. Cuenta con un diseño elegante estilo *glassmorphism*, páginas modulares dinámicas y un Panel de Administración (Dashboard) integrado.

## 🚀 Características Principales

- **Diseño Premium y Responsivo:** Interfaz moderna, animaciones suaves y tipografía cuidada (Playfair Display & Montserrat).
- **Panel de Administración (Dashboard):** Interfaz privada protegida por contraseña para gestionar (CRUD) bandas, salas, conciertos y mensajes de contacto.
- **Base de Datos Híbrida:** Utiliza `@libsql/client` para funcionar con un archivo local (`.db`) durante el desarrollo y con la nube de **Turso** en producción.
- **Notificaciones por Email:** Integración con **Resend** para avisar al promotor al instante cuando un usuario rellena el formulario de contacto.
- **Protección Anti-Spam:** El formulario de contacto incluye un sistema "*Honeypot*" invisible que bloquea bots sin necesidad de molestos CAPTCHAs.
- **Secciones Dinámicas:** 
  - Cartelera con separación automática entre conciertos futuros y pasados.
  - Página modular "Sobre Nosotros" con soporte para vídeo, equipo y valores.
  - Páginas dedicadas a sedes y artistas.
- **Optimizado (SEO & Rendimiento):** Navegación ultra-rápida (gracias a Next.js `<Link>`), metadatos específicos en cada página para Google, y analíticas integradas con Vercel Analytics.

---

## 🛠️ Stack Tecnológico

- **Frontend:** Next.js 16 (React 19), Tailwind CSS 4, CSS Modules.
- **Backend:** Next.js API Routes (Serverless Functions).
- **Base de Datos:** LibSQL / SQLite (Turso).
- **Emails:** Resend API.
- **Despliegue recomendado:** Vercel.

---

## 💻 Desarrollo Local

Sigue estos pasos para arrancar el proyecto en tu ordenador:

### 1. Requisitos previos
- Tener instalado [Node.js](https://nodejs.org/).
- Tener instalado Git.

### 2. Instalación
Abre tu terminal, clona el repositorio y entra en la carpeta:
```bash
git clone https://github.com/javipiazza94/Cayetano-Piazza-web.git
cd Cayetano-Piazza-web
npm install
```

### 3. Variables de Entorno (Importante)
Para que el login y los emails funcionen en local, necesitas crear un archivo llamado `.env.local` en la raíz del proyecto y añadir las siguientes variables:

```env
# Contraseña para acceder a http://localhost:3000/dashboard
ADMIN_PASSWORD=TuContraseñaSecreta123

# (Opcional) Configuración de emails con Resend
RESEND_API_KEY=re_tucapikey_aqui
PROMOTER_EMAIL=tu_email_de_prueba@ejemplo.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```
*(Nota: Si no configuras las variables de Resend, los mensajes del formulario de contacto se guardarán en la base de datos igualmente, pero no se enviará el email de aviso).*

### 4. Arrancar el servidor
Ejecuta el siguiente comando:
```bash
npm run dev
```
- La web estará disponible en [http://localhost:3000](http://localhost:3000).
- La base de datos local (`promoter.db`) se creará automáticamente la primera vez que la aplicación intente leer o escribir datos.

---

## ☁️ Despliegue en Producción (Vercel + Turso)

Dado que Vercel es un entorno *Serverless* (sin estado), la base de datos local `.db` se borrará con cada ejecución. Para producción, **es obligatorio conectar la app a una base de datos en la nube**.

### Paso 1: Obtener la Base de Datos en Turso (Gratis)
1. Regístrate en [Turso](https://turso.tech/).
2. Crea una nueva base de datos (ej. `glory-nights-db`).
3. Copia la URL de la base de datos (`libsql://...`).
4. Haz clic en **"Generate Token"** y cópialo.

### Paso 2: Desplegar en Vercel
1. Entra en [Vercel](https://vercel.com/) y dale a **"Add New"** > **"Project"**.
2. Importa tu repositorio de GitHub (`Cayetano-Piazza-web`).
3. **ANTES de darle a Deploy**, abre la sección **"Environment Variables"** y añade:
   - `TURSO_DATABASE_URL`: *(La URL de tu BD Turso)*
   - `TURSO_AUTH_TOKEN`: *(El token de Turso)*
   - `ADMIN_PASSWORD`: *(Contraseña segura para tu Dashboard)*
   - `RESEND_API_KEY`: *(Tu API Key de Resend)*
   - `PROMOTER_EMAIL`: *(El email donde quieres recibir los mensajes de contacto)*
   - `NEXT_PUBLIC_SITE_URL`: `https://tu-dominio-final.com`
4. Dale a **Deploy**. En un par de minutos, tu web estará subida, conectada a la nube y 100% protegida. 🚀
