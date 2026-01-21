import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);
   if (!totalPages) return null;
  return (
    <div className=" py-3 w-full border-t-gray-200 border-4 bottom-0 bg-white sticky ">
      <div  className="flex justify-between gap-4 w-[11/12] max-w-[800px] items-center mx-auto ">
       <div className=" space-x-3">      {page > 1 && (
          <button className="  border py-2 border-gray-300 rounded cursor-pointer px-3" onClick={() => handlePageChange(page - 1)}>Previous</button>
        )}
        {page < totalPages && (
          <button className="  border py-2 border-gray-300 rounded cursor-pointer px-3" onClick={() => handlePageChange(page + 1)}>Next</button>
        )}  </div>
   
     <p className=" font-semibold">
      Page {page} of {totalPages}
     </p>

      </div>
    </div>
  );
};

export default Pagination;
