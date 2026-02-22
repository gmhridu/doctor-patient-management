"use client";

import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  MailboxIcon,
  MapPinIcon,
  PhoneIcon,
  StethoscopeIcon,
  TwitterLogoIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Integrations", href: "#" },
      { name: "Updates", href: "#" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Partners", href: "#" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { name: "Documentation", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Webinars", href: "#" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "HIPAA Compliance", href: "#" },
      { name: "Security", href: "#" },
    ],
  },
};

const socialLinks = [
  { name: "Facebook", icon: FacebookLogoIcon, href: "#" },
  { name: "Twitter", icon: TwitterLogoIcon, href: "#" },
  { name: "LinkedIn", icon: LinkedinLogoIcon, href: "#" },
  { name: "Instagram", icon: InstagramLogoIcon, href: "#" },
];

export function Footer() {
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
  };

  return (
    <footer
      className={cn(
        "bg-card border-t border-border",
        isScrolled ? "bg-background/80" : "",
      )}
    >
      <div className="@container container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <StethoscopeIcon className="size-5" />
                </div>
                <span className="text-xl font-bold text-foreground">
                  Medicare
                </span>
              </Link>

              <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
                Modern healthcare management platform designed to streamline
                patient care and enhance clinical workflows.
              </p>

              {/* contact info */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MailboxIcon className="size-4 text-primary" />
                  <span>support@medicare.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <PhoneIcon className="size-4 text-primary" />
                  <span>1-800-MED-CARE</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPinIcon className="size-4 text-primary" />
                  <span>123 Healthcare Ave, NY 10001</span>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key}>
                <h3 className="font-semibold text-foreground mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        onClick={() => handleLinkClick(link.href)}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-border/50" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} MedConnect. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
