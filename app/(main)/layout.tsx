import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return <main className="h-full">{children}</main>;
};

export default layout;
