const whiteList = ['http://localhost:5173', 'http://localhost:3000'];

const corsOptions = {
    origin: (origin, cb) => {
        if (!origin || whiteList.includes(origin)) {
            cb(null, true);
        } else {
            cb(new Error('Not allowed by CORS'));
        }
    },
    credentials: true, 
    optionsSuccessStatus: 204,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
};

module.exports = corsOptions;
