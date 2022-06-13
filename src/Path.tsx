import { Route, Routes, Navigate } from "react-router-dom";
import Assignments from "./Assignments";
import Lectures from "./Lectures";
import MainLayout from "./MainLayout";


function Path() {

	return (
			<Routes>
				<Route path="/" element={<Navigate to="/lectures" />} />
				<Route path="/" element={<MainLayout />}>
					<Route path="assignments" element={<Assignments />} />
					<Route path="lectures" element={<Lectures />} />
                    </Route>
			</Routes>
	);
}

export default Path;