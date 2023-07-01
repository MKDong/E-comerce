import React, { useEffect, useState } from "react";
import { Route, Navigate, Routes, Outlet } from "react-router-dom";

// export default function Privaterouter({ children }) {
//   const user = localStorage.getItem("user");
//   if (user) {
//     return children;
//   }
//   return <Navigate to="/login" />;
// }
export default function Privaterouter() {
  const user = localStorage.getItem("user");
  if (user) {
    return <Outlet />;
  }
  return <Navigate to="/login" />;
}
