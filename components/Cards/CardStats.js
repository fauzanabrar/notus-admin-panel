import React from "react";
import PropTypes from "prop-types";
import cx from 'classnames';

export default function CardStats({
  statSubtitle,
  statTitle,
  statSecondTitle,
  statArrow,
  statPercent,
  statPercentColor,
  statDescripiron,
  statIconName,
  statIconColor,
}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-400 uppercase font-bold text-xs mb-2">
                {statSubtitle}
              </h5>
              <div className="flex gap-6">
                <div>
                  <div className="mb-2">
                    <div className="text-xs">Realisasi Bulan ini</div>
                    <div className="font-semibold text-xl text-blueGray-700">
                      <div>
                        {statTitle}
                      </div>
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="text-xs">Target Bulan ini</div>
                    <div className={cx("font-semibold text-xl", {
                      "text-emerald-500": statArrow === "up",
                      "text-red-500": statArrow === "down",
                    })}>
                      <span>
                        {statSecondTitle}
                      </span>
                      <i
                        className={
                          statArrow === "up"
                            ? "fas fa-arrow-up"
                            : statArrow === "down"
                            ? "fas fa-arrow-down"
                            : ""
                        }
                      ></i>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <div className="text-xs">Realisasi Tahun ini</div>
                    <div className="font-semibold text-xl text-blueGray-700">
                      <div>
                        {statTitle}
                      </div>
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="text-xs">Target Tahun ini</div>
                    <div className={cx("font-semibold text-xl", {
                      "text-emerald-500": statArrow === "up",
                      "text-red-500": statArrow === "down",
                    })}>
                      <span>
                        {statSecondTitle}
                      </span>
                      <i
                        className={
                          statArrow === "up"
                            ? "fas fa-arrow-up"
                            : statArrow === "down"
                            ? "fas fa-arrow-down"
                            : ""
                        }
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                  statIconColor
                }
              >
                <i className={statIconName}></i>
              </div>
            </div>
          </div>
          <p className="text-sm text-blueGray-400 mt-4">
            <span
              className={cx("mr-2", {
                "text-emerald-500": statArrow === "up",
                "text-red-500": statArrow === "down",
              })}
            >
              <span>
                {statArrow === "up" && '+'}
                {statArrow === "down" && '-'}
              </span>
              <span>{statPercent}</span>
            </span>
            <span>{statDescripiron}</span>
          </p>
        </div>
      </div>
    </>
  );
}

CardStats.defaultProps = {
  statSubtitle: "Traffic",
  statTitle: "350,897",
  statArrow: "up",
  statPercent: "3.48",
  statPercentColor: "text-emerald-500",
  statDescripiron: "Since last month",
  statIconName: "far fa-chart-bar",
  statIconColor: "bg-red-500",
};

CardStats.propTypes = {
  statSubtitle: PropTypes.string,
  statTitle: PropTypes.string,
  statArrow: PropTypes.oneOf(["up", "down"]),
  statPercent: PropTypes.string,
  // can be any of the text color utilities
  // from tailwindcss
  statPercentColor: PropTypes.string,
  statDescripiron: PropTypes.string,
  statIconName: PropTypes.string,
  // can be any of the background color utilities
  // from tailwindcss
  statIconColor: PropTypes.string,
};
