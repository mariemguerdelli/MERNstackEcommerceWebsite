const mongoose = require('mongoose');
var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please enter product price'],
        maxLength: [5, 'Product name cannot exceed 5 characters'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'Please enter product description'],
    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        }
    ],
    category: {
        type: String,
        required: [true, 'Please select category for this product'],
        enum: {
            values: [
                'Electronics',
                'Cameras',
                'Laptops',
                'Accessories',
                'Headphones',
                'Food',
                "Books",
                'Clothes/Shoes',
                'Beauty/Health',
                'Sports',
                'Outdoor',
                'Home'
            ],
            message: 'Please select correct category for product'
        }
    },
    seller: {
        type: String,
        required: [true, 'Please enter product seller']
    },
    stock: {
        type: Number,
        required: [true, 'Please enter product stock'],
        maxLength: [5, 'Product name cannot exceed 5 characters'],
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type:Schema.Types.ObjectId,
                ref:'User',
                required: true
            },
        
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    user: {
        type:Schema.Types.ObjectId,
        ref:'User',
        required: true
    }
        /*type: ObjectId,
        ref: 'User',*/
        
    ,
    createdAt: {
        type: Date,
        default: Date.now
    },

    numOfBiddings: {
        type: Number,
        default: 0
    },
    biddings: [
        {
            user: {
                type:Schema.Types.ObjectId,
                ref:'User',
                required: true
            },
        
            name: {
                type: String,
                required: true
            },
            auction: {
                type: Number,
                required: true
            },
            accept_bid: {
                type: Number,
                required: true,
                default: 0
            }
        }
    ],
})

module.exports = mongoose.model('Product', productSchema);