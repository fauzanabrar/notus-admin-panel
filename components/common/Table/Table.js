import React from 'react';
import cx from 'classnames';

const Table = ({ handleDetails, handleEdit, handleDelete, THEAD_VALUE, TBODY_VALUE }) => {
  return (
    <div>
      <table className="items-center w-full bg-transparent border-collapse">
        <thead className="sticky top--1">
          <tr>
            {THEAD_VALUE.map((value, i) => {
              return (
                <th
                  key={i}
                  className="text-center px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-600 text-blueGray-200 border-blueGray-500"
                >
                  {value}
                </th>
              )
            })}
            {(handleDetails || handleEdit || handleDelete) && (
              <th
                className="text-center px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-600 text-blueGray-200 border-blueGray-500"
              />
            )}
          </tr>
        </thead>
        <tbody>
          {TBODY_VALUE.map((data, i) => {
            return (
              <tr className={i%2 === 0 ? "bg-white" : "bg-blueGray-100"}>
                {Object.keys(data).map(key => (
                  <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs p-4 font-bold">
                    {data[key]}
                  </td>
                ))}
                <td className={
                  cx("border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs p-4", {
                    'hidden': !(handleDetails || handleEdit || handleDelete)
                  })
                }>
                  {handleDetails && (
                    <button
                      className="w-full bg-emerald-500 text-white active:bg-emerald-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => handleDetails(data.id)}
                    >
                      Detail
                    </button>
                  )}
                  {handleEdit && (
                    <button
                      className="w-full bg-emerald-500 text-white active:bg-emerald-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => handleEdit(data.id)}
                    >
                      Edit
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
  )
}

export default Table