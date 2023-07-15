import tw from "tailwind-styled-components";

export const Container = tw.header`
  flex flex-col  w-full fixed z-[999] p-4 bg-gradient-to-b via-zinc-950/70
   from-zinc-950/70 to-zinc-950/50 items-center text-zinc-50
`;

export const Img = tw.img`
 h-[24px] w-[78px]
`;
export const Nav = tw.nav`
    flex justify-between items-center container
`;

export const Menu = tw.div`
hidden items-center md:flex
child:px-4 child-hover:text-orange-400

`;

export const SearchIcon = tw.i`
flex items-center justify-center text-xl cursor-pointer
`;
