---
layout: post
title: 'GENERADOR DE RECETAS Web/App'
---

![Life-Cycle Project ](/assets/img/projects/proj-4/rmg.png "Proyecto Generador de Recetas Aleatorio Web APP")

<p style="font-size:25px; background-color:rgba(255, 99, 71, 0.2);">&#128073; INTRODUCCION</p> 

Una de las grandes virtudes de tener una mente inquieta en sociedad con la tecnología, 
es la capacidad de resolver problemas de todo ámbito, ya sea que esté trabajando en 
proyectos complejos a escala empresarial, o resolviendo problemas cotidianos en el 
hogar, en ambas situaciones me encuentro fantaseando con soluciones automatizadas que administren de manera elegante y eficiente mis flujos de trabajo. 

Dado que muchos de nosotros debido a la proliferación del CODIV-19, nos vimos en la 
necesidad de permanecer en casa por un tiempo, atrapados por la cuarentena con nuestros
seres queridos, un problema se hizo recurrente y que molestaba a todos en mi hogar de
manera incorrecta, era la preparación semanal de comidas.

Por la cordura de todos los involucrados, es que decido democratizar la preparación 
de comidas diarias y **simplificar el proceso**. En lugar de pasar demasiado tiempo los 
fines de semana navegando por Internet, eligiendo recetas de cualquier cantidad de 
repositorios populares en línea, discutiendo / negociando, comparando los ingredientes
/instrucciones para maximizar el tiempo y el dinero…

… Ahora simplemente agregamos nuestras recetas favoritas en una aplicación web en línea
receptiva y fácil de usa, alojada en un Servidor Web e implementada a través de Flask y
Heroku.

---
<p style="font-size:25px; background-color:rgba(255, 99, 71, 0.2);">&#128073; OBJETIVOS:</p> 

- Extraer recetas de algunos de sus proveedores en línea favoritos con técnicas de **Web Scraping**, utilizando las librerías **BeautifulSoup, Request y Splinter**.

- Crear un **motor de búsqueda** personalizado para devolver recetas relevantes ordenadas, con la ayuda del paquete **Scikit-learn** de **Python.**
  
- Desarrollar una interfaz de usuario **Front-end** con **HTML**, **CSS**, **Bootstrap**, **JavaScript** y alojarlo en un Servidor Web.

- Construir una **API** (Aplication Programming Interfaz) como **Back-end**, desarrollada con **Python** y **Flask**.

- Implementar la API en la **PaaS** (Platform as a Service) **Heroku**.

<!--<p style="font-size:25px">&#128073;DESARROLLO DEL PROYECTO</p> -->
---
**ECHEMOS UN VISTAZO AL PRODUCTO TERMINADO:**

<p style="font-size:25px; background-color:rgba(255, 99, 71, 0.2);">&#128170;GENERADOR DE RECETAS WEB/APP en ACCIÓN</p> 

<p style="font-size:20px">&#128071; Haga click en la imagen e interactue con la Web App </p> 
 
{% include code.html url="https://oswaldozarate.github.io/index3" code="projects/proj-2/adaptado.jpg" %}
---
<!--![Life-Cycle Project ](/assets/img/projects/proj-3/proyecto3.jpg "Ciclo de vida Proyecto")-->
---
<p style="font-size:25px; background-color:rgba(255, 99, 71, 0.2);">&#128073;DESARROLLO DEL PROYECTO</p> 

**WEB SCRAPING:**

Durante el web scraping (del inglés scraping = arañar/raspar) se extraen y almacenan 
datos de páginas web para analizarlos o utilizarlos en otra parte. Por medio de este 
raspado web se almacenan diversos tipos de información: por ejemplo, datos de contacto,
tales como direcciones de correo electrónico o números de teléfono, o también términos
de búsqueda o URL. Estos se almacenan en bases de datos locales o tablas.

En el proyecto utilizaremos Web Scraping con las librerías BeautifulSoup, Request y
Splinter, ya que estas librerías nos ayudan en la iteración a través de las páginas 
web y la extracción de datos que necesitamos.

---
**MOTOR DE BUSQUEDA:**

Después de extraer todos estos datos de recetas, necesitamos alguna forma de extraer 
solo la información relevante, para esto construiremos un Motor de Búsqueda, para 
devolver recetas ordenadas por relevancia. Para este fin usaremos la librería Scikit-
learn para limpiar, tokenizar y construir una matriz ponderada para relacionar un 
término de búsqueda de entrada con una cadena de texto.

---
**FRONT-END ALOJADO EN SERVIDOR WEB DE GITHUB:**

Para la parte del Front-end, haremos uso de una interfaz de usuario que solicite un 
término de búsqueda y muestre la imagen de la receta, los ingredientes y las instrucciones. Pasaremos a HTML, CSS y JavaScript para hacer el trabajo pesado y usaremos Bootstrap 
y D3 para una implementación eficiente. El front-end estará alojado en GitHub, a través
de su servicio de GitHub Pages el cual admite nuestros proyectos y mostrarlos en vivo 
en una página web estática. 

---
**CONSTRUCCION DE LA API CON FLASK Y PYTHON:**

Una API web permite que otros programas manipulen la información o la funcionalidad a 
través de internet. Flask asigna solicitudes HTTP a funciones de Python, lo que nos 
permite ejecutar código específico basado en puntos finales. 

Cuando nos conectamos al servidor Flask en http://127.0.0.1:5000/, Flask comprueba si 
hay una coincidencia entre la ruta proporcionada y una función definida. Usaremos Flask
para procesar una consulta de búsqueda de entrada como un punto final dado para ejecutar
las funciones del motor de búsqueda que definimos anteriormente.

---
**IMPLEMENTACION DEL PROYECTO EN LA PLATAFORMA HEROKU:**

Finalmente, necesitamos implementar la API en Heroku. Heroku es una plataforma como 
servicio (PaaS) de computación en la Nube que soporta distintos lenguajes de programación.
Para este paso necesitamos de la ayuda de la librería Gunicorn. Gunicorn es un servidor 
web de alto rendimiento que puede ejecutar aplicaciones Flask en un entorno de producción,
y lo utilizaremos para no tener que depender de los recursos de localhost. 

Una vez que implemente la API de manera efectiva, actualizará el código JavaScript para
enviar un término de búsqueda como un punto final a:

https://comida-aleatoria.herokuapp.com 


---

<p style="font-size:25px">&#128170;CODIGO FUENTE DEL PROYECTO EN GITHUB</p> 

<p style="font-size:22px">&#128071; Porfavor vea el código pinchando en la imagen</p> 

{% include image.html url="https://github.com/waloZarate/recetas_api_app.git" image="projects/proj-3/codigo.gif" %}




<span class="icoest4">&#10025;</span>
<span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span> <span class="icoest4">&#10025;</span>
<span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span>
<span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span>
<span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span>

---
---
---

![Life-Cycle Project ](/assets/img/projects/proj-4/programming.gif "Programando día tarde y noche")
