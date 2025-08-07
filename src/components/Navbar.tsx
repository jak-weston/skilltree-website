"use client";
import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import ClickAwayListener from "react-click-away-listener";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import SkLogo from "./SkLogo";
import navItems from "@/content/nav/nav";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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
      className="w-full flex justify-between items-center py-4 gap-12 text-primary sticky top-0 z-50 glass-nav"
    >
      <div className="w-full container mx-auto flex justify-between items-center px-4 ">
        {/* Logo */}
        <Link
          className="flex justify-center gap-3 items-center cursor-pointer"
          href="/"
        >
          <SkLogo fill="#ffffff" className="h-8 w-auto" />
          <span className="text-xl font-bold text-white">Rep AI</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex justify-center items-center gap-8">
          {navItems.slice(0, navItems.length).map((item, index) =>
            !item.children ? (
              <Link key={index} href={item.href}>
                <span className="relative z-10 hover:text-blue-300 transition-colors duration-300">
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
                  className="font-body transition-all hover:text-blue-300 cursor-pointer"
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
                      className="flex flex-col shadow-lg items-center justify-start gap-1 p-2 absolute top-[150%] left-[-110px] z-50 glass-card mt-1.5 w-[300px]"
                    >
                      {item.children.map((item, childIndex) => (
                        <motion.a
                          key={`${item.href}-${childIndex}`}
                          href={item.href}
                          initial={{ opacity: 0, y: 10, rotate: 0 }}
                          animate={{ opacity: 1, y: 0, rotate: 0 }}
                          exit={{ opacity: 0, y: 10, rotate: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                          className="group relative text-md font-body transition-colors hover:text-blue-300 py-2 hover:bg-white/10 w-full mx-2 rounded-xl px-2.5 group/icon"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="flex flex-row justify-start items-center gap-3 ">
                            <div className="p-2 rounded-md bg-white/10 border border-white/20 group-hover/icon:text-blue-300 transition-all">
                              <item.icon className="h-5 w-5"></item.icon>
                            </div>
                            <div className="flex flex-col">
                              <span className="font-semibold">{item.label}</span>
                              <span className="text-xs text-muted-foreground">
                                {item.desc}
                              </span>
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

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Button className="glass-button text-white hover:text-blue-300">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="glass-button"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute top-full left-0 right-0 glass-card border-t border-white/10"
          >
            <ClickAwayListener onClickAway={() => setIsOpen(false)}>
              <div className="p-4 space-y-4">
                {navItems.map((item, index) => (
                  <div key={index}>
                    {!item.children ? (
                      <Link
                        href={item.href}
                        className="block py-2 text-white hover:text-blue-300 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <div>
                        <div className="py-2 text-white font-semibold">
                          {item.label}
                        </div>
                        <div className="pl-4 space-y-2">
                          {item.children.map((child, childIndex) => (
                            <Link
                              key={childIndex}
                              href={child.href}
                              className="block py-1 text-sm text-muted-foreground hover:text-blue-300 transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-white/10">
                  <Button className="w-full glass-button text-white hover:text-blue-300">
                    Get Started
                  </Button>
                </div>
              </div>
            </ClickAwayListener>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
