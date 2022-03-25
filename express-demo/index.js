const express = require('express'); // 3 party module and return function 
const app = express();
const port = 3000;

app.use(express.json()); // enable parsing of JSON object in the body of the request
const courses = [
  {id : 1 , name : 'Course'},
  {id : 2 ,name : 'Course 2' },
  {id :3 ,name : 'Course3'}];


app.get('/', (req, res) => res.send('Hello World! every body welcome '));

app.get('/books/:bookId', (req, res) => {
  res.send(req.params.bookId)
});

app.get('/courses/:id' , (req, res) => {
  // look up the course by id
  var course = courses.find(c => c.id === parseInt(req.params.id));
  // validation input
  if(!course) res.status(404).send("the course id is not available"); // !course id doesnot exist
  res.send(course);
});

app.post('/api/courses', (req, res) => {
  // validation of input
  if(!req.body.name || req.body.name.length < 3) // !req.body.name mans req.body.name doesnot exist
  { res.status(404).send('name is lessthan 3 character')
    return;// b/c we dont wont the rest of function to be exicuted hear
  }

  //read query string parameters
  const course ={
  id : courses.length +1 , 
  name : req.body.name
  }
courses.push(course);
// return the course
res.send(course);

});



app.listen(port, () => console.log(`Example app listening on port ${port}!`));



