import { NavLink } from "react-router";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu.tsx";
import { useIsMobile } from "@/hooks/useIsMobile.ts";

const NavigationBar = () => {
	return (
		<NavigationMenu
			viewport={useIsMobile()}
			className="bg-gray-900 rounded-sm p-2"
		>
			<NavigationMenuList className="flex-wrap gap-4">
				<NavigationMenuItem>
					<NavigationMenuLink asChild>
						<NavLink to="/">Home</NavLink>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink asChild>
						<NavLink to="about">About</NavLink>
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default NavigationBar;
