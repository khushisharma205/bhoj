const express = require("express")
const router = express.Router()

const {allProducts,addProduct,allProductsByType,productGetById} = require('../controllers/productController')

router.get('/all',allProducts)
router.get('/all/:type',allProductsByType)
router.get('/:id', productGetById)

router.post('/add',addProduct)


module.exports = router