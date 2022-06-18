import React, { useState, useEffect } from 'react';
import AssignmentsRow from './AssignmentsRow';
import { getAssignments } from './Api';
import { Assignment } from './modules/assignment';


function Assignments() {
	const [assignments, setAssignments] = useState<Assignment[]>([]);
  
	useEffect(() => {
		const token = getAssignments();
    
		token.then(prop => {
      const assignmentData = prop.data;
			setAssignments(assignmentData);
		});
	}, []);

	return (
		<>
			<h1 className="text-2xl font-bold mt-10 mb-10 ml-72">Assignments List</h1>
				<div>
					{assignments.map(a => <AssignmentsRow assignment={a} />)}
				</div>
		</>
	);
}

export default Assignments;
