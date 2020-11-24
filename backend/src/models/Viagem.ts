import mongoose, { Schema } from 'mongoose';

const ViagemSchema = new Schema({
  city: {
    type: String,
    required: true
  },
  data: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  client: {
    type: Schema.Types.ObjectId,
    ref: 'Cliente'
  }
});

export default mongoose.model('Viagem', ViagemSchema);
