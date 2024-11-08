import express from 'express'
import produceControllers from '../controllers/produceControllers.mjs'

const router = express.Router()

router.route('/')
//create route
    .post(produceControllers.createProduce)
//read route
    .get(produceControllers.getAllProduce)

router.route('/:id')
//read route
    .get(produceControllers.getOneProduce)
//update route
    .put(produceControllers.updateOneProduce)
//delete route
    .delete(produceControllers.deleteOneProduce)

// router.route('/seed').get(produceControllers.seedDB);

export default router