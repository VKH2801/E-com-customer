import "./styles/globals.css";
import Navbar from "./sections/navbar";
import ClientOnly from "./components/ClientOnly";
import ResgisterModal from "./components/modals/registerModal";
import LoginModal from "./components/modals/loginModal";
import { ReactNode } from "react";
import Providers from "./actions/Providers";
import PostModal from "./components/modals/postModal";
import Footer from "./components/footer";
import WithdrawModal from "./components/modals/withdrawModal";
interface IProps {
  children: ReactNode;
}
export const metadata = {
  title: "Yoga Tiles",
  description: "Best practice yoga",
};

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <Providers>
        <ClientOnly>
          <PostModal />
          <LoginModal />
          <ResgisterModal />
          <WithdrawModal />
          <Navbar />
        </ClientOnly>

        <body>{children}</body>
        <ClientOnly>
          <Footer />
        </ClientOnly>
      </Providers>
    </html>
  );
}
