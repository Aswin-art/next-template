import React from "react";
import Wrapper from "./Wrapper";
import { Separator } from "./ui/separator";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Wrapper>
      <div className="mt-40">
        <Separator />
        <div className="my-5 text-center text-muted-foreground">
          &copy; {new Date().getFullYear()} | All rights reserved
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
