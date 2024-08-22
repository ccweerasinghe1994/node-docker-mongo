import express from 'express';
import { getConfig } from './config.js';


export const startServer = ()=>{
    const httpServer = express();


    try {
        const PORT:number = +getConfig().PORT;
        httpServer.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {

        if (error instanceof Error) {
            console.error(error.message);
        }
        
        throw new Error(`Server failed to start`);
    }
};

