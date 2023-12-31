import { Request, Response } from 'express';
import AdminService from '../services/AdminService.js';
import logger from '../../config/winstonLogger.js';

class AdminController {
    
    runDbSchedule(req: Request, res: Response) {
        try{
            AdminService.runDbSchedule();
            res.status(200).json({ message: "Success" });
        } catch (error) {
            logger.error("Error running dbSchedule:", error, { service: "AdminController.runDbSchedule" });
        }
    }
}

export default new AdminController();