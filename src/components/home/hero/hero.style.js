import tw from "tailwind-styled-components";

export const Container = tw.section`
w-full md:h-screen h-[500px] bg-top  relative
`;

export const Content = tw.div`
absolute  w-full bottom-0 z-[999] p-4 flex flex-col  items-center
`;

export const Title = tw.h1`
 flex justify-center items-center text-zinc-50 text-2xl hover:underline cursor-pointer
`;

export const Language = tw.h5`
"w-[150px]  rounded-full flex justify-center items-center text-zinc-50
`;
export const Vote = tw.h5`
" w-[100px] text-4xl rounded-full flex justify-center items-center text-orange-500
`;
export const ReleaseData = tw.h5`
""w-[150px]  rounded-full flex justify-center items-center text-zinc-50
`;