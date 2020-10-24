# Ingenious test for candidates - Backend application

As you know from reading the user stories, the app you need to build is an event board. To do so, you need a backend that provides the necessary operations to list and create events. This app does exactly that.

## Index
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Development server](#development-server)
* [Exposed services](#exposed-services)
* [Doubts](#doubts)
* [Next step](#next-step)

## Prerequisites

* [node](https://nodejs.org/) & [npm](https://www.npmjs.com/#getting-started)
* Allow write access to the `backend/app/db/events` folder.

## Installation

```
$> git clone git@github.com:ingsw-dev/frontend-test.git
$> cd frontend-test/backend
$> npm install
```

Once you have the app installed try running the tests with `npm test`. All checks should pass.

## Development server

To run the development server open a terminal on the `backend` folder and run `npm start`. The server should open on `http://localhost:3000`.

## Exposed services

The app has the following services

* [Event list](#event-list)
* [Highlighted events](#highlighted-events)
* [Get event by id](#get-event-by-id)
* [Create event](#create-event)

### Event list
Lists all the events

#### Endpoint
GET /events

#### Response
```json
{
  "events": [
    {
      "id": 1,
      "title": "24 Festival de Cine para Niños y Jóvenes – Divercine",
      "eventImage": "http://www.cartelera.com.uy/imagenes_espectaculos/moviedetail13/17511.jpg",
      "description": "Del lunes 27 de julio al sábado 1º de agosto se desarrolla en el Auditorio del SODRE Nelly Goitiño (18 de Julio y Rio Branco) el 24 Festival de Cine para Niños y Jóvenes - Divercine. La programación, que incluye películas de largo, medio y cortometraje de varias partes del mundo, está dividida en tres franjas de horarios cada día, de acuerdo a las edades del público a las que van dirigidas: a las 13 horas a partir de 3 años de edad; a las 14 horas a partir de los 6 años de edad; y desde las 15 se programan los medio y largometrajes para niños más grandes y adolescentes.",
      "dates": [
        "07/27/2015 13:00",
        "07/28/2015 13:00",
        "07/29/2015 13:00",
        "07/30/2015 13:00",
        "07/31/2015 13:00",
        "07/1/2015 13:00"
      ],
      "location": "Auditorio del SODRE"
    },
    {
      "id": 2,
      "title": "24 Festival de Cine para Niños y Jóvenes – Divercine",
      "eventImage": "http://www.cartelera.com.uy/imagenes_espectaculos/moviedetail13/17511.jpg",
      "description": "Del lunes 27 de julio al sábado 1º de agosto se desarrolla en el Auditorio del SODRE Nelly Goitiño (18 de Julio y Rio Branco) el 24 Festival de Cine para Niños y Jóvenes - Divercine. La programación, que incluye películas de largo, medio y cortometraje de varias partes del mundo, está dividida en tres franjas de horarios cada día, de acuerdo a las edades del público a las que van dirigidas: a las 13 horas a partir de 3 años de edad; a las 14 horas a partir de los 6 años de edad; y desde las 15 se programan los medio y largometrajes para niños más grandes y adolescentes.",
      "dates": [
        "07/27/2015 13:00",
        "07/28/2015 13:00",
        "07/29/2015 13:00",
        "07/30/2015 13:00",
        "07/31/2015 13:00",
        "07/1/2015 13:00"
      ],
      "location": "Auditorio del SODRE"
    }
  ]
}
```

### Highlighted events
Returns the highlighted events

#### Endpoint
GET /events/featured

#### Response
```json
{
  "events": [
    {
      "id": 1,
      "title": "24 Festival de Cine para Niños y Jóvenes – Divercine",
      "eventImage": "http://www.cartelera.com.uy/imagenes_espectaculos/moviedetail13/17511.jpg",
      "description": "Del lunes 27 de julio al sábado 1º de agosto se desarrolla en el Auditorio del SODRE Nelly Goitiño (18 de Julio y Rio Branco) el 24 Festival de Cine para Niños y Jóvenes - Divercine. La programación, que incluye películas de largo, medio y cortometraje de varias partes del mundo, está dividida en tres franjas de horarios cada día, de acuerdo a las edades del público a las que van dirigidas: a las 13 horas a partir de 3 años de edad; a las 14 horas a partir de los 6 años de edad; y desde las 15 se programan los medio y largometrajes para niños más grandes y adolescentes.",
      "dates": [
        "07/27/2015 13:00",
        "07/28/2015 13:00",
        "07/29/2015 13:00",
        "07/30/2015 13:00",
        "07/31/2015 13:00",
        "07/1/2015 13:00"
      ],
      "location": "Auditorio del SODRE"
    }
  ]
}
```

### Get event by id
Returns an event for the given id. In case the event doesn't exists returns a 404.

#### Endpoint
GET /events/:id

#### Response
```json
{
  "event": {
    "id": 1,
    "title": "24 Festival de Cine para Niños y Jóvenes – Divercine",
    "eventImage": "http://www.cartelera.com.uy/imagenes_espectaculos/moviedetail13/17511.jpg",
    "description": "Del lunes 27 de julio al sábado 1º de agosto se desarrolla en el Auditorio del SODRE Nelly Goitiño (18 de Julio y Rio Branco) el 24 Festival de Cine para Niños y Jóvenes - Divercine. La programación, que incluye películas de largo, medio y cortometraje de varias partes del mundo, está dividida en tres franjas de horarios cada día, de acuerdo a las edades del público a las que van dirigidas: a las 13 horas a partir de 3 años de edad; a las 14 horas a partir de los 6 años de edad; y desde las 15 se programan los medio y largometrajes para niños más grandes y adolescentes.",
    "dates": [
      "07/27/2015 13:00",
      "07/28/2015 13:00",
      "07/29/2015 13:00",
      "07/30/2015 13:00",
      "07/31/2015 13:00",
      "07/1/2015 13:00"
    ],
    "location": "Auditorio del SODRE"
  }
}
```

### Create event
Creates an event

#### Endpoint
POST /events

#### Request
```json
{
  "event": {
    "id": 1,
    "title": "24 Festival de Cine para Niños y Jóvenes – Divercine",
    "eventImage": "http://www.cartelera.com.uy/imagenes_espectaculos/moviedetail13/17511.jpg",
    "description": "Del lunes 27 de julio al sábado 1º de agosto se desarrolla en el Auditorio del SODRE Nelly Goitiño (18 de Julio y Rio Branco) el 24 Festival de Cine para Niños y Jóvenes - Divercine. La programación, que incluye películas de largo, medio y cortometraje de varias partes del mundo, está dividida en tres franjas de horarios cada día, de acuerdo a las edades del público a las que van dirigidas: a las 13 horas a partir de 3 años de edad; a las 14 horas a partir de los 6 años de edad; y desde las 15 se programan los medio y largometrajes para niños más grandes y adolescentes.",
    "dates": [
      "07/27/2015 13:00",
      "07/28/2015 13:00",
      "07/29/2015 13:00",
      "07/30/2015 13:00",
      "07/31/2015 13:00",
      "07/1/2015 13:00"
    ],
    "location": "Auditorio del SODRE"
  }
}
```
