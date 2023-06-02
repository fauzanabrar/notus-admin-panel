import React from "react";

import Admin from "layouts/Admin.js";
import { DashboardViews } from "views/DashboardViews";

export default function Dashboard() {
  return (
    <>
      <DashboardViews />
    </>
  );
}

Dashboard.layout = Admin;
