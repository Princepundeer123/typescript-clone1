import MDEditor from '@uiw/react-md-editor';
import { DateTime } from 'luxon';


function LecturesRow({ lecture }: any) {

	return (
		<div className='pl-60'>
			<div className="mx-10 bg-gray-100 px-10 py-5">
				<div className="p-5 bg-white border rounded-lg shadow-lg">
					<div className="font-medium text-gray-900">
						Lecture #{lecture.id}
						<span className="ml-2 text-gray-500">({DateTime.fromISO(lecture.updated_at).toFormat('yyyy LLL dd')})</span>
					</div>
					<div className="mt-2 text-sm text-gray-500">
						Duration: 03:02:02
					</div>
					<div className="font-medium mt-3 py-2 text-base">
						<MDEditor.Markdown className='markdown' source={lecture.topic} />
					</div>
					<a
						href={lecture.recording_url}
						className="flex justify-center text-gray-500 pt-4"
					>
						Watch/Download Recording
					</a>
				</div>
			</div>
			</div>
	);
}

export default LecturesRow;
