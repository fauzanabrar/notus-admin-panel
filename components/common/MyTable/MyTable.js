import React from "react";
import PropTypes from "prop-types";

export default function MyTable({ 
    color, 
    titleTable,
    thead,
    tbody,
    handleDetail = () => {},
    handleEdit = () => {},
    handleDelete = () => {},
}) {
    return (
        <>
            <div
                className={
                "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
                (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
                }
            >
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3
                                className="font-semibold text-lg text-blueGray-700"
                            >
                                {titleTable}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto flex-1">
                <table className="items-center w-full bg-transparent border-collapse">
                    <thead className="sticky top--1">
                        <tr>
                            {thead.map(data => {
                                return (
                                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-600 text-blueGray-200 border-blueGray-500">
                                        {data}
                                    </th>
                                )
                            })}
                            <th
                                style={{ width: '100px' }}
                                className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-600 text-blueGray-200 border-blueGray-500"
                            />
                        </tr>
                    </thead>
                    <tbody>
                    {tbody.map(data => {
                        return (
                            <tr>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {data.project}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {data.budget}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {data.status}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {data.users}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {data.completion}
                                </td>
                                <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs p-4">
                                    {handleDetail && (
                                        <button
                                            className="w-full bg-emerald-500 text-white active:bg-emerald-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => handleDetail(data.id)}
                                        >
                                            Detail
                                        </button>
                                    )}
                                    {handleEdit && (
                                        <button
                                            className="w-full bg-emerald-500 text-white active:bg-emerald-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => handleDetail(data.id)}
                                        >
                                            Detail
                                        </button>
                                    )}
                                    {handleDelete && (
                                        <button
                                            className="w-full bg-red-500 text-white active:bg-red-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => handleDelete(data.id)}
                                        >
                                            Delete
                                        </button>
                                    )}
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                </div>
            </div>
        </>
    );
}

MyTable.defaultProps = {
  color: "light",
};

MyTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
