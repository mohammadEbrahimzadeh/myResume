import Home from "./Home";
const Routes = [
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/*", element: <Home /> },
];
export default Routes;
