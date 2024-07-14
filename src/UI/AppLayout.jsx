import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen z-50 bg-primary-bg bg-cover bg-center bg-fixed">
      <Header className="flex-shrink-0" />

      <main className="flex-grow overflow-auto">
        <Outlet />
      </main>

      <Footer className="flex-shrink-0" />
    </div>
  );
}

export default AppLayout;
