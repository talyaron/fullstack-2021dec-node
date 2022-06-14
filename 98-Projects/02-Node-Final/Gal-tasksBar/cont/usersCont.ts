// import uid from '../helpers';

export interface User {
	name: string;
	userId: string;
    password: any;
    email: string;
}

let users: Array<User> =[]