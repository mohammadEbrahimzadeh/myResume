import React, { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import Routes from "./Routes";
export default function App() {
  const router = useRoutes(Routes);
  useEffect(() => {}, [console.clear()]);
  return <>{router}</>;
}
