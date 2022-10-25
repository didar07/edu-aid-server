const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())

const courses = require('./data/courses.json')
const courseDetails = require('./data/courseDetails.json')

app.get('/', (req, res) => {
    res.send('course api running')
})

app.get('/python-courses', (req, res) => {
    res.send(courses)
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    const allCourse = courseDetails.filter(cd => cd.course_id == id)
    res.send(allCourse)
})


app.get('/course/:id', (req, res) => {
    const id = req.params.id
    console.log(req.params.id)
    const selectedCourse = courseDetails.find(cd => cd._id === id)
    res.send(selectedCourse)
})


app.listen(port, () => {
    console.log('course running', port)
})