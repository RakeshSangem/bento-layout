export default function ButtonWithCount({
  label,
  count,
  countType,
}: {
  label: string;
  count: number;
  countType: string;
}) {
  return (
    <div className="">
      <button className="group flex items-center gap-x-2 rounded-lg bg-white px-4 py-1.5 text-black">
        {label}
        <span className="px-2 py-1 bg-red-500 rounded-xl">{count}k</span>
      </button>
    </div>
  );
}
