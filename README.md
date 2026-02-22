# Epic Tributes - Portal de Conciertos

Esta plataforma web promociona conciertos tributo con un diseño premium y panel de administración incorporado. La aplicación acaba de ser adaptada para poder desplegarse de manera gratuita y eficiente en **Vercel** utilizando **Turso** como base de datos en la nube.

## Cómo Desplegar en Vercel y Turso (Gratis)

Vercel no permite bases de datos locales ya que su entorno Serverless borra archivos con cada ejecución. Por ello, el código usa ahora `@libsql/client`, lo que permite funcionar con un archivo local durante el desarrollo y con la nube de Turso de cara al público.

### Paso 1: Obtener la Base de Datos en Turso
1. Entra en [turso.tech](https://turso.tech/) y regístrate con tu cuenta de GitHub.
2. Crea una nueva base de datos (por ejemplo, llámala `promoter-db`).
3. En el panel de tu nueva base de datos, haz clic en **"Generate Token"** (o "Create Token") y cópialo.
4. También copia la URL de la base de datos (se parece a `libsql://promoter-db-tuusuario.turso.io`).

### Paso 2: Subir el código a GitHub
Asegúrate de haber subido todo tu código a un repositorio público o privado en tu cuenta de GitHub. (Ej. `https://github.com/tu-usuario/Cayetano-Piazza-web`).

### Paso 3: Desplegar en Vercel
1. Entra en [Vercel](https://vercel.com/) y regístrate también con tu cuenta de GitHub.
2. Haz clic en el botón **"Add New"** > **"Project"**.
3. Verás una lista con tus repositorios de GitHub. Busca el tuyo (ej. `Cayetano-Piazza-web`) y dale a **"Import"**.
4. Antes de darle a "Deploy", baja hasta la sección que dice **"Environment Variables"** (Variables de entorno) y añade estas dos variables exactas que sacaste del Paso 1:
   - Nombre: `TURSO_DATABASE_URL` | Valor: *(Pega aquí la URL de Turso, por ejemplo: libsql://...)*
   - Nombre: `TURSO_AUTH_TOKEN` | Valor: *(Pega aquí el token kilométrico de Turso)*
5. Dale al botón azul **"Deploy"**.

En menos de un par de minutos verás un mensaje de éxito y un dominio tipo `cayetano-piazza-web.vercel.app`. ¡Y tu página web ya será accesible para todo el mundo! 🚀

## Desarrollo Local

Si quieres seguir desarrollando o probando la web de manera local en tu ordenador:

1. Abre una terminal en esta carpeta y arranca el servidor local:
   ```bash
   npm run dev
   ```
2. Entra en `http://localhost:3000`. Al no detectar las variables de entorno de Turso, la web creará y utilizará automáticamente el archivo local `promoter.db` para poder funcionar de forma offline.
