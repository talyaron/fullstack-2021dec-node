import User from '../model/userModel';

// const usersArr: Array<User> = [
// 	{
// 		name: 'Bella',
// 		userId: '281294'
// 	},
// 	{
// 		name: 'Gili',
// 		userId: '310195'
// 	},
// 	{
// 		name: 'Roy',
// 		userId: '170797'
// 	},
// 	{
// 		name: 'Meir',
// 		userId: '261176'
// 	}
// ];

export async function getAllUsers(req, res) {
	try {
		res.send({ usersArr });
	} catch (error) {
        console.log('Users array not valid')
    }
}

export const updateUser = async (req, res) => {
	try {
	} catch (error) {}
};
