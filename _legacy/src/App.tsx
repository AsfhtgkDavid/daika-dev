import Footer from "@/components/Footer.tsx";
import NavigationBar from "@/components/NavigationBar.tsx";
import AppRoutes from "@/routes/AppRoutes.tsx";
import InteractiveStrings from "@/components/InteractiveStrings.tsx";

export function App() {
	return (
		<>
			<InteractiveStrings />
			<NavigationBar />
			<div className="grow">
				<AppRoutes />
			</div>
			<Footer />
		</>
	);
}

export default App;
