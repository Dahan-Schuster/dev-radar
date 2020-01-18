'use strict' // tells JavaScript to show errors instead of suppressing they

// import the express object from the previously installed express dependecie (yarn add express)
// express creates a simple-to-use tool for listening and manipulating routes systems (restful APIs, MVC controllers etc) 
import express from 'express'

// instanciates an express object using its constructor
const app = express()

app.use(express.json())

// Users array for examples

const users = [
    {id: 1, name: 'Dahan', age: 19 },
    {id: 2, name: 'Marshall' , age: 19 }
]

// Starts to listen to the 3333
app.listen(3333)

// Along side its method (GET, POST, PUT or DELETE), a HTTP request
// comes with parameters, which can be ordered by:

// Query Params: request.query (for filters, paginations, ordering etc)
// Route Params: request.params (indentify a resorce in PUT and DELETE methods)
// Body: Data for creating or editing an object 

// configure express to send responses to GET requests made for the route named '/'
app.get('/', (request, response) => response.json({ message: 'Hello, omnistack!' }))

// same of above, but for the route named '/users' with the GET method
app.get('/users', (request, response) => response.json(users))

// same of above, but for the route named '/users' with the POST method
app.post('/users', (request, response) => response.json(request.body))

// same of above, but for the route named '/users/:id' with the DELETE method
// the '/:id' part means some value that will be passed within the route,
// representing an resource by its id (like an user, for example)
app.delete('/users/:id', (request, response) => 
    response.json(users.filter(user => user.id == request.params.id))
)
