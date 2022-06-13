import React from 'react';
import Button from './Button';


function AssignmentSubmition() {
	return (
		<div className="bg-gray-500 space-y-4 rounded-lg p-6 w-full">
      <div className="flex flex-row border-t border-b py-6 items-center"
        >
      <h1 className="text-xl font-semibold pr-5">Submission Link</h1>
			<input className="p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-yellow-500" type="text" placeholder="Submission Link"/>
      </div>
			<Button>Submit</Button>
		</div>
	);
}

export default AssignmentSubmition;
