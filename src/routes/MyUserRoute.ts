import express from 'express';
import MyUserController from '../controllers/MyUserController';
import { jwtCheck, jwtParse } from '../middleware/auth';
import { validateMyUserRequest } from '../middleware/validation';

const router = express.Router();

// /api/my/user

// jwtCheck checks that the user is logged in and has a valid access
// jwtParse gets the user information from the access token
// validateMyUserRequest validates the request body to make sure that no field is missing
router.get('/', jwtCheck, jwtParse, MyUserController.getCurrentUser);
router.post('/', jwtCheck, MyUserController.createCurrentUser);
router.put('/', jwtCheck, jwtParse, validateMyUserRequest, MyUserController.updateCurrentUser);

export default router;