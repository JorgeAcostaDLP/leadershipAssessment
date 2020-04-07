const express = require('express');
const router = express.Router();
const { Answers } = require('../../models');

router.get('/', async (req, res) => {
  res.json(await Answers.all());
});

router.get('/:id', async (req, res) => {
  res.json(await Answers.single(req.params.id));
});
//this route uses post to create a new row in the Answers table using the newForm method
router.post('/', async (req, res) => {
  await Answers.newAnswers(req.body);
});

//this route will update the status
router.put('/', async (req, res) => {
  await Answers.updateAnswers(req.body.formId, req.body.status);
});

router.delete('/:id', async (req, res) => {
  await Answers.deleteAnswers(req.params.id);
});

module.exports = router;
