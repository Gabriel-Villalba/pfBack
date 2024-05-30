const { Category} = require("../db.js");
//, , updateCategory, 

const getCategories = async (req , res) =>{
    try {   
        const categories = await Category.findAll();    
        res.json(categories);
        } catch (error) {
            console.log(error);
        }
}

const createCategory = async(req , res) => {
    try {
        const { name } = req.body;
        const category = await Category.create({ name });
        res.json(category);
        } catch (error) {
            console.log(error);
        }
}

const deleteCategory = async(req , res) => {
    try {
        const { id } = req.params;
        const category = await Category.destroy({ where: { id } });
        res.json(category);
        } catch (error) {
            console.log(error);
        }
}

module.exports = getCategories , createCategory, deleteCategory
