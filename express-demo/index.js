const express = require('express'); // 3 party module and return function 
const app = express();
const Joi = require('joi');
const {load , Auth} = require('./logger.js');

const morgan = require('morgan');
const helmet = require('helmet');

const port = 3000;
// creat middleware
app.use(load);
app.use(Auth);

app.use(express.json()); // enable parsing of JSON object in the body of the request
const courses = [
  {id : 1 , name : 'Course'},
  {id : 2 ,name : 'Course 2' },
  {id :3 ,name : 'Course3'}];
// builtin middleware
app.use(express.urlencoded( {extended : true} ));
app.use(express.static('public'));
// third party middleware
app.use(morgan('tiny'));
app.use(helmet());
app.get('/', (req, res) => res.send('Hello World! every body welcome '));

app.get('/books/:bookId', (req, res) => {
  res.send(req.params.bookId)
});

app.get('/api/courses' , (req, res) => {
  res.send(courses);
});


app.get('/api/courses/:id' , (req, res) => {
  // look up the course by id
  var course = courses.find(c => c.id === parseInt(req.params.id));
  // validation input
  if(!course) return res.status(404).send("the course id is not available"); // !course id doesnot exist
  res.send(course);
});

app.post('/api/courses', (req, res) => {
  // validation of input
  /*const schema = {
    name: Joi.string().min(3).required(),
  };
  const result = Joi.validate(req.body, schema);

  if (result.error){
    res.status(400).send(result.error.details[0].message);
    return;
  }*/

  /*if(!req.body.name || req.body.name.length < 3) // !req.body.name mans req.body.name doesnot exist
  { res.status(404).send('name is lessthan 3 character')
    return;// b/c we dont wont the rest of function to be exicuted hear
  }*/
  const result = validateCourse(req.body);
  const { error } = validateCourse(req.body); // object disruction is equal to result.error
  // if invalid
  
  if (error) return res.status(400).send(result.error.details[0].message);
  
  //read query string parameters
  const course = {
  id : courses.length + 1 , 
  name : req.body.name
  }
courses.push(course);
// return the course
res.send(course);

});

app.put('/api/courses/:id' , (req, res) => {
  // look up the courses
  var course = courses.find(c => c.id === parseInt(req.params.id));
  // if not existing , return the courses
  if(!course) return res.status(404).send("the course id is not available"); // !course id doesnot exist
  

  /*const schema = {
    name: Joi.string().min(3).required(),
  };
  const result = Joi.validate(req.body, schema);

  if (result.error){
    res.status(400).send(result.error.details[0].message);
    return;
  }*/
  const result = validateCourse(req.body);
  const { error } = validateCourse(req.body); // object disruction is equal to result.error
  // if invalid
  
  if (error) return res.status(400).send(result.error.details[0].message);
  
  
  // update the course
  course.name = req.body.name;
  // return the update courses
  res.send(course);
})



function validateCourse(course){
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return Joi.validate(course, schema);

}

app.delete('/api/courses/:id', (req, res) => {
// look up the courses
var course = courses.find(c => c.id === parseInt(req.params.id));
// if not existing , return the courses
if(!course) return res.status(404).send("the course id is not available"); // !course id doesnot exist

 // delete 
 const index = courses.indexOf(course);
 courses.splice(index, 1);
 // Return the same course 
 res.send(course);
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`));
