---
layout: post
title: 'CLASIFICADORES MACHINE LEARNING WEB/APP EN ACCION'
---

![Life-Cycle Project ](/assets/img/projects/proj-3/verapp.gif "Proyecto Clasificadores Machine Learning")

<p style="font-size:25px">&#128073; INTRODUCCION</p> 

La implementación de modelos de Machine Learning, es el proceso de poner modelos en producción para que las aplicaciones web, el software empresarial y las API puedan 
consumir un modelo entrenado y generar predicciones con nuevos puntos de datos. 

Normalmente, los modelos de aprendizaje automático se crean para que se puedan utilizar
para predecir un resultado (valor binario, es decir, 1 o 0 para la clasificación,
valores continuos para la regresión, etiquetas para la agrupación en clústeres, etc.


<p style="font-size:25px">&#128073;ESTABLECER EL CONTEXTO EMPRESARIAL</p> 

En machine Learning, la clasificación es un enfoque de aprendizaje supervisado, que puede ser considerado como un medio para categorizar, o clasificar algunos elementos desconocidos en el conjunto discreto de clases.

La clasificación tiene diferentes casos de uso comercial y empresarial. Por ejemplo, para predecir la categoría a la que pertenece un cliente.

* Para la detección de abandono de un cliente, en el que predecimos si ese cliente cambia a otro proveedor o marca.
* Para predecir si un cliente responde o no a una campaña publicitaria concreta.
* Por ejemplo, la clasificación se puede utilizar para filtrado de correo electrónico, reconocimiento de voz, reconocimiento de escritura a mano, identificación biométrica, clasificación de documentos y mucho más.
  
La clasificación de datos tiene varias aplicaciones en una amplia variedad de industrias. Básicamente muchos problemas se pueden expresar como asociaciones entre variables de entidad y objetivo, especialmente cuando se dispone de datos etiquetados.

* Un ejemplo concreto podría aplicarse un modelo de Clasificación a una compañía de servicios de telefónia. El objetivo en este caso es detectar los patrones de comportamiento de los clientes que sirven para predecir si se van a ir a la competencia. En este caso los clientes se clasifican como “baja” o “no baja” o “0” y “1”. 

<!--<p style="font-size:25px">&#128073;DESARROLLO DEL PROYECTO</p> -->

<p style="font-size:25px">&#128170;FLUJO DE TRABAJO DEL PROYECTO</p> 

![Life-Cycle Project ](/assets/img/projects/proj-3/proyecto3.jpg "Ciclo de vida Proyecto")

<p style="font-size:25px">&#128170;CODIGO FUENTE DEL PROYECTO</p> 

<p style="font-size:25px">&#128071; Porfavor vea el código pinchando en la imagen</p> 

{% include image.html url="https://walozarate.github.io/code3" image="projects/proj-3/codigo.gif" %}

<p style="font-size:25px">&#128073; OBJETIVOS DE LA APP – Clasificadores Machine Learning en Acción</p> 

En este Proyecto, trabajaremos con tres conjuntos de datos (Iris, Breast Cancer, Wine). La aplicación usa 3 modelos diferentes (KNN, SVM, Random Forest) para la clasificación y le daremos al usuario la posibilidad de establecer algunos parámetros.

La funcionalidad de la Aplicación es mostrar cómo trabaja cada clasificador sobre un conjunto de datos que el usuario elija, en las dos gráficas podemos ver el comportamiento de los puntos de datos y como los algoritmos clasifican cada uno de ellos según a la clase a la que pertenezcan. En la parte inferior podemos ver los puntajes obtenidos por cada clasificador siendo una comparación entre el puntaje de entrenamiento contra el puntaje de evaluación sobre el conjunto de datos seleccionado en el cual también influye el parámetro seleccionado en cada modelo de clasificación.

<p style="font-size:25px">&#128073;RESULTADOS - PUESTA EN PRODUCCION DE LA WEB/APP CLASIFICADORES MACHINE LEARNING EN ACCION</p> 

 <p style="font-size:25px">&#128071; Haga click en la imagen e interactue con la Web App </p> 
 
{% include code.html url="http://appclass2.herokuapp.com" code="projects/proj-2/adaptado.jpg" %}


<p style="font-size:25px">&#128640;SOBRE LOS CONJUNTOS DE DATOS USADOS:</p> 

<h4>CONJUNTO DE DATOS IRIS (IRIS DATASET)</h4>
![Iris Dataset ](/assets/img/projects/proj-3/iris.png "Iris Dataset")

Es uno de los más populares dataset en algoritmos de Clasificación en Machine Learning.

El conjunto de datos de Iris contiene cuatro características (largo y ancho de sépalos y pétalos) de 50 muestras de tres especies de Iris (Iris setosa, Iris virginica e Iris versicolor). Estas medidas se utilizaron para crear un modelo discriminante lineal para clasificar las especies. El conjunto de datos se utiliza a menudo en ejemplos de minería de datos, clasificación y agrupación y para probar algoritmos.
<br>
<br>
<h4>CONJUNTO DE DATOS Cancer de mama(BREAST CANCER DATASET)</h4>
![Breast Cancer Dataset ](/assets/img/projects/proj-3/breastcancer.png "Breast Cancer Dataset")

El cáncer de mama (CM) es uno de los cánceres más comunes entre las mujeres en todo el mundo, y representa la mayoría de los casos nuevos de cáncer y las muertes relacionadas con el cáncer según las estadísticas mundiales, lo que lo convierte en un problema de salud pública importante en la sociedad actual.

El diagnóstico precoz de BC puede mejorar el pronóstico y la probabilidad o la supervivencia significativamente, ya que puede promover el tratamiento clínico oportuno a los pacientes. Una clasificación más precisa de los tumores benignos puede evitar que los pacientes se sometan a tratamientos innecesarios. Por lo tanto, el diagnóstico correcto de Cáncer de mama y la clasificación de los pacientes en grupos malignos o benignos es objeto de mucha investigación. Debido a sus ventajas únicas en la detección de características críticas a partir de conjuntos de datos de BC complejos, el Machine Learning (ML) es ampliamente reconocido como la metodología de elección en la clasificación de patrones de BC y el modelado de pronóstico.

Los métodos de clasificación y minería de datos son una forma eficaz de clasificar los datos. Especialmente en el campo médico, donde esos métodos se utilizan ampliamente en el diagnóstico y análisis para tomar decisiones.Usaremos el repositorio de aprendizaje automático de la UCI para el conjunto de datos del cáncer de mama .

El conjunto de datos utilizado en esta historia está disponible públicamente y fue creado por el Dr. William H. Wolberg, médico del Hospital de la Universidad de Wisconsin en Madison, Wisconsin, EE. UU. Para crear el conjunto de datos, el Dr. Wolberg utilizó muestras de fluidos, tomadas de pacientes con masas mamarias sólidas y un programa informático gráfico fácil de usar llamado Xcyt, que es capaz de realizar el análisis de características citológicas basadas en un escaneo digital.
<br>
<h4>CONJUNTO DE DATOS CALIDAD DEL VINO (Quality Wine Dataset)</h4>
![Quality Wine Dataset ](/assets/img/projects/proj-3/wine.jpg "Quality wine Dataset")

El wine conjunto de datos contiene los resultados de un análisis químico de vinos cultivados en un área específica de Italia. Tres tipos de vino están representados en las 178 muestras, con los resultados de 13 análisis químicos registrados para cada muestra. La variable se ha transformado en variable categórica.

Los datos no contienen valores faltantes y se componen de solo datos numéricos, con una variable objetivo de tres clases para la clasificación.






<span class="icoest4">&#10025;</span>
<span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span> <span class="icoest4">&#10025;</span>
<span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span>
<span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span>
<span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span>

![Life-Cycle Project ](/assets/img/projects/proj-3/gato.gif "Programando día tarde y noche")