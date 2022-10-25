const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
/*   category: {
    type: String,
    enum: ['Dinner', 'Dessert', 'Starter', 'Drinks', 'Breakfast', 'Side-dish', 'Salad', 'Cake', 'Baked goods', 'Lunch', 'Snack', 'Soup' ],
    required : true 
  }, */
  ingredients: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
 
});

//MongoDB Collection named here - will give lowercase plural of name 
module.exports = mongoose.model("Recipe", RecipeSchema);
