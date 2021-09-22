const config = {
    app: {
        port: process.env.PORT || 800,
        origin: [
            "http://localhost:8081"
        ]
    },
};

module.exports = config;