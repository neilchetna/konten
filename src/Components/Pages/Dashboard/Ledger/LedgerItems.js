export default function LedgerItems({ title }) {
  return (
    <>
      <button className="md:p-2 flex-col-reverse flex justify-center items-center rounded-md shadow-md bg-black-200 relative">
        <p className="inset-0">{title}</p>
        <p className="text-5xl">$40000</p>
      </button>
    </>
  );
}
