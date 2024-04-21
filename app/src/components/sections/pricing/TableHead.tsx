const TableHead = ({ items }: { items: string[] }) => {
  return (
    <div className="flex pr-[10px]">
      {items.map((item, key) => (
        <div
          key={key}
          className="w-1/6 text-left text-[12px] font-bold text-violet-800"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default TableHead;
