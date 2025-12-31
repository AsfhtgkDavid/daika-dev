import { Route, Routes } from "react-router";
import Home from "@/pages/Home.tsx";
import About from "@/pages/About.tsx";

const AppRoutes = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
		</Routes>
	);
};

export default AppRoutes;
