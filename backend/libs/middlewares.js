import cors from 'cors'
import express from 'express'

const injectionMiddleware = (api) => {
    api.use(express.json());
    api.use(cors());
}

export default injectionMiddleware;