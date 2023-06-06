import React from "react";

import Admin from "layouts/Admin.js";
import { AccountFormModal } from "components/common/AccountFormModal";
import { ScheduleFormModal } from "components/common/ScheduleFormModal";

export default function Forms() {
  return (
    <>
      halo
      {/* <AccountFormModal isOpen={true} onClose={() => { }} /> */}
      <ScheduleFormModal isOpen={true} onClose={() => { }}  />
    </>
  );
}

Forms.layout = Admin;
