import mongoose, { Schema } from 'mongoose';
import Viagem from './Viagem';

const ClienteShema = new Schema({
  name: {
    type: String,
    required: true
  },
  rg: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  trips: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Viagem'
    }
  ]
});

export default mongoose.model('Cliente', ClienteShema);
