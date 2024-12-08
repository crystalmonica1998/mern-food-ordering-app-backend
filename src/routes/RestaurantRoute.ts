import express from 'express'
import { param } from 'express-validator'
import RestaurantController from '../controllers/RestaurantController';

const router = express.Router()

// /api/restaurant/search/london
// validation is similar to other endpoints, but it is done here because it is a single param
router.get(
  '/search/:city',
  param('city')
    .isString()
    .trim()
    .notEmpty()
    .withMessage('City parameter must be a valid string'),
    RestaurantController.searchRestaurant
);

export default router;