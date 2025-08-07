import { FaShieldHalved, FaStar } from "react-icons/fa6";
import { FaLaptop, FaQuestionCircle, FaRocket } from "react-icons/fa";

const nav = [
  {
    href: "",
    label: "Learn",
    children: [
      {
        href: "/#features",
        label: "Features",
        icon: FaStar,
        desc: "What Rep AI offers",
      },
      {
        href: "/#benefits",
        label: "Benefits",
        icon: FaRocket,
        desc: "Why use Rep AI?",
      },
      {
        href: "/#demo",
        label: "Demo",
        icon: FaLaptop,
        desc: "Explore Rep AI's features",
      },
      {
        href: "/#faq",
        label: "FAQ",
        icon: FaQuestionCircle,
        desc: "Frequently Asked Questions",
      },
      {
        href: "/privacy-policy",
        label: "Privacy & TOS",
        icon: FaShieldHalved,
        desc: "How we manage your data",
      },
    ],
  },

  { href: "/faq", label: "FAQ" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/support", label: "Support" },
  { href: "/beta-test", label: "Beta Test" },
];

export default nav;
