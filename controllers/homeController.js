const { getNowPlaying } = require("../services/tmdb");

exports.index = async (req, res) => {
  try {
    let movies = await getNowPlaying();
    movies = movies.slice(0,8);  
    res.render("index", { movies, query: req.query, session: req.session });
  } catch (err) {
    console.error("Error loading homepage:", err.message);
    res.render("index", { movies: [], query: req.query, session: req.session });
  }
};
