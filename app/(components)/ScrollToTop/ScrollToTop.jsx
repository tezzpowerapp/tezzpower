"use client";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-[40px] right-[40px] z-[300] p-[15px]  bg-[#D1F843] text-black shadow-lg transition-all duration-300  ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      aria-label="Scroll to top"
    >
      <FaArrowRightLong size={20} className="rotate-[-90deg]" />
    </button>
  );
}
