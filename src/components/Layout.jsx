import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="bg-[#0d1117] text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet /> {/* Page content renders here */}
      </main>
      <Footer />
    </div>
  );
}
