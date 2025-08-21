# Project BookMyShow

Project BMS is a movie booking management system built with Node.js, Express, and MongoDB. It allows users to browse movies, book tickets, and manage bookings.

# Deploy Link
Link: https://node-js-movie-pr.onrender.com/

## Features
- User authentication (login/register)
- Browse movies and shows
- Book movie tickets
- View and manage bookings
- Admin panel for managing movies and shows

## Project Structure
```
index.js
package.json
assets/
  css/
    style.css
  images/
    banner.avif
    book.jpeg
    movie-card.jpg
configs/
  db.js
controllers/
  authcontroller.js
  bookingController.js
  homeController.js
  movieController.js
  showController.js
  userController.js
middleware/
models/
  bookingSchema.js
  movieSchema.js
  showSchema.js
  userSchema.js
routers/
  authRouter.js
  bookingRouter.js
  homeRouter.js
  index.js
  movieRouter.js
  showRouter.js
  userRouter.js
services/
  tmdb.js
views/
  index.ejs
  pages/
    booking.ejs
    movie.ejs
  partials/
    authModal.ejs
    footer.ejs
    header.ejs
```

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Set up your MongoDB connection in `configs/db.js`.
4. Start the server:
   ```
   node index.js
   ```

## Usage
- Visit `http://localhost:3000` in your browser.
- Register or log in to book tickets.

## License
This project is licensed under the MIT License.