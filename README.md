![Points badge](../../blob/badges/.github/badges/points.svg)

![Logo UCOL](img/ucol-logo.jpg)

![Portada](img/cover.jpg)
>On July 21, 1966, Gemini X landed in the Atlantic Ocean. In this photograph, astronaut John W. Young, command pilot of the three-day mission, is hoisted from the water by a recovery helicopter. Photo by <a href="https://unsplash.com/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">NASA</a> on <a href="/t/history?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
# Examen: Encapsulamiento

El objetivo de este ejercicio evaluar el principio y proceso de encapsulamiento de clases.

## Requerimientos funcionales

1. (100 Puntos) Programar la clase `Activity`. Deberá estar encapsulada e incluir los siguientes:
   - (25 puntos) Atributos:
     - `String name (RW)` nombre de la actividad.
     - `Date startDate (W)` fecha de inicio de la actividad.
     - `Date endDate (W)` fecha de termino de la actividad.
     - `Number duration (R)` duración en horas de la actividad.
     - `String[] participants (-)` vector que contiene los nombres de los participantes.
   - Métodos
     - (20 puntos) `constructor()` recibe valores iniciales para `name`, `startDate`, `endDate` y `duration`. El vector `participants` inicia como un vector vacío.  
     - (20 puntos) `getDays()` regresa la duración en días del evento.
     - (20 puntos) `getAnnouncement()` regresa un String con la información de la actividad a `name`, `startDate`, `endDate` y `duration` en el siguiente formato: `El evento Reunión de estudiantes inicia el 10 de Feb del 21 y termina el 12 de Feb del 21 y tiene una duración de 10 horas`. Este mensaje es suponiendo que  `name=Reunión de estudiantes`, `startDate=10 de Febrero del 2021`, `endDate=12 de Febrero del 2021` y `duration=10 horas`.
     - (10 puntos) `addParticipant(name)` agrega el nombre de ese participante a la lista o vector.
     - (5 puntos) `getNumParticipants()` regresa el número de participantes registrados.

## Requerimientos no funcionales

- Las clases, métodos y atributos deberán tener el nómbre que se indica y el número y tipo de parámetros que se especifica.
- Se deberán utilizar las convenciones de estilo para clases, métodos, atributos, parámetros y variables
- El programa deberá probar y mostrar el correcto funcionamiento de las funciones.
- El programa deberá funcionar en consola

## Entregable

- Código fuente en este repositorio
  
## Evaluación

- Para que el examen sea considerado como válido, el repositorio deberá tener por lo menos 1 commit por cada método.
- Los repositorios que no tengan una historia de commits considerable NO serán considerados como válidos y tendrán calificación cero
