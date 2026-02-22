"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  CompassIcon,
  CurrencyDollarIcon,
  FileTextIcon,
  PhoneIcon,
  StethoscopeIcon,
  TextIndentIcon,
  UsersIcon,
  type Icon,
} from "@phosphor-icons/react";

interface NavLink {
  name: string;
  href: string;
  icon?: Icon;
}

const navLinks: NavLink[] = [
  {
    name: "Features",
    href: "#features",
    icon: FileTextIcon,
  },
  {
    name: "How It Works",
    href: "#how-it-works",
    icon: CompassIcon,
  },
  {
    name: "Doctors",
    href: "#doctors",
    icon: UsersIcon,
  },
  {
    name: "Pricing",
    href: "#pricing",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: PhoneIcon,
  },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 50;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 ${isScrolled ? "bg-background/80" : ""}`}
    >
      <nav className="@container container mx-auto flex h-16 items-center justify-between px-4 @xl:px-6 @4xl:px-8">
        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-2 group">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md transition-transform group-hover:scale-105">
            <StethoscopeIcon className="size-5" />
          </div>
          <span className="font-bold text-xl text-foreground">MediCare</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden @3xl:flex @3xl:items-center @3xl:gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
            >
              {link.icon && <link.icon className="size-4" />}
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden @3xl:flex @3xl:items-center @3xl:gap-3">
          <Button variant="ghost">Sign In</Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="@3xl:hidden">
            <Button variant="ghost" size="icon" className="size-9">
              <TextIndentIcon className="size-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-full p-0">
            <SheetHeader className="sr-only">
              <SheetTitle className="sr-only">Medicare</SheetTitle>
              <SheetDescription className="sr-only">
                Your healthcare management solution
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col h-full">
              {/* mobile header */}
              <div className="flex items-center justify-between border-b p-4">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <StethoscopeIcon className="size-4" />
                  </div>
                  <span className="font-bold text-lg text-foreground">
                    MediCare
                  </span>
                </Link>
              </div>

              {/* mobile nav links */}
              <nav className="flex-1 overflow-y-auto p-4">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-3 rounded-lg px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                    >
                      {link.icon && <link.icon className="size-4" />}
                      {link.name}
                    </Link>
                  ))}
                </div>
              </nav>

              {/* mobile CTA */}
              <div className="border-t p-4">
                <div className="flex flex-col gap-2">
                  <Button variant="ghost" size="sm" className="w-full">
                    Sign In
                  </Button>
                  <Button
                    size="sm"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
