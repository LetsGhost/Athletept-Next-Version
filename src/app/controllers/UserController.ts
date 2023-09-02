import { Request, Response } from 'express';
import { registerUser, createExercisePlanFromExcel } from '../services/UserService'; // Import the necessary functions
import * as path from 'path';
import { upload } from '../../config/multerConfig';

const registerUserController = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!req.file) {
            return res.status(400).json({ message: 'No file provided' });
        }

        const uploadedFilePath = path.join('../public/uploads', req.file.filename);

        // Register the user
        const newUser = await registerUser({ email: email as string, password: password as string });

        // Create exercise plan from Excel file
        await createExercisePlanFromExcel(newUser._id, uploadedFilePath);

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: 'Registration failed', error: error });
    }
};

export { registerUserController };
