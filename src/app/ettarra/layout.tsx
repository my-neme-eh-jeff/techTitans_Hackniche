import Navbar from "@/components/Navbar";
import Sidebar from "./Sidebar";
import { Cmdk } from "../(home)/_components/navbar/cmdk";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="w-48 bg-gray-200">
          <Sidebar />
        </div>
        <div className="flex-1 pt-10">
          <Cmdk />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
