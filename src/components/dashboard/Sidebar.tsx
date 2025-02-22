import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";
import {
  Settings,
  CreditCard,
  Bell,
  User,
  LogOut,
  ChevronRight,
  Home,
  Car,
  History,
  MapPin,
} from "lucide-react";

interface SidebarProps {
  userName?: string;
  userEmail?: string;
  avatarUrl?: string;
}

const Sidebar = () => {
  const {
    userData: { name: userName, email: userEmail, avatarUrl },
  } = useUser();
  const navigate = useNavigate();

  const menuItems = [
    { icon: <Home size={20} />, label: "Dashboard", route: "/dashboard" },
    { icon: <Car size={20} />, label: "Vehicle", route: "/vehicle" },
    {
      icon: <History size={20} />,
      label: "Charging History",
      route: "/history",
    },
    { icon: <MapPin size={20} />, label: "Station Map", route: "/map" },
  ];

  const settingsItems = [
    {
      icon: <CreditCard size={20} />,
      label: "Payment Methods",
      route: "/payments",
    },
    {
      icon: <Bell size={20} />,
      label: "Notifications",
      route: "/notifications",
    },
    { icon: <Settings size={20} />, label: "Settings", route: "/settings" },
  ];

  return (
    <div className="h-full w-[280px] bg-background border-r p-4 flex flex-col">
      {/* User Profile Section */}
      <Card className="p-4 mb-6">
        <div className="flex items-center gap-3 mb-3">
          <Avatar className="h-12 w-12">
            <img src={avatarUrl} alt={userName} />
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium">{userName}</span>
            <span className="text-sm text-muted-foreground">{userEmail}</span>
          </div>
        </div>
        <Button
          variant="outline"
          className="w-full justify-between"
          onClick={() => navigate("/profile")}
        >
          <span className="flex items-center gap-2">
            <User size={16} />
            View Profile
          </span>
          <ChevronRight size={16} />
        </Button>
      </Card>

      {/* Main Navigation */}
      <nav className="space-y-1 mb-6">
        {menuItems.map((item) => (
          <Button
            key={item.route}
            variant="ghost"
            className="w-full justify-start gap-3"
            onClick={() => navigate(item.route)}
          >
            {item.icon}
            {item.label}
          </Button>
        ))}
      </nav>

      <Separator className="my-4" />

      {/* Settings Navigation */}
      <nav className="space-y-1 mb-6">
        {settingsItems.map((item) => (
          <Button
            key={item.route}
            variant="ghost"
            className="w-full justify-start gap-3"
            onClick={() => navigate(item.route)}
          >
            {item.icon}
            {item.label}
          </Button>
        ))}
      </nav>

      <div className="mt-auto">
        <Separator className="my-4" />
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-destructive hover:text-destructive hover:bg-destructive/10"
          onClick={() => navigate("/login")}
        >
          <LogOut size={20} />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
