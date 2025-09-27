"use client";
import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import ClickAwayListener from "react-click-away-listener";
import Link from "next/link";
import { useState } from "react";
import SkLogo from "./SkLogo";
import navItems from "@/content/nav/nav";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        exit={{ y: -5 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
        }}
        className="w-full flex justify-between items-center py-4 gap-12 text-primary glass-nav"
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
            {navItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <span className="relative z-10 hover:text-blue-300 transition-colors duration-300">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button className="glass-button text-white hover:text-white font-bold shadow-lg hover:shadow-blue-500/25" asChild>
              <a href="https://apps.apple.com/us/app/rep-ai/id6749606746?itscg=30200&itsct=apps_box_badge&mttnsubad=6749606746" target="_blank" rel="noopener noreferrer">
                Download
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="glass-button"
              data-menu-button
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
              className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm border border-white/20 rounded-2xl mt-2 mx-4 shadow-lg"
            >
              <ClickAwayListener onClickAway={(e) => {
                // Don't close if clicking on the menu button
                if (e.target && (e.target as Element).closest('[data-menu-button]')) {
                  return;
                }
                setIsOpen(false);
              }}>
                <div className="p-4 space-y-2">
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block py-3 px-4 text-white hover:text-blue-300 hover:bg-white/10 transition-colors rounded-xl"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-white/10 mt-2">
                    <Button className="w-full glass-button text-white hover:text-white font-bold shadow-lg hover:shadow-blue-500/25" asChild>
                      <a href="https://apps.apple.com/us/app/rep-ai/id6749606746?itscg=30200&itsct=apps_box_badge&mttnsubad=6749606746" target="_blank" rel="noopener noreferrer">
                        Download
                      </a>
                    </Button>
                  </div>
                </div>
              </ClickAwayListener>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
