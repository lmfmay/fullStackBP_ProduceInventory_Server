import mongoose from 'mongoose'

const produceSchema = new mongoose.Schema({
    category: {type: String, required: true},
    price: {type: String, required: true},
    stocked: {type: Boolean, required: true},
    name: {type: String, required: true, unique: true}
})

produceSchema.index({category: 1})

export default mongoose.model('Produce', produceSchema);