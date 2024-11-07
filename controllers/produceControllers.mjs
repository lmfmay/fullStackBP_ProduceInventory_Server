import Produce from '../models/produceSchema.mjs'
import produce from '../data/data.mjs';

async function createProduce(req, res){
    try {
        //create a new produce object
        let newProduce = new Produce(req.body);
        //save new obj to DB
        await newProduce.save();
        //return result back to front-end
        res.json(newProduce)
    } catch (error) {
        console.error(error)
        res.status(500).json({msg: 'Server error'})
    }
}
async function getAllProduce(req, res){
    try {
        let allProduce = await Produce.find({});
        res.json(allProduce)
    } catch (error) {
        console.error(error)
        res.status(500).json({msg: 'Server error'})
    }
}
async function updateOneProduce(req, res){
    try {
        let updatedProduce = await Produce.findByIdAndUpdate(req.params.id, req.body, {new: true}); //new:true sends back newly updated produce instead of the old one.
        res.json(updatedProduce)
    } catch (error) {
        console.error(error)
        res.status(500).json({msg: 'Server error'})
    }
}
async function deleteOneProduce(req, res){
    try {
        await Produce.findByIdAndDelete(req.params.id);
        res.json({msg: 'Item deleted'})
    } catch (error) {
        console.error(error)
        res.status(500).json({msg: 'Server error'})
    }
}

async function seedDB(req,res){
    try {
        await Produce.deleteMany({}) //clear out current DB before re-seeding with new data
        await Produce.create(produce);
        res.json({msg:'DB seeded'})
    } catch (error) {
        console.error(error);
        res.status(500).json({msg:'Server Error'})
    }
}

export default {createProduce, getAllProduce, updateOneProduce, deleteOneProduce, seedDB}