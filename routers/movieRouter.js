
const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const Movie = require('../models/movieSchema');

router.get('/search', movieController.searchMovies);

router.get('/:id', movieController.getMovieById);
router.get('/movies/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.redirect('/'); // fallback
    res.render('pages/movieDetails', { movie });
  } catch (err) {
    console.error(err);
    res.redirect('/');
  }
});

module.exports = router;



