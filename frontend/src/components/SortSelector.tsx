import useGameQueryStore from "../store";
import SelectorMenu from "./SelectorMenu";

const SortSelector = () => {
  const selectedSortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSelectedSortOrder = useGameQueryStore((s) => s.setSortOrder);

  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const selectedSortOrderLabel =
    "Order By: " +
    (sortOrders.find((item) => item.value === selectedSortOrder)?.label ||
      "Relevance");

  return (
    <SelectorMenu
      activeLabel={selectedSortOrderLabel}
      items={sortOrders}
      onClick={setSelectedSortOrder}
    ></SelectorMenu>
  );
};

export default SortSelector;
