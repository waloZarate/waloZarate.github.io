---
layout: post
title: 'PREDICCIÓN DE CARGOS POR SEGURO APP'
---
![Life-Cycle Project ](/assets/img/projects/proj-2/app.jpg "Predictor de Costos por seguro Hospitalario")

<p style="font-size:25px">&#128073; INTRODUCCION</p> 

En el mundo de la tecnología, el objetivo final de cualquier proyecto es implementarlo en producción. Particularmente en el dominio de la Ciencia de Datos, mientras se construye cualquier modelo de Machine Learning, ya sea para predecir ventas o cualquier otro resultado o para identificar cualquier objeto o cualquiera que sea la razón, el objetivo principal del proyecto es ponerlo a disposición de los usuarios finales.

<p style="font-size:25px">&#128073;ESTABLECER EL CONTEXTO EMPRESARIAL</p> 

Una compañía de seguros quiere mejorar su pronóstico de flujo de efectivo al predecir
mejor los cargos del paciente utilizando métricas demográficas y básicas de riesgo de
salud del paciente en el momento de la hospitalización.

<p style="font-size:25px">&#128073;DESARROLLO DEL PROYECTO</p> 

Este proyecto muestra la construcción de una aplicación web interactiva denominada **PREDICTOR DE CARGOS POR SEGUROS APP**, el proyecto fue desarrollado en el lenguaje de programación `Python` con las librerías `Pandas, Numpy, Matplotlib, Seaborn` para el *Análisis exploratorio de Datos, limpieza, extracción de características, etiquetado y visualización de los datos*.

 Así mismo el proyecto reúne conocimientos sobre los algoritmos de `Machine Learning`, como **Regresión Lineal, Árbol de Decisiones y Bosque Aleatorio** que fueron los modelos usados en la construcción, entrenamiento y evaluación del proyecto a través de la librería `Scikit-learn`. 
 
 Para la integración del proyecto como una aplicación web usamos `Streamlit` que es un framework para Machine Learning y finalmente la implementación de la aplicación en la nube se la hizo mediante `Keroku` que es una plataforma de servicios en la nube (concidos como PaaS o Platform as a Service). 

<p style="font-size:25px">&#128170;FLUJO DE TRABAJO DEL PROYECTO</p> 

![Life-Cycle Project ](/assets/img/projects/proj-2/ciclo.jpg "Ciclo de vida Proyecto")

<p style="font-size:25px">&#128170;CODIGO DEL PROYECTO</p> 

<p style="font-size:25px">&#128071; Porfavor vea el código pinchando en la imagen</p> 

{% include image.html url="https://walozarate.github.io/code2" image="projects/proj-2/codigo.jpg" %}

<p style="font-size:25px">&#128073; OBJETIVOS DE LA APP - Predictor de Cargos por Seguro</p> 

EL objetivo principal del modelo es poder predecir los cargos de un asegurado hospitalizado que debe cubrir una aseguradora, esta predicción está basada en un conjunto de datos que el modelo aprendió del historial de la base de datos de dicha aseguradora, por lo tanto, las características en común que tienen todos los asegurados y por los cuales se incrementa o disminuye el costo de la hospitalización son los siguientes (Se recuerda que el conjunto de datos es de una aseguradora de los Estados Unidos y las características y contenido están en su idioma nativo):

        * •	Age: edad del beneficiario principal
        * •	Sex: sexo del contratista de seguros, mujer, hombre
        * •	BMI: índice de masa corporal, que proporciona una comprensión del cuerpo, pesos relativamente altos o bajos en relación con la altura, índice objetivo de peso corporal (kg / m ^ 2) utilizando la relación entre la altura y el peso, idealmente 18,5 a 24,9
        * •	Children: Número de niños cubiertos por seguro médico / Número de dependientes.
        * •	Smoker: Fumar
        * •	Region: Área residencial del beneficiario en los EE. UU., Noreste, sureste, suroeste, noroeste.
        * •	Charges: Costos médicos individuales facturados por el seguro médico.

Basándose en estas características el modelo es capaz de predecir futuros cargos por seguro. 
Y resulta más fácil tanto para el individuo como para la aseguradora de salud tener una idea sobre los cargos del seguro a pagar o ser pagados.

<p style="font-size:25px">&#128073;RESULTADOS - PUESTA EN PRODUCCION DE LA WEB/APP PREDICTOR DE CARGOS POR SEGUROS</p> 

 <p style="font-size:25px">&#128071; Haga click en la imagen e interactue con la Web App </p> 
 
{% include code.html url="http://presegapp.herokuapp.com" code="projects/proj-2/adaptado.jpg" %}


<p style="font-size:25px">&#128640; ASPECTOS OPERACIONALES DEL FLUJO DE TRABAJO DEL PROYECTO</p> 

El modelo de Machine Learning fue primeramente sometido a un estudio del problema que se presenta en las empresas aseguradoras, se buscó conjuntos de datos público en bases de datos de los Estados Unidos, el flujo de trabajo para cualquier otro dataset sería el mismo si se accede a bases de datos de empresas que deseen tener una aplicación de este tipo. 

El modelo fue sometido a múltiples entrenamientos con diferentes modelos, para finalmente elegir el modelo de machine learning con mejor precisión, el modelo elegido fue: Random Forest o Bosque Aleatorio, una ventaja de tener un modelo de este tipo en cualquier negocio, es anticiparse a nuevos clientes y cuál sería el costo por el seguro que tendrían que desembolsar. 

El siguiente paso fue la limpieza y el análisis exploratorio de datos (E.D.A.) en el conjunto de datos, se generaron diferentes gráficos para ver la correlación de los datos y se realizó la codificación categórica del conjunto de datos, a su vez se guardó el nuevo conjunto de datos limpio y codificado y en un nuevo archivo. 

A continuación, se comenzó a construir el modelo con 3 tipos de modelos y ver cual demostraba una mejor precisión, los modelos usados fueron Linear Regression, Decision Tree y Randon Forest. Al final de las pruebas en el conjunto de datos con las métricas de precisión RMSE, VIF, se determinó que la mejor precisión la tenía el modelo Random Forest para este conjunto de datos.

Una vez con todos los elementos y pruebas al modelo, el paso siguiente fue guardar el modelo para poder llevarlo a la construcción del frontend de la aplicación. La construcción del frontend se llevó a cabo en streamlit.

Para completar el flujo de trabajo o workflow se implementó la aplicación construida en la nube para que cualquier persona con conexión a internet pudiera verla. Esta parte del flujo de trabajo se la logró usando (PaaS) Platform as a Service en heroku. 

<span class="icoest4">&#10025;</span>
<span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span> <span class="icoest4">&#10025;</span>
<span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span>
<span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span>
<span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span><span class="icoest4">&#10025;</span>