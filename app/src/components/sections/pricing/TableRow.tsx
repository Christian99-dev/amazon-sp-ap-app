const TableRow = ({
  items,
  highlight,
}: {
  items: (string|number)[];
  highlight: boolean;
}) => {
  return (
    <div className={`flex ${highlight && "bg-green-200"}`}>
      {items.map((item, key) => (
        <div key={key} className="w-1/6 text-left text-[11px]">
          {item}
        </div>
      ))}
    </div>
  );
};

export default TableRow;
