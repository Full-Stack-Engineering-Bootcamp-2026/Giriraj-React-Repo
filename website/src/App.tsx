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
      {/* <div className="flex w-[calc(287px)]"> */}
      <div className="flex w-[calc(287px)]">
        <SidebarProvider>
          <AppSidebar />
        </SidebarProvider>
      </div>
      {/* Right side - 70% */}
      <div className="flex w-[calc(100%-287px)] flex-col">
        {/* <div className="w-full flex "> */}
        <div className="h-16 w-full p-0 sticky top-0 z-50 bg-background">
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
