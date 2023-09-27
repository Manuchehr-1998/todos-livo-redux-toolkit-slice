import React from "react";

const Paginations = ({ todosPerpage, currentPage, totalTodos, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalTodos / todosPerpage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="flex gap-10  p-4">
        {pageNumbers.map((number) => (
          <li
            className={`border-2 p-2 ${
              currentPage === number
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-500 hover:text-white"
            }`}
            key={number}
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Paginations;
