module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: { type: String, required: true, trim: true },
        capacity: { type: Number, min: 1 }
      },
      { timestamps: true }
    );
    /*
    schema.method("toJSON", function () {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    */
  
    const Laboratory = mongoose.model("laboratory", schema);
    return Laboratory;
  };
  