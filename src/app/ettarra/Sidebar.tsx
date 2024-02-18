"use client";
import { ChevronRight, HomeIcon, MessageCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils/ui";
import { Divider } from "@nextui-org/divider";
import { competitors } from "@/assets/data/CompetitiveData";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const lastPart = pathname.split("/").pop(); // Assuming the last part is the last element in the array
  const chatId = Number(lastPart);
  return (
    <div className="w-full bg-black h-full p-4 text-slate-300 border-r-1">
      <div className="flex h-full pb-20 flex-col gap-2 mt-4 overflow-auto">
        <Link href={`/ettarra`}>
          <div
            className={cn(
              "rounded-2xl p-3 text-slate-400 flex items-center transition-colors bg-gray-900",
              {
                "bg-primary text-slate-200 hover:text-white": !chatId,
              }
            )}
          >
            <p className="w-full overflow-hidden text-sm truncate whitespace-nowrap text-ellipsis">
              Ettarra
            </p>
            <HomeIcon className="ml-4" />
          </div>
        </Link>
        <Divider />
        {competitors.map((chat) => (
          <>
            <Link key={chat.id} href={`/ettarra/competitor/${chat.id}`}>
              <div
                className={cn(
                  "rounded-2xl p-3 text-slate-400 flex items-center transition-colors bg-gray-900",
                  {
                    "bg-primary text-slate-200 hover:text-white":
                      chat.id === chatId,
                    "hover:text-white": chat.id !== chatId,
                  }
                )}
              >
                <p className="w-full overflow-hidden text-sm truncate whitespace-nowrap text-ellipsis">
                  {chat.name}
                </p>
                <ChevronRight className="ml-4" />
              </div>
            </Link>
            <Divider />
          </>
        ))}
      </div>
    </div>
  );
}
