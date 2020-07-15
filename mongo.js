const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://mlsabthlpz:${password}@cluster0.wsywr.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
    person: String,
    number: String
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 3) {
  console.log('phonebook:')
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person.person, person.number)
      mongoose.connection.close()
      })
  })
}

else {
  const name = process.argv[3]
  const number = process.argv[4]

  const person = new Person({
  person: name,
  number: number,
  })

  person.save().then(result => {
  console.log(`Added ${name} number ${number} to phonebook`)
  mongoose.connection.close()
  })
}