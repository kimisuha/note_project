exports.crete = async (req, res) => {
    res.send({ message: "create handler" });
};

exports.findAll = async (req, res) => {
    res.send({ message: "findAll handle" });
};

exports.findOne = async (req, res) => {
    res.send({ message: "findOne handle" });
};

exports.update = async (req, res) => {
    res.send({ message: "update handle" });
};

exports.delete = async (req, res) => {
    res.send({ message: "delete handle" });
};

exports.deleteAll = async (req, res) => {
    res.send({ message: "deleteAll handle" });
};

exports.findAllFavorite = async (req, res) => {
    res.send({ message: "findAllFavorite handle" });
};
