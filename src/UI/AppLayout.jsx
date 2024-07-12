import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-custom bg-cover bg-center bg-fixed">
      <Header className="sticky top-0 z-10" />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer className="sticky bottom-0 z-10" />
    </div>
  );
}

export default AppLayout;
