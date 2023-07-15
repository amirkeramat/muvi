import { Header } from "../components/layout";
import { Container } from "./layout.style";
const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main className="w-full h-full">{children}</main>
      <footer></footer>
    </Container>
  );
};

export default Layout;
