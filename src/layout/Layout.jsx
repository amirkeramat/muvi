import { Header } from "../components/layout";
import { Container } from "./layout.style";
import { ArrowUpOutlined } from "@ant-design/icons";
import { useState } from "react";
const Layout = ({ children }) => {
  const [showGoUp, setShowGoUp] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      setShowGoUp(true);
    } else {
      setShowGoUp(false);
    }
  });
  const goUpHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <Container>
      <Header />
      <main className="w-full h-full bg-zinc-950 ">{children}</main>
      <footer></footer>
      <i
        className={`text-orange-500 z-[999] text-4xl fixed bottom-0 left-2 bg-gray-900 rounded-full p-2  justify-center items-center ${
          showGoUp ? "flex" : "hidden"
        }`}
        onClick={goUpHandler}
      >
        <ArrowUpOutlined />
      </i>
    </Container>
  );
};

export default Layout;
