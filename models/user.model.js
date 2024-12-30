module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            name: { type: String, required: true, trim: true },
            email: { type: String, required: true, unique: true, lowercase: true },
            phone: { type: String, required: true, unique: true },
            isActive: { type: Boolean, default: true },
            role: { type: String, enum: ['student', 'professor', 'admin'], default: 'student' },
            pictureURL: { type: String},
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const User = mongoose.model("user", schema);
    return User;
};
