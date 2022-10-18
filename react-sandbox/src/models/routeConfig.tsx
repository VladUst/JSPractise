import { RouteProps } from "react-router-dom"
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import { MainPage } from "../pages/MainPage/MainPage";
import { UserPage } from "../pages/UserPage/UserPage";
import { ToolsPage } from "../pages/ToolsPage/ToolsPage";
import { InfoPage } from "../pages/InfoPage/InfoPage";
import { ContactsPage } from "../pages/ContactsPage/ContactsPage";

export const RoutePath:Record<string, string> = {
    'main': '/',
    'users': '/users',
    'tools': '/tools',
    'info': '/info',
    'contacts': '/contacts',
    'notfound': '*'
}

export const routeConfig: Record<string, RouteProps> = {
    'main': {
      path: RoutePath.main,
      element: <MainPage/>
    },
    'users': {
      path: RoutePath.users,
      element: <UserPage/>
    },
    'tools': {
      path: RoutePath.tools,
      element: <ToolsPage/>
    },
    'info': {
        path: RoutePath.info,
        element: <InfoPage/>
    },
    'contacts': {
        path: RoutePath.contacts,
        element: <ContactsPage/>
    },
    'notfound': {
        path: RoutePath.notfound,
        element: <NotFoundPage/>
    },
  }