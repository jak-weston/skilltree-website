"use client";
import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { LucideArrowRight, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import ClickAwayListener from "react-click-away-listener";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import SkLogo from "./SkLogo";
import navItems from "@/content/nav/nav";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState<string | undefined>(
    undefined
  );

  const [hoverID, setHoverID] = useState("");

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{ y: -5 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 30,
      }}
      className="w-full flex justify-between items-center py-4 shadow-sm gap-12 text-primary sticky top-0 z-50 bg-background border-b border-solid border-border"
    >
      <div className="w-full container mx-auto flex justify-between items-center px-4 ">
        {/* Logo */}
        <Link
          className="flex justify-center gap-3 items-center cursor-pointer"
          href="/"
        >
          <SkLogo fill="#eee" className="h-8 w-auto" />
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex justify-center items-center gap-8">
          {navItems.slice(0, navItems.length).map((item, index) =>
            !item.children ? (
              <Link key={index} href={item.href}>
                <span className="relative z-10 hover:underline">
                  {item.label}
                </span>
              </Link>
            ) : (
              <div
                className="relative group"
                key={index}
                onMouseLeave={() => setHoverID("")}
              >
                <div
                  className="font-body transition-all hover:text-primary cursor-pointer"
                  onMouseOver={() => setHoverID(item.label)}
                >
                  <div className="flex flex-row items-center justify-center gap-1 transition-all">
                    {item.label}
                    <FiChevronDown className="group-hover:translate-y-[2px] transition-all" />
                  </div>
                  {/*This ensures that the mouseleave won't trigger when moving the mouse directly down.*/}
                  <div className="bg-transparent h-6 w-full absolute"></div>
                </div>

                {/* Navigation bar container */}
                <AnimatePresence>
                  {hoverID === item.label && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 25,
                      }}
                      className="flex flex-col shadow-lg items-center justify-start gap-1 p-2 absolute top-[150%] left-[-110px] z-50 bg-background border border-solid border-border rounded-2xl mt-1.5  w-[300px]"
                    >
                      {item.children.map((item) => (
                        <motion.a
                          key={item.href}
                          href={item.href}
                          initial={{ opacity: 0, y: 10, rotate: 0 }}
                          animate={{ opacity: 1, y: 0, rotate: 0 }}
                          exit={{ opacity: 0, y: 10, rotate: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                          className="group relative text-md font-body transition-colors hover:text-primary py-2 hover:bg-secondary/80 w-full mx-2 rounded-xl px-2.5 group/icon"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="flex flex-row justify-start items-center gap-3 ">
                            <div className="p-2 rounded-md bg-secondary/80 border border-border border-solid group-hover/icon:text-accent transition-all">
                              <item.icon className="h-5 w-5"></item.icon>
                            </div>
                            <div className="flex flex-col">
                              <p className="font-semibold">{item.label}</p>
                              <p>{item.desc}</p>
                            </div>
                          </div>
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          )}
        </div>

        {/* CTA Button DESKTOP*/}
        <div className="hidden md:flex flex-row gap-2">
          <Link href="/download">
            <Button className="group">
              Download
              <LucideArrowRight
                className="group-hover:translate-x-0.5 text-sm transition-all"
                size={16}
              ></LucideArrowRight>
            </Button>
          </Link>
        </div>
      </div>

      {/* MOBILE MENU */}
      <ClickAwayListener onClickAway={() => setIsOpen(false)}>
        <div className="md:hidden">
          <button
            className=" rounded-full bg-secondary text-primary cursor-pointer border border-border border-solid  p-2.5"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="navigation menu button"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col shadow-md items-center justify-start gap-1 p-2 absolute top-[80%] right-[0] z-50 bg-secondary border-2 border-solid border-border rounded-2xl mt-1.5  w-full max-w-[200px]"
              >
                {navItems.map((item, index) => {
                  return item.children === undefined ? (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      initial={{ opacity: 0, y: 10, rotate: 0 }}
                      animate={{ opacity: 1, y: 0, rotate: 0 }}
                      exit={{ opacity: 0, y: 10, rotate: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                        delay: index * 0.075,
                      }}
                      className="group relative text-md font-body transition-colors hover:text-primary  py-2 hover:bg-secondary w-full mx-2 rounded-xl px-2.5"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </motion.a>
                  ) : (
                    <>
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, y: 10, rotate: 5 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        exit={{ opacity: 0, y: 10, rotate: 5 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                          delay: index * 0.075,
                        }}
                        className="group relative text-md transition-colors hover:text-primary py-2 hover:bg-secondary w-full mx-2 rounded-xl px-2.5 flex flex-col "
                      >
                        <div
                          className="flex flex-row items-center justify-between gap-1 transition-all"
                          onClick={() =>
                            setSelectedLink(
                              item.label === selectedLink
                                ? undefined
                                : item.label
                            )
                          }
                        >
                          {item.label}
                          <FiChevronDown
                            className="group-hover:translate-y-[2px] transition-all"
                            style={{
                              transform:
                                item.label === selectedLink
                                  ? "rotate(180deg)"
                                  : "rotate(0deg)",
                            }}
                          />
                        </div>
                      </motion.div>

                      <AnimatePresence>
                        <div className="flex flex-col w-full mx-2 gap-1">
                          {item.label === selectedLink &&
                            item.children.map((child, childIndex) => (
                              <motion.a
                                initial={{
                                  opacity: 0,
                                  // rotate: 5,
                                  y: 10,
                                }}
                                animate={{
                                  opacity: 1,
                                  y: 0,
                                }}
                                exit={{
                                  opacity: 0,
                                  // rotate: 5,
                                }}
                                transition={{
                                  type: "spring",
                                  stiffness: 300,
                                  damping: 30,
                                  delay: childIndex * 0.075,
                                }}
                                key={child.href}
                                href={child.href}
                                className="text-md transition-colors hover:text-primary py-2 hover:bg-secondary rounded-xl  px-3 w-full"
                                onClick={() => setIsOpen(false)}
                              >
                                <div className="flex flex-row justify-start items-center gap-2">
                                  <child.icon className="h-5 w-5"></child.icon>
                                  {child.label}
                                </div>
                              </motion.a>
                            ))}
                        </div>
                      </AnimatePresence>
                    </>
                  );
                })}

                <Link href="" className="w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    onClick={() => setIsOpen(false)}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      delay: 0.1,
                    }}
                  >
                    <Button className="group w-full">
                      Download
                      <LucideArrowRight
                        className="group-hover:translate-x-0.5 text-sm transition-all"
                        size={16}
                      ></LucideArrowRight>
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </ClickAwayListener>
    </motion.div>
  );
}
