const ErrorPage = () => {
  return (
    <div className="h-screen w-screen bg-zinc-950 text-orange-500 flex flex-col justify-center items-center child:my-10">
      <div className="relative w-[164px]  h-[164px]  flex justify-center items-center border-4 border-t-0 border-l-0 border-b-0 border-orange-500 rounded-full ">
        <div className="w-[90%] h-[90%]  rounded-full bg-zinc-950 flex justify-center flex-col items-center child:py-2">
          <img className="w-[64px] h-[50px]" src="./loading-logo-1.png" />
          <img className="w-[64px] h-[50px]" src="./loading-logo-2.png" />
        </div>
      </div>
      <div className="mx-10 text-3xl md:text-4xl md:mx-20 leading-relaxed text-center">
        This Website use Api That Need vpn to run Please turn on your vpn and click
        <button
          className="underline mx-2 text-orange-200"
          onClick={() => window.location.reload()}
        >
          Reload
        </button>
        to Reload the page
      </div>
    </div>
  );
};

export default ErrorPage;
