const express = require('express');
const router = express.Router();

const homeRouter = require('./homeRouter');
const authRouter = require('./authRouter');
const movieRouter = require('./movieRouter');
const showRouter = require('./showRouter');
const userRouter = require('./userRouter');
const bookingRouter = require('./bookingRouter');


router.use('/', homeRouter); 
router.use('/auth', authRouter);  
router.use('/movies', movieRouter);
router.use('/shows', showRouter);

router.use('/users', userRouter);
router.use('/booking', bookingRouter);


module.exports = router;
