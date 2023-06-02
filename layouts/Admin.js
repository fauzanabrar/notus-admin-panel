import React from "react";
import cx from 'classnames';

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

import styles from "./layouts.module.scss";


export default function Admin({ children }) {
  return (
    <>
      <Sidebar />
      <div className={cx('relative md:ml-64 bg-blueGray-100', styles.Admin__container)}>
        <AdminNavbar />
        {/* Header */}
        {/* <HeaderStats /> */}
        <div className={cx("p-4 md:px-10 mx-auto w-full flex-1", styles.Admin__childrenContainer)}>
            {children}
        </div>
        <FooterAdmin />
      </div>
    </>
  );
}
