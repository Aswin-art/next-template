"use client";

import Image from "next/image";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import Wrapper from "./Wrapper";
import { ChevronRight, GanttChart } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";

type Props = {};

const Navbar = (props: Props) => {
  const pathname = usePathname();
  return (
    <div className="w-full fixed top-0 left-0 right-0 z-20 p-4">
      <Wrapper>
        <div className="flex justify-between items-center gap-4 rounded-xl p-4 bg-background border border-input">
          <aside className="flex gap-2 items-center">
            <Image
              src={"/plura-logo.svg"}
              draggable={false}
              alt="logo"
              width={40}
              height={40}
            />
            <Link href={"/"} className="font-bold text-xl">
              Helvi.
            </Link>
          </aside>
          <nav className="gap-4 hidden lg:flex flex-grow justify-center items-center">
            <Link
              href={"/"}
              className={clsx("hover:text-blue-600 transition-all", {
                "text-blue-600": pathname === "/",
              })}
            >
              Beranda
            </Link>
            <Link
              href={"/posts"}
              className={clsx("hover:text-blue-600 transition-all", {
                "text-blue-600": pathname === "/posts",
              })}
            >
              Pos Sampah
            </Link>
            <Link
              href={"/communities"}
              className={clsx("hover:text-blue-600 transition-all", {
                "text-blue-600": pathname === "/communities",
              })}
            >
              Komunitas
            </Link>
            <Link
              href={"/events"}
              className={clsx("hover:text-blue-600 transition-all", {
                "text-blue-600": pathname === "/event",
              })}
            >
              Event
            </Link>
            <Link
              href={"/news"}
              className={clsx("hover:text-blue-600 transition-all", {
                "text-blue-600": pathname === "/news",
              })}
            >
              Berita
            </Link>
            <Link
              href={"/guides"}
              className={clsx("hover:text-blue-600 transition-all", {
                "text-blue-600": pathname === "/guides",
              })}
            >
              Panduan
            </Link>
          </nav>
          <aside>
            <div className="hidden lg:flex lg:gap-2 lg:items-center">
              <Link
                href={"/user"}
                className="border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md px-4 py-2 flex justify-center items-center"
              >
                Get Started
                <ChevronRight />
              </Link>
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
            <div className="block lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">
                    <GanttChart />
                  </Button>
                </SheetTrigger>
                <SheetContent className="flex flex-col justify-between">
                  <SheetHeader>
                    <div className="flex gap-2 items-center">
                      <Image
                        src={"/plura-logo.svg"}
                        draggable={false}
                        alt="logo"
                        width={40}
                        height={40}
                      />
                      <SheetTitle>Helvi Navbar Menu</SheetTitle>
                    </div>
                  </SheetHeader>
                  <nav className="gap-4 pt-10 flex flex-col flex-grow">
                    <Link
                      href={"/"}
                      className={clsx(
                        "hover:text-blue-600 hover:bg-blue-600/10 transition-all border border-input p-4 rounded-md",
                        {
                          "text-blue-600 bg-blue-600/10": pathname === "/",
                        }
                      )}
                    >
                      Beranda
                    </Link>
                    <Link
                      href={"/posts"}
                      className={clsx(
                        "hover:text-blue-600 hover:bg-blue-600/10 transition-all border border-input p-4 rounded-md",
                        {
                          "text-blue-600 bg-blue-600/10": pathname === "/posts",
                        }
                      )}
                    >
                      Pos Sampah
                    </Link>
                    <Link
                      href={"/communities"}
                      className={clsx(
                        "hover:text-blue-600 hover:bg-blue-600/10 transition-all border border-input p-4 rounded-md",
                        {
                          "text-blue-600 bg-blue-600/10":
                            pathname === "/communities",
                        }
                      )}
                    >
                      Komunitas
                    </Link>
                    <Link
                      href={"/events"}
                      className={clsx(
                        "hover:text-blue-600 hover:bg-blue-600/10 transition-all border border-input p-4 rounded-md",
                        {
                          "text-blue-600 bg-blue-600/10": pathname === "/event",
                        }
                      )}
                    >
                      Event
                    </Link>
                    <Link
                      href={"/news"}
                      className={clsx(
                        "hover:text-blue-600 hover:bg-blue-600/10 transition-all border border-input p-4 rounded-md",
                        {
                          "text-blue-600 bg-blue-600/10": pathname === "/news",
                        }
                      )}
                    >
                      Berita
                    </Link>
                    <Link
                      href={"/guides"}
                      className={clsx(
                        "hover:text-blue-600 hover:bg-blue-600/10 transition-all border border-input p-4 rounded-md",
                        {
                          "text-blue-600 bg-blue-600/10":
                            pathname === "/guides",
                        }
                      )}
                    >
                      Panduan
                    </Link>
                  </nav>
                  <SheetFooter>
                    <SheetDescription>
                      &copy; 2024 Helvi | All rights reserved
                    </SheetDescription>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </aside>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
