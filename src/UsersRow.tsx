import React, { FC } from 'react';
import { DateTime } from 'luxon';
import { User } from './modules/user';

const UsersRow = ({ user }: any) => {
	const userDate = user.dob.date;

	const date = DateTime.fromISO(userDate);

	const humanReadable = date.toLocaleString(DateTime.DATE_FULL);

	return (
		<div className="p-4  shadow-lg rounded-lg">
			<div className="bg-slate-700 h-80 w-80 mx-auto border-2 border-black rounded-lg text-gray-200">
				<div>
					Name: {user.name.title} {user.name.first} {user.name.last}
				</div>
				<div>Email: {user.email}</div>
				<div>Dob: {humanReadable}</div>
				<img
					className="mx-auto rounded-full h-48 w-48 mt-5 object-cover" src={user.picture.large}/>
			</div>
		</div>
	)
}

export default UsersRow;