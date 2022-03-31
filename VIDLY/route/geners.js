const express = require('express');
const router = express.Router();

const geners = [
    {id: 1, name: 'Action'},
    {id: 2, name: 'Horror'},
    {id: 3, name: 'Romance'}
  ];
  
router.get('/', (req, res) => {
    res.send(geners);
  });
  
router.get('/:id', (req, res) => {
    // look up the id in the geners
    const gener = geners.find(c => c.id === parseInt(req.params.id));
    if(!gener) return res.status(404).send("the gener id is not available");
  
    res.send(gener);
  });
  
router.post('/', function (req, res) {
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
router.put('/:id', function(req, res) {
    const gener = geners.find(c => c.id === parseInt(req.params.id));
    if(!gener) return res.status(404).send("the gener id is not available");
    const result = validateGener(req.body);
    const { error } = validateGener(req.body);
    if (error) return res.status(400).send(result.error.details[0].message);
     gener.name = req.body.name ;
     res.send(gener);
  });
  
router.delete('/:id', function(req, res) {
    const gener = geners.find(c => c.id === parseInt(req.params.id));
    if(!gener) return res.status(404).send("the gener id is not available");

    const index = geners.indexOf(gener);
    geners.splice(index, 1);
    res.send(gener);
  });

module.exports = router;