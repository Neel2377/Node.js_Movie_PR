const { getMovieDetails, getMovieCredits } = require("../services/tmdb");
const Movie = require("../models/movieSchema");

exports.searchMovies = async (req, res) => {
  try {
    const query = req.query.q || "";
    const movies = await Movie.find({
      title: { $regex: query, $options: "i" }
    });
    res.render("index", { movies, searchQuery: query });
  } catch (err) {
    res.status(500).send("Error searching movies");
  }
};

exports.getMovieById = async (req, res) => {
  try {
    const movieId = req.params.id;
    const { movie, backdrops } = await getMovieDetails(movieId);
    const cast = await getMovieCredits(movieId);
    res.render("pages/movie", { movie, cast, backdrops });
  } catch (err) {
    res.status(500).send("Error loading movie details");
  }
};