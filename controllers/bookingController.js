const Movie = require('../models/movieSchema');

exports.renderBookingForm = async (req, res) => {
	const user = req.session && req.session.user ? req.session.user : null;
	let movie = null;
	let allMovies = [];
	if (req.query.movieId) {
		try {
			movie = await Movie.findById(req.query.movieId).lean();
		} catch (err) {
			movie = null;
		}
	}
	if (!movie) {
		allMovies = await Movie.find({}, '_id title').lean();
	}
	res.render('pages/booking', { movie, user, allMovies });
};


exports.createBooking = async (req, res) => {
	try {
		res.json({ success: true, message: 'Booking successful!' });
	} catch (err) {
		res.json({ success: false, message: 'Booking failed.' });
	}
};

