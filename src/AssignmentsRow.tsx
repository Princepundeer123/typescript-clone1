import { useState } from 'react';
import { DateTime } from 'luxon';
import AssignmentSubmition from './AssignmentSubmition';
import { useParams, useNavigate } from 'react-router-dom';

function AssignmentsRow({ assignment }: any) {
	const data = useParams();
	const [showPopup, submitShowPopup] = useState(false);

	const navigate = useNavigate();


	const humanReadable = DateTime.fromISO(assignment.created_at).toLocaleString(DateTime.DATE_FULL);


	const DueDate = DateTime.fromISO(assignment.due_date).toLocaleString(DateTime.DATE_FULL);

	return (
		<div className='pl-60'>
			<div className="mx-32 bg-gray-100 px-10 py-5">
				<div className="px-5 py-4 bg-white border rounded-lg shadow-lg">
					<div className="flex items-center justify-between">
						<div
							onClick={() => navigate(`/assignments/${assignment.id}/details`)}
							className="flex flex-col"
						>
							<h1 className="ml-2 font-medium text-gray-900">
								#{assignment.id} {assignment.title}
								<span className="ml-2 text-gray-500">({humanReadable})</span>
							</h1>
							<h1 className="text-red-500 mt-2">Due Date: {DueDate}</h1>
						</div>
						<h1 className=" text-red-500 mt-4">Not Submitted</h1>
					</div>
					<button
						type="submit"
						onClick={() => submitShowPopup(true)}
						className="flex justify-center m-auto font-medium text-green-500 pt-8"
					>
						Submit
					</button>
					{showPopup && <AssignmentSubmition />}
				</div>
			</div>
		</div>
	);
}

export default AssignmentsRow;