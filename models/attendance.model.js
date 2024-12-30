module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
        laboratoryId: { type: mongoose.Schema.Types.ObjectId, ref: "laboratory", required: true },
        type: { type: String, enum: ["check-in", "check-out"], required: true },
        method: { type: String, enum: ["qr", "manual"], required: true },
        date: { type: Date, required: true },
        time: { type: String, required: true },
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function () {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Attendance = mongoose.model("attendance", schema);
    return Attendance;
  };
  