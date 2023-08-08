const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3000,
        dbURL: 'mongodb://127.0.0.1:27017/androidForum',   
        origin: ['http://localhost:5555', 'http://localhost:4200']
    },
    production: {
        port: process.env.PORT || 3000,
        dbURL: `mongodb+srv://qwerty789456123:${process.env.DB_URL_CREDENTIALS}@cluster0.etqghoy.mongodb.net/?retryWrites=true&w=majority`,
        origin: []
    }
};

module.exports = config[env];
