import React from 'react';

const Add = ({handleAdd= () => {}}) => {
  return (
    <>
      <button
        className="w-24 bg-blue-400 text-white mx-4 active:bg-blue-600 text-xs font-bold uppercase py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={handleAdd}
      >
        <i
          className={
            "fas fa-plus mr-2 text-sm " 
          }
        ></i>{" "}
        Add
      </button>
    </>
  );
};

export default Add;
