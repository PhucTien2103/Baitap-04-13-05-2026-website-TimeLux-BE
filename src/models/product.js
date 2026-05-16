import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    salePrice: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    stock: { type: Number, default: 0 },
    sold: { type: Number, default: 0 },
    isPromotion: { type: Boolean, default: false },
    isNewest: { type: Boolean, default: false },
    isBestSeller: { type: Boolean, default: false },
    imageKeys: [{ type: String }],
    description: { type: String },
    specs: {
        material: { type: String },
        movement: { type: String },
        waterResistance: { type: String },
        warranty: { type: String },
    },
}, {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);
export default Product;
