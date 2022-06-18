import React, { FC, useEffect, useState } from 'react';
import { getLectures } from './Api';
import LecturesRow from './LecturesRow';
import { Lecture } from './modules/lecture';


const Lectures: FC<Lecture[]> = () => {
	
	const [lectures, setLectures] = useState<Lecture[]>([]);

	useEffect(() => {
		const token = getLectures();

		token.then(prop => {
			setLectures(prop.data);
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