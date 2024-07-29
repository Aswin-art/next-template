import { cn } from "@/lib/utils";
import { MobileSidebar } from "./MobileSidebar";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Header() {
  return (
    <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
      <nav className="flex h-14 items-center justify-between px-4">
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-2">
          <Image
            src={"/logo.svg"}
            draggable={false}
            alt="logo"
            width={40}
            height={40}
          />
          <Link href={"/"} className="font-bold text-xl">
            Helvi
          </Link>
        </div>
        <div className={cn("block lg:!hidden")}>
          <MobileSidebar />
        </div>

        <div className="flex items-center gap-2">
          <UserButton
            appearance={{
              elements: {
                userButtonPopoverActionButton__manageAccount: {
                  display: "none",
                },
              },
            }}
          />
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
}
