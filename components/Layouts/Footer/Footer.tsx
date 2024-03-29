import React from "react";
import { PiArrowLineUpRightLight } from "react-icons/pi";
import Container from "../Container/Container";
const Footer = () => {
  return (
    <div className="w-full py-8 bg-background-500  border-t border-secondary-100">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-center  ">
          <div className="uppercase tracking-[1.2px] text-sm text-white ">
            Designed & Developed By{" "}
            <a className="underline" href="https://janaka99.netlify.com">
              JANAKA
            </a>
          </div>
          <div className="flex gap-4 items-center">
            <a
              href="/privacy-policy"
              className="text-base text-white flex gap-1 items-center"
            >
              Privacy & Policy
              <PiArrowLineUpRightLight size={25} />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
