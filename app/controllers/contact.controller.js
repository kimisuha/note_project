const { BadRequestError, handle } = require("../helper/error");

exports.crete = async (req, res, next) => {
    if (!req.body.name) {
        return next(new BadRequestError(400, "name can't empty"));
    }

    const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.name,
        favorite: String(req.body.favorite).toLowerCase() === "true"
    });

    const [error, document] = await handle(contact.save());

    if (error) {
        return next(new BadRequestError(500, "error in contact"));
    }

    return res.send(document);
};

exports.findOne = async (req, res, next) => {
    const condition = { };
    const name = req.query.name;

    if(name){
        codition.name = { $regex: new RegExp(name), $option: "i" };
    }

    const [error, document] = await handle(Contact.findOne(condition));

    if(error){
        return next(new BadRequestError(500, `error with contact id: ${request.param.id}`));
    }
    if(!document){
        return next(new BadRequestError(404, "contact can't found"));
    }

    return res.send(data);
};

exports.findAll = async (req, res) => {
    res.send({ message: "findOne handle" });
};

exports.update = async (req, res, next) => {
    if(!req.body){
        return next(new BadRequestError(400, "null value in date update"));
    };

    const condition= {
        _id = req.param.id
    };

    const [error, document] = await handle(
        Contact.findOneAndUpdate(condition, req.body, {
            new: true,
        })
    );

    if(error){
        return next( new BadRequestError(500, `error update with contact id:${req.body.id}`));
    }

    if(!document){
        return next(new BadRequestError(404, "contact not found"));
    }

    return res.send({ message: "success update contact" });
};

exports.delete = async (req, res, next) => {
    const condition= {
        _id = req.param.id
    };

    const [error, document] = await handle(
        Contact.findOneAndDelete(condition)
    );

    if(error){
        return next( new BadRequestError(500, `error delete with contact id:${req.body.id}`));
    }

    if(!document){
        return next(new BadRequestError(404, "contact not found"));
    }

    return res.send({ message: "success delete contact" });
};

exports.deleteAll = async (req, res, next) => {
    const [error, document] = await handle(
        Contact.deleteMany({  })
    );

    if(error){
        return next( new BadRequestError(500, "can't find!"));
    }

    res.send({ message: `${data.deleteCount} success delete` });
};

exports.findAllFavorite = async (req, res) => {
    const [error, document] = await handle(
        Contact.find({ favorite: true })
    );

    if(error){
        return next( new BadRequestError(500, "can't find!"));
    }

    res.send(document);
};

