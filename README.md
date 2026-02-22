# Epic Tributes - Portal de Conciertos

Esta plataforma web promociona conciertos tributo con un diseño premium y panel de administración incorporado. La aplicación acaba de ser adaptada para poder desplegarse de manera gratuita y eficiente en **Vercel** utilizando **Turso** como base de datos en la nube.

## Cómo Desplegar en Vercel y Turso

Vercel no permite bases de datos SQLite locales ya que su entorno Serverless borra archivos con cada ejecución. Por ello, el código usa ahora `@libsql/client`, lo que permite funcionar con un archivo local durante el desarrollo y con la nube de Turso de cara al público.

### Pasos a seguir:

1. **Crear base de datos en Turso:**
   - Ve a [Turso](https://turso.tech/) y crea una cuenta gratuita.
   - Crea una nueva base de datos (por ejemplo, `promoter-db`).
   - Obtén la URL de tu base de datos y un "Auth Token".

2. **Subir a GitHub:**
   - Crea un repositorio vacío en [GitHub](https://github.com/).
   - Abre la terminal en esta carpeta y asocia tu código al nuevo repositorio:
     ```bash
     git remote add origin https://github.com/tu-usuario/nombre-del-repo.git
     git push -u origin main
     ```

3. **Desplegar en Vercel:**
   - Ve a [Vercel](https://vercel.com/) y entra con tu cuenta de GitHub.
   - Dale a "Add New Project" y selecciona el repositorio de GitHub que acabas de crear.
   - En la sección **Environment Variables** (variables de entorno), añade estas dos:
     - `TURSO_DATABASE_URL`: (La URL que te ha dado Turso, empezando por `libsql://...`)
     - `TURSO_AUTH_TOKEN`: (El token largo que has sacado de Turso)
   - Pulsa "Deploy" y ¡listo! En segundos, tu web será accesible mundialmente a través de la URL que te proporciona Vercel.

## Desarrollo Local

Si quieres seguir desarrollando o probando la web de manera local en tu ordenador:

1. Abre una terminal en esta carpeta y arranca el servidor local:
   ```bash
   npm run dev
   ```
2. Entra en `http://localhost:3000`. Al no detectar las variables de entorno de Turso, la web creará y utilizará automáticamente el archivo local `promoter.db` para poder funcionar de forma offline.
