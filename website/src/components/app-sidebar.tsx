
import { Link } from 'react-router';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton
} from "@/components/ui/sidebar"
import { ChevronDown } from "lucide-react"; // Import this icon
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible" // Ensure you have this shadcn component

import {
  Home,
  ClipboardList,
  LayoutGrid,
  PieChart,
  MousePointerClick,
  Square,
  Table,
  LayoutDashboard,
  House,
  CreditCard,
  MousePointer2,
  Copy,
  Menu,

} from "lucide-react"

export function AppSidebar() {
  return (
    <Sidebar>
      
      {/* Header */}
      <SidebarHeader>
        <div className="p-2 text-lg font-bold">
          Windmill
        </div>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent>
        <SidebarMenu>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/">
                <House/>
                Dashboard
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/forms">
                <ClipboardList />
                Forms
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/cards">
                <CreditCard />
                Cards
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/charts">
                <PieChart />
                Charts
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/buttons">
                <MousePointer2 />
                Buttons
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/modals">
                <Copy />
                Modals
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/tables">
                <Table />
                Tables
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <Collapsible className="group/collapsible">
  <SidebarMenuItem>
    <CollapsibleTrigger asChild>
      <SidebarMenuButton>
        <Menu />
        <span>Pages</span>
        <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
      </SidebarMenuButton>
    </CollapsibleTrigger>
    
    <CollapsibleContent>
      <SidebarMenuSub> {/* Use SidebarMenuSub for nested items */}
        <SidebarMenuSubItem>
          <SidebarMenuSubButton asChild>
            <Link to="/pages/login">Login</Link>
          </SidebarMenuSubButton>
        </SidebarMenuSubItem>
        <SidebarMenuSubItem>
          <SidebarMenuSubButton asChild>
            <Link to="/pages/create-account">Create account</Link>
          </SidebarMenuSubButton>
        </SidebarMenuSubItem>
        <SidebarMenuSubItem>
          <SidebarMenuSubButton asChild>
            <Link to="/pages/forgot-password">Forgot password</Link>
          </SidebarMenuSubButton>
        </SidebarMenuSubItem>
        <SidebarMenuSubItem>
          <SidebarMenuSubButton asChild>
            <Link to="/pages/Page404">404</Link>
          </SidebarMenuSubButton>
        </SidebarMenuSubItem>
        <SidebarMenuSubItem>
          <SidebarMenuSubButton asChild>
            <Link to="/pages/blank">Blank</Link>
          </SidebarMenuSubButton>
        </SidebarMenuSubItem>
      </SidebarMenuSub>
    </CollapsibleContent>
  </SidebarMenuItem>
</Collapsible>
        </SidebarMenu>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
        <button className="w-full rounded-lg bg-purple-600 px-3 py-2 text-white">
          Create account +
        </button>
      </SidebarFooter>

    </Sidebar>
  )
}