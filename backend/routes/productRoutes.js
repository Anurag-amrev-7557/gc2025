import express from 'express';
import {addProduct,listProducts} from '../controllers/productcontroller.js';
import protect from "../middleware/protect.js";
import adminProtect from "../middleware/adminprotect.js";
import upload from "../middleware/multer.js";

const router=express.Router();

router.post("/addproduct",upload.fields([{name:"image1",maxCount:1},{name:"image2",maxCount:1}]),addProduct);
router.post('/listproducts',listProducts);

router.get("/products", async (req, res) => {
    try {
        let { search, sort } = req.query;

        let filter = {};
        if (search) {
            filter.name = { $regex: search, $options: "i" }; // Case-insensitive search
        }

        let sortOptions = {};
        if (sort === "price-asc") {
            sortOptions.price = 1; // Sort by price (low to high)
        } else if (sort === "price-desc") {
            sortOptions.price = -1; // Sort by price (high to low)
        } else if (sort === "name") {
            sortOptions.name = 1; // Sort by name (A-Z)
        }

        const products = await Product.find(filter).sort(sortOptions);
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

export default router;



