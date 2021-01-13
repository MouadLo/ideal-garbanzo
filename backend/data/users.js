import bcrypt from 'bcryptjs';

const users = [
	{
		name: 'Admin User',
		email: 'admin@example.com',
		password: bcrypt.hashSync('1234123', 10),
		isAdmin: true,
	},
	{
		name: 'Youness Lousimi',
		email: 'youness@example.com',
		password: bcrypt.hashSync('1234123', 10),
		isAdmin: false,
	},
	{
		name: 'Soufian Lousimi',
		email: 'soufianexample.com',
		password: bcrypt.hashSync('1234123', 10),
		isAdmin: false,
	},
];

export default users;
