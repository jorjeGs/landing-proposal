# TSA Agency - Landing Page

Una landing page premium, moderna y responsiva diseñada para **TSA Agency** (Agencia de Esports y Creadores de Streaming). Construida utilizando tecnologías web nativas para lograr el máximo rendimiento, animaciones fluidas y un diseño visual de primer nivel con estética SaaS oscura.

---

## 🚀 Cómo Iniciar el Entorno de Desarrollo

El proyecto está construido con **HTML5, CSS3 y JavaScript vanilla** (sin frameworks ni compiladores), por lo que levantar el entorno de desarrollo es inmediato y no requiere instalaciones complejas de dependencias.

Para que las tipografías de Google Fonts y las rutas relativas de los assets carguen correctamente, se recomienda abrir el proyecto mediante un servidor web local utilizando cualquiera de los siguientes métodos:

### Método 1: Usando Python (Recomendado y más rápido)
Si tienes Python instalado en tu sistema, abre una terminal en la carpeta raíz del proyecto y ejecuta:

```bash
python -m http.server 8080
```
Luego, abre tu navegador e ingresa a: **[http://localhost:8080](http://localhost:8080)**

---

### Método 2: Usando Node.js (`http-server`)
Si prefieres usar Node.js, puedes instalar y correr un servidor local estático ejecutando:

```bash
# Instalar globalmente (solo una vez)
npm install -g http-server

# Levantar el servidor en el puerto 8080
http-server -p 8080
```
Luego, abre tu navegador e ingresa a: **[http://localhost:8080](http://localhost:8080)**

---

### Método 3: Extensión "Live Server" de VS Code
Si utilizas Visual Studio Code:
1. Instala la extensión **Live Server** de Ritwick Dey.
2. Abre la carpeta del proyecto en VS Code.
3. Haz clic derecho sobre `index.html` y selecciona **"Open with Live Server"** (o presiona el botón "Go Live" en la barra de estado inferior).

---

## 📁 Estructura del Proyecto

```text
├── assets/                     # Logos, mascotas oficiales (Tesita 2.0) y recursos de imagen.
├── index.html                  # Estructura semántica principal y marcas de traducción.
├── index.css                   # Hoja de estilos principal, variables CSS, animaciones y queries responsivos.
├── index.js                    # Interactividad, Scroll Spy dinámico, carousels y selector de idioma.
└── README.md                   # Instrucciones del entorno de desarrollo (este archivo).
```

---

## 🛠️ Tecnologías y Características Implementadas

1. **Estructura y Estilos Nativos:** HTML5 semántico y CSS3 moderno (Flexbox y CSS Grid).
2. **Diseño Proporcional:** Soporte completo para pantallas grandes de escritorio (hasta resoluciones de 1920px+) con escalado dinámico de las tarjetas flotantes e imágenes del collage.
3. **Scroll Spy en Navbar:** Implementación personalizada en JS que calcula rangos de visualización ordenados por coordenadas absolutas de la página para evitar colisiones de resaltado en secciones anidadas (`#events-sec` y `#game-logs-sec`).
4. **Sistema Multilingüe (ESP / ENG):** Traducción instantánea por JS a través de atributos `data-es` y `data-en` sin recargar la página, guardando la preferencia del usuario en `localStorage`.
5. **Carousels Interactivos:**
   - Carrusel de Creadores y Tira de Logos de Eventos con desplazamiento automático continuo y acción de pausa en hover/touch.
   - Carrusel de bitácora/blog con controles manuales anterior/siguiente adaptativo (3 tarjetas en escritorio, 2 en tablet y 1 en móvil).
6. **Optimización Mobile-First:** El layout completo y el menú responsive de navegación lateral se adaptan de forma limpia a cualquier dispositivo móvil sin causar desbordamientos horizontales (`scrollWidth` exactamente igual al ancho del viewport).
