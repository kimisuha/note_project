module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            name: {
                type: String,
                require: [true, "Contact name is required"]
            },
            email: {
                type: String,
                trim: true,
                lowcase: true
            },
            address: String,
            phone: String,
            favorite: Boolean,
        },

        {timestamps: true}
    );

    schema.method("toJson", function() {
        const {_v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    return mongoose.model("Contact", schema);
}