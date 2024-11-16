import express from 'express';
import multer from 'multer';
import MyRestaurantController from '../controllers/MyRestaurantController';
import { jwtCheck, jwtParse } from '../middleware/auth';
import { validateMyRestaurantRequest } from '../middleware/validation';

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5mb
    }
});

// /api/my/restaurant
router.get('/', jwtCheck, jwtParse, MyRestaurantController.getMyRestaurant);

// it will check the body for a property called imageFile
// it should be an image in binary form
// multer will store the image in memory and do some checks as well
// it will append an image object
router.post('/', upload.single('imageFile'), validateMyRestaurantRequest, jwtCheck, jwtParse, MyRestaurantController.createMyRestaurant);

router.put('/', upload.single('imageFile'), validateMyRestaurantRequest, jwtCheck, jwtParse, MyRestaurantController.updateMyRestaurant);

export default router;