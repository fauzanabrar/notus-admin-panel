import React, { useState } from "react";

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';

import CardBarChart from "components/Cards/CardBarChart.js";
import CardLineChart from "components/Cards/CardLineChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import HeaderStats from "components/Headers/HeaderStats";
import CardStats from "components/Cards/CardStats";

const localizer = momentLocalizer(moment)

export default function DashboardViews() {
  const [events, setEvents] = useState([]);

  return (
    <>
      <div className="flex flex-wrap p-0 pt-12">
        <div className="w-full xl:w-4/12 mb-4 px-2">
          <CardStats
            statSubtitle="Penjualan"
            statTitle="350,897"
            statSecondTitle="350,897"
            statArrow="up"
            statPercent="3.48"
            statPercentColor="text-emerald-500"
            statDescripiron="Dari Target Bulan Ini"
            statIconName="fas fa-wallet"
            statIconColor="bg-red-500"
          />
        </div>
        <div className="w-full xl:w-4/12 mb-4 px-2">
          <CardStats
            statSubtitle="Investor"
            statTitle="350"
            statSecondTitle="310"
            statArrow="down"
            statPercent="3.48"
            statPercentColor="text-emerald-500"
            statDescripiron="Dari Target Bulan Ini"
            statIconName="fas fa-wallet"
            statIconColor="bg-red-500"
          />
        </div>
        <div className="w-full xl:w-4/12 mb-4 px-2">
          <CardStats
            statSubtitle="Customer"
            statTitle="123"
            statSecondTitle="897"
            statArrow="up"
            statPercent="3.48"
            statPercentColor="text-emerald-500"
            statDescripiron="Dari Target Bulan Ini"
            statIconName="far fa-chart-bar"
            statIconColor="bg-red-500"
          />
        </div>
        <div className="w-full xl:w-4/12 mb-4 px-2">
          <CardStats
            statSubtitle="Net Profit"
            statTitle="350,897"
            statSecondTitle="350,897"
            statArrow="up"
            statPercent="3.48"
            statPercentColor="text-emerald-500"
            statDescripiron="Dari Target Bulan Ini"
            statIconName="far fa-chart-bar"
            statIconColor="bg-red-500"
          />
        </div>
        <div className="w-full xl:w-4/12 mb-4 px-2">
          <CardStats
            statSubtitle="Aset"
            statTitle="350,897"
            statSecondTitle="350,897"
            statArrow="up"
            statPercent="3.48"
            statPercentColor="text-emerald-500"
            statDescripiron="Dari Target Bulan Ini"
            statIconName="far fa-chart-bar"
            statIconColor="bg-red-500"
          />
        </div>
        <div className="w-full xl:w-4/12 mb-4 px-2">
          <CardStats
            statSubtitle="Overview"
            statTitle="350,897"
            statSecondTitle="350,897"
            statArrow="up"
            statPercent="3.48"
            statPercentColor="text-emerald-500"
            statDescripiron="Dari Target Bulan Ini"
            statIconName="far fa-chart-bar"
            statIconColor="bg-red-500"
          />
        </div>
      </div>
      <div className="flex flex-wrap p-0 pt-12">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      {/* <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div> */}
    </>
  );
}
