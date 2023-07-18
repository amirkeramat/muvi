const PageLoader = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-zinc-950">
      <div className="relative w-[164px]  h-[164px]  flex justify-center items-center rounded-full">
        <div className="absolute inset-0 border-4 border-t-0 border-s-0 border-orange-500 rounded-full animate-spin "></div>
        <div className="w-[90%] h-[90%]  rounded-full bg-zinc-950 flex justify-center flex-col items-center child:py-2">
          <img className="w-[64px] h-[50px]" src="./loading-logo-1.png" />
          <img className="w-[64px] h-[50px]" src="./loading-logo-2.png" />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
