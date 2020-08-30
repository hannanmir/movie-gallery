const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  let queryText = 'SELECT * FROM "genres" ORDER BY "id" DESC;';
  pool.query(queryText).then(result => {
      res.send(result.rows);
  })
  .catch(error => {
      console.log('error getting genres', error);
      res.sendStatus(500);
  });});

module.exports = router;