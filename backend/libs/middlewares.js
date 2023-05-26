import cors from 'cors'
import express from 'express'

const injectionMiddleware = (api) => {
    api.use(express.json({ limit: '50mb' }));
    api.use(cors());
    
}

export default injectionMiddleware;