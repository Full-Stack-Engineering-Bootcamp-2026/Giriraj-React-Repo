import {
  Sidebar,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { SidebarRoutes } from "./SidebarRoutes";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <div className="flex min-h-screen m-0 p-0">
      {/* Sidebar - 30% */}
      <div className="w-[30%]">
        <SidebarProvider>
          <AppSidebar />
        </SidebarProvider>
      </div>
      {/* Right side - 70% */}
      <div className="flex w-[70%] w-full flex-col">
        {/* <div className="w-full flex "> */}
        <div className="h-16 w-full p-0">
          <Header />
        </div>
        {/* Page Content */}
        <div className="flex-1 p-6 overflow-y-auto w-full p-0">
          <SidebarRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;
