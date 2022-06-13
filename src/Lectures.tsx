import React, { useEffect, useState } from 'react';
import { getLectures } from './Api';
import LecturesRow from './LecturesRow';

function Lectures() {
	
	const [lectures, setLectures] = useState([]);

	useEffect(() => {
		const token = getLectures();

		token.then(prop => {
			const lecturesData = prop.data;
			setLectures(lecturesData);
		});
	}, []);

	return (
		<>
			<h1 className="text-2xl font-bold mt-10 mb-10 ml-72">Lectures List</h1>

			<div>{lectures.map(l => <LecturesRow lecture={l} />)}</div>
		</>
	);
}

export default Lectures;