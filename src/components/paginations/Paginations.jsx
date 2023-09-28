import React, { useState } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Button, IconButton } from "@mui/material";

const Paginations = ({ todosPerPage, currentPage, totalTodos, paginate }) => {
  const pageNumbers = Array.from(
    { length: Math.ceil(totalTodos / todosPerPage) },
    (_, i) => i + 1
  );

  const [active, setActive] = useState(currentPage);

  const getItemProps = (index) => ({
    variant: active == index ? "filled" : "text",
    color: "gray",
    onClick: () => {
      setActive(index);
      paginate(index);
    },
  });

  const next = () => {
    if (active === pageNumbers.length) return;
    const nextActive = active + 1;
    setActive(nextActive);
    paginate(nextActive);
  };

  const prev = () => {
    if (active === 1) return;
    const prevActive = active - 1;
    setActive(prevActive);
    paginate(prevActive);
  };

  return (
    <div className="flex items-center gap-4 mt-3 justify-center w-[80%] m-auto flex-wrap">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      {pageNumbers.map((num) => (
        <div
          key={num}
          className="flex items-center gap-2"
          onClick={(e) => {
            getItemProps(num).onClick();
          }}
        >
          <IconButton
            className={active === num ? "!bg-[blue] !text-[#fff] !rounded-[20%]" : "text"}
          >
            {num}
          </IconButton>
        </div>
      ))}
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === pageNumbers.length}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Paginations;
