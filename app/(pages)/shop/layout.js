import Footer from "./components/header-footer/Footer";
import Header from "./components/header-footer/Header";

export const metadata = {
  title: "Shopi Store",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <div className={`antialiased mx-auto`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
