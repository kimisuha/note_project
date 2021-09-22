const config = {
    app: {
        port: process.env.PORT || 800,
        origin: [
            "http://localhost:8081"
        ]
    },

    db: {
        url: "http://localhost:27017/note_project"
    }
};

module.exports = config;