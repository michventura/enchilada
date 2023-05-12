import * as React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../features/imageSlice";

interface FilterButtonProps {
  filter:
    | "none"
    | "grayscale"
    | "contrast"
    | "brightness"
    | "sepia"
    | "saturate";
  children: React.ReactNode;
}

const FilterButton: React.FC<FilterButtonProps> = ({ filter, children }) => {
  const dispatch = useDispatch();

  const handleApplyFilter = () => {
    dispatch(setFilter(filter));
  };

  return (
    <>
    <button onClick={handleApplyFilter}>
      {children}
      {filter}
    </button>;
    </>
  )
};

export default FilterButton;
