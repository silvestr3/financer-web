import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarContainer } from "./components/sidebar";

export const HomeLayout: React.FC = () => {
	return (
		<div className="flex h-screen w-full">
			<SidebarProvider>
				<SidebarContainer />
			</SidebarProvider>
		</div>
	);
};
