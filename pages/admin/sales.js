import React from 'react'
import Admin from "layouts/Admin.js";
import { MyTable } from 'components/common/MyTable';

const THEAD_MOCK = [
  "Project",
  "Budget",
  "Status",
  "Users",
  "Completion",
]

const TBODY_MOCK = [
  {
    project: 'Project Pembangunan Gedung FTUH',
    budget: '$102,500 USD',
    status: 'Dalam Pengerjaan',
    users: 'Pak Dekan FTUH',
    completion: 'masih belum di kerjakan',
  },
  {
    project: 'Project Pembangunan Gedung Kedokteran',
    budget: '$102,500 USD',
    status: 'Dalam Pengerjaan',
    users: 'Pak Dekan FTUH',
    completion: 'masih belum di kerjakan',
  },
  {
    project: 'Project Pembangunan Gedung MIPA',
    budget: '$102,500 USD',
    status: 'Dalam Pengerjaan',
    users: 'Pak Dekan FTUH',
    completion: 'masih belum di kerjakan',
  },
]

const Sales = () => {
  return (
    <MyTable
      titleTable="Sales Table"
      thead={THEAD_MOCK}
      tbody={TBODY_MOCK}
    />
  )
}

Sales.layout = Admin;

export default Sales;