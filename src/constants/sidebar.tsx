import { MdDashboard, MdSettingsApplications } from "react-icons/md";
import { SiAddthis } from "react-icons/si";

export const SIDEBAR = [
  {
    title: "Dashboard",
    Icon: MdDashboard,
    path: "/",
  },
  {
    title: "Add New Client",
    Icon: SiAddthis,
    path: "/add-new-client",
  },
  {
    title: "Settings",
    Icon: MdSettingsApplications,
    path: "/settings",
  },
];
