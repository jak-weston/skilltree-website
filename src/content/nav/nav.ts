import { FaB, FaShieldHalved, FaStar } from "react-icons/fa6";
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
        desc: "What Skilltree offers",
      },
      {
        href: "/#benefits",
        label: "Benefits",
        icon: FaRocket,
        desc: "Why use Skilltree?",
      },
      {
        href: "/#demo",
        label: "Demo",
        icon: FaLaptop,
        desc: "Explore Skilltree's features",
      },
      {
        href: "/#collaborate",
        label: "Join the Beta",
        icon: FaB,
        desc: "Give Skilltree feedback",
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

  { href: "/#pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
];

export default nav;
