const Joi = require('joi')
const express = require('express');
const app = express();
app.use(express.json());

const port = 3000;

const geners = [
  {id: 1, name: 'Action'},
  {id: 2, name: 'Horror'},
  {id: 3, name: 'Romance'}
];

app.get('/api/geners', (req, res) => {
  res.send(geners);
});

app.get('/api/geners/:id', (req, res) => {
  // look up the id in the geners
  const gener = geners.find(c => c.id === parseInt(req.params.id));
  if(!gener) return res.status(404).send("the gener id is not available");

  res.send(gener);
});

app.get('/', (req, res) => res.send('Hello customer Welcome To VIDLY!'));


app.post('/api/geners', function (req, res) {
  const result = validateGener(req.body);
  const { error } = validateGener(req.body);
  if (error) return res.status(400).send(result.error.details[0].message);

  const gener = {
    id : geners.length + 1,
    name : req.body.name
  }

  geners.push(gener);
  res.send(gener);
})

function validateGener(gener){
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return Joi.validate(gener, schema);

}



app.put('/api/geners/:id', function(req, res) {
  const gener = geners.find(c => c.id === parseInt(req.params.id));
  if(!gener) return res.status(404).send("the gener id is not available");
  const result = validateGener(req.body);
  const { error } = validateGener(req.body);
  if (error) return res.status(400).send(result.error.details[0].message);
   gener.name = req.body.name ;
   res.send(gener);
});



app.delete('/api/geners/:id', function(req, res) {
  const gener = geners.find(c => c.id === parseInt(req.params.id));
  if(!gener) return res.status(404).send("the gener id is not available");

  const index = geners.indexOf(gener);
  geners.splice(gener);
  res.send(gener);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));




