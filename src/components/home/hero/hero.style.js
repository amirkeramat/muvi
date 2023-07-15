import tw from "tailwind-styled-components";

export const Container = tw.section`
bg-[image:var(--image-url)]   w-full h-screen bg-top bg-origin-content bg-cover  bg-no-repeat relative after:content-[''] after:absolute after:z-[998] after:bg-zinc-950/20 after:inset-0
`;

export const Content = tw.div`
absolute  w-full bottom-0 z-[999] p-4 flex flex-col bg-gradient-to-t via-zinc-950/70 from-zinc-950/70 to-zinc-950/40 items-center
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