import React from "react";
import { useColors } from "../context/colors.provider";
import { twJoin } from "tailwind-merge";

const SavedColors = ({ savedColor }) => {
  const { deleteColor } = useColors();

  return (
    <div className="flex border-2 border-zinc-800 rounded-md gap-x-3 justify-between items-center py-3 px-3 mb-3 mr-3">
      <div className="flex gap-x-3 items-center">
        <div
          style={{ backgroundColor: savedColor.color }}
          className={twJoin(`size-10 rounded-md`, `bg-[${savedColor.color}]`)}
        ></div>

        <div className="flex flex-col float-left">
          <span>
            {savedColor.name != null ? savedColor.name : savedColor.color}
          </span>
          <span className="text-gray-400">{savedColor.color}</span>
        </div>
      </div>

      <svg
        onClick={() => deleteColor(savedColor.id - 1)}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-10 text-zinc-400 flex float-right hover:text-red-900 hover:bg-zinc-900 p-3 rounded-md transition duration-200 cursor-pointer ease-out"
      >
        <path d="M3 6h18"></path>
        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
      </svg>
    </div>
  );
};

export default SavedColors;
