import { routeNames } from "routes/constants";
import home from "assets/icons/Home.svg";
import member from "assets/icons/Member.svg";
import members from "assets/icons/Members.svg";
import homefeed from "assets/icons/Homefeed.svg";
import inbox from "assets/icons/Inbox.svg";
import reports from "assets/icons/Reports.svg";
import resources from "assets/icons/Resources.svg";
import service from "assets/icons/Service.svg";
import events from "assets/icons/Events.svg";

export const sidebarItems = [
  {
    id: 1,
    title: "Home",
    icon: home,
    route: routeNames.dashboard.route,
  },
  {
    id: 2,
    title: "Reports",
    icon: reports,
    route: routeNames.dashboard.route,
  },
  {
    id: 3,
    title: "Member",
    icon: member,
    route: routeNames.dashboard.route,
  },
  {
    id: 4,
    title: "Members",
    icon: members,
    route: routeNames.dashboard.route,
  },
  {
    id: 5,
    title: "Inbox",
    icon: inbox,
    route: routeNames.dashboard.route,
  },
  {
    id: 6,
    title: "Homefeed",
    icon: homefeed,
    route: routeNames.login.route,
  },
  {
    id: 7,
    title: "Events",
    icon: events,
    route: routeNames.dashboard.route,
  },
  {
    id: 8,
    title: "Service",
    icon: service,
    route: routeNames.dashboard.route,
  },
  {
    id: 9,
    title: "Resources",
    icon: resources,
    route: routeNames.dashboard.route,
  },
];
