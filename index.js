require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const Person = require('./models/person')

app.use(express.json())
app.use(express.static('build'))
app.use(cors())

// Morgan logging
const showRequest = morgan.token('request-body', 
                      function (req, res) { return JSON.stringify(req.body)})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :request-body'))

app.get('/', (request, response) => {
    response.send('<h2>Phonebook</h2>')
  })

// Get all phonebook entries from db
app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => response.json(persons))
})

// Get info about db
app.get('/info', (request, response) => {
  Person.countDocuments({}, (error, count) => {
    response.send(`<p>Phonebook has info for ${count} people</p>
                  <p>${new Date()}</p>`)
  })
})

// Get individual phonebook entry by id
app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

// Delete phonebook entry
app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => response.status(204).end())
    .catch(error => next(error))
})

// Add phonebook entry
app.post('/api/persons', (request, response) => {
  const body = request.body

  if ( !body.name || !body.number ) {
    return response.status(400).json({ 
      error: 'information missing, must enter name and number'
    })
  }

  const person = new Person ({
    name: body.name,
    number: body.number
  })

  person.save().then(savedPerson => response.json(savedPerson))
})

// Update phonebook entry
app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    number: body.number
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})

// error handler
const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})