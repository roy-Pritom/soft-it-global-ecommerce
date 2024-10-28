const MYProductCardLoading = () => {
  return (
    <div className="w-[242px] h-[322px] bg-gray-300 rounded-md animate-pulse">
      <h1 className="w-full h-[200px]  bg-gray-400 animate-pulse rounded-md"></h1>
      <h1 className="w-44 h-5 mx-auto bg-gray-400 animate-pulse rounded-md mt-4"></h1>
      <h1 className="w-24 h-4 mx-auto bg-gray-400 animate-pulse rounded-md mt-3"></h1>
      <div className="mt-6 px-2 flex gap-1">
        <h1 className="w-full h-7  bg-gray-400 animate-pulse rounded-md"></h1>
        <h1 className="w-full h-7  bg-gray-400 animate-pulse rounded-md "></h1>
      </div>
    </div>
  );
};

export default MYProductCardLoading;
