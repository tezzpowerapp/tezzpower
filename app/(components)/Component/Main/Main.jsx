import React from "react";
import Linear from "../Linear/Linear";

const Main = ({ children, isTrue = false }) => {
  return (
    <main className="relative border border-[#14212E]">
      {children}
      {isTrue === true && (
        <Linear customClass="left-[-81px] bottom-[20px] rotate-[-57deg]" />
      )}
      {isTrue === true && (
        <Linear customClass="right-[-33px] bottom-[18px] rotate-[-6deg]" />
      )}
    </main>
  );
};

export default Main;
