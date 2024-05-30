const { Users } = require("../db.js");

const createUser = async (req , res) =>{
    const user = req.body
    try {
        const newUser = await Users.create(user);
        return newUser;
        } catch (error) {
            console.error(error);

        }

}
// , 
const getUser = async (req , res) =>{
    const {id} = req.body
    try {
        const user = await Users.findOne({where:{id}});
        return user;
        } catch (error) {
            console.error(error);
        }
}

const updateUser = async(id) => {
    try {
        const user = await Users.findOne({where:{id}});
        return user;
        } catch (error) {
            console.error(error);
        }
}

const deleteUser = async (id) => {
    try {
        const user = await Users.findOne({where:{id}});
        return user;
        } catch (error) {
            console.error(error);

        }
}
module.exports= createUser , getUser, updateUser