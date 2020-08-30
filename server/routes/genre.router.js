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
  });
});

router.get('/:id', (req, res) => {
  console.log('genre id', req.params.id);
  let queryText = `
    SELECT "name" from "genres"
    JOIN "movie_genres" ON "genres".id = "movie_genres".genre_id
    WHERE "movie_genres".movie_id = $1;
    `
  pool.query(queryText, [req.params.id])
    .then((result) => {
      res.send(result.rows);
  })
  .catch((error) => {
    console.log("error in get GenreID", error);
    res.sendStatus(500);
  });
});

module.exports = router;