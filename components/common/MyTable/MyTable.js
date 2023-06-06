import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import cx from 'classnames';
import Add from "../MyActionButton/Add";
import { Search } from "../Search";
import Pagination from "../Pagination/Pagination";
import { AccountFormModal } from "../AccountFormModal";

export default function MyTable({
  color,
  titleTable,
  tbody,
  handleDetails = () => {},
  // handleEdit = () => {},
  handleDelete = () => {},
}) {
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState({});


  useEffect(() => {
    console.log('isModalOpen2', isModalOpen2);
  },[isModalOpen2, selectedAccount]);

  const handleEdit = (id) => {
    setSelectedAccount(id);
    setIsModalOpen2(true);
  };
  
  
  
  return (
    <>
      {isModalOpen2 && (<AccountFormModal isOpen={isModalOpen2} onClose={() => setIsModalOpen2(false)} data={selectedAccount}/>)}
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-lg text-blueGray-700">
                {titleTable}
              </h3>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full overflow-x-auto justify-between p-4">
          <Add />
          <Search placeholder={"Cari Judul...."} />
        </div>
        <div className="block w-full overflow-x-auto flex-1">
          <table className="items-center w-full bg-transparent border-collapse table-fixed">
            <thead className="sticky top--1">
              <tr>
                <th
                  style={{ width: "6%" }}
                  className=" align-middle text-center  border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold bg-blueGray-600 text-blueGray-200 border-blueGray-500"
                >
                  No.
                </th>
                <th
                  style={{ width: "10%" }}
                  className="px-6 align-middle text-center  border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold bg-blueGray-600 text-blueGray-200 border-blueGray-500"
                >
                  Gambar
                </th>
                <th
                  style={{ width: "auto" }}
                  className="align-middle text-center border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold bg-blueGray-600 text-blueGray-200 border-blueGray-500"
                >
                  Judul
                </th>
                <th
                  style={{ width: "10%" }}
                  className="align-middle text-center  border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold bg-blueGray-600 text-blueGray-200 border-blueGray-500"
                >
                  Penulis
                </th>
                <th
                  style={{ width: "10%" }}
                  className="align-middle text-center  border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold bg-blueGray-600 text-blueGray-200 border-blueGray-500"
                >
                  Publish Date
                </th>
                <th
                  style={{ width: "9%" }}
                  className="align-middle text-center  border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold bg-blueGray-600 text-blueGray-200 border-blueGray-500"
                >
                  Status Publikasi
                </th>
                <th
                  style={{ width: "10%" }}
                  className="align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-blueGray-600 text-blueGray-200 border-blueGray-500"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {tbody.map((data, index) => {
                return (
                  <tr className="hover:bg-blueGray-300">
                    <td className="border-t-0 text-center align-middle border-l-0 border-r-0 text-xs p-4 ">
                      {index + 1}
                    </td>
                    <td className="border-t-0 align-middle text-center border-l-0 border-r-0 text-xs whitespace-normal p-2 ">
                      {data.gambar
                        ? (<img src={data.gambar} alt={data.judul} />)
                        : (<img src="/img/image-error.png" alt="error" />)
                        }
                      
                      {/* <img
                        className="mx-auto"
                        src={data.gambar}
                        style={{ width: "auto" }}
                        alt={data.judul}
                      /> */}

                    </td>
                    <td className="border-t-0 pl-4 align-middle border-l-0 border-r-0 text-sm whitespace-normal">
                      {data.judul}
                    </td>
                    <td className="border-t-0  align-middle text-center border-l-0 border-r-0 text-xs whitespace-normal p-2">
                      {data.penulis}
                    </td>
                    <td className="border-t-0  align-middle text-center border-l-0 border-r-0 text-xs  p-4">
                      {data.publishDate}
                    </td>
                    <td className="border-t-0  align-middle text-center border-l-0 border-r-0 text-xs whitespace-normal p-4">
                      {data.statusPublikasi}
                    </td>
                    <td
                      className={cx(
                        "border-t-0 pl-3 align-middle border-l-0 border-r-0 text-xs p-4",
                        {
                          hidden: !(
                            handleDetails ||
                            handleEdit ||
                            handleDelete
                          ),
                        }
                      )}
                    >
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
                          className="w-full bg-orange-500 text-white active:bg-orange-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
                );
              }
              )
              }
            </tbody>
          </table>
        </div>
        <div className="flex flex-row w-full overflow-x-auto justify-center p-4 bg-blueGray-200">
        <Pagination activePage={1} totalPages={5} />
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
