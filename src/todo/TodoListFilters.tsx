import React from "react";
import { atom, useRecoilState } from "recoil";

/** 필터링 된 todo 리스트 : 전체 todo 리스트에서 일부 기준에 따라
 ** 특정 항목이 필터링 된 새 리스트(예: 이미 완료된 항목 필터링)를 생성되어 파생된다.
 */
type FilterState = "Show Completed" | "Show All" | "Show Uncompleted";
export const todoListFilterState = atom<FilterState>({
  key: "todoListFilterState",
  default: "Show All"
});

export default function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const updateFilter: React.ChangeEventHandler<HTMLSelectElement> = ({
    target: { value }
  }) => {
    // upcasting always typesafe
    setFilter(value as FilterState);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
}
