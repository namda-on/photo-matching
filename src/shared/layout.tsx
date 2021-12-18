import React from "react";

type LayoutProps = {
  children: React.ReactNode;
  relative?: boolean;
};

const Layout = ({ children, relative }: LayoutProps) => {
  return (
    <div className="flex flex-col justify-start items-center w-screen h-screen max-w-100">
      <div
        id="layout"
        className={
          relative
            ? "relative pt-2 px-4 w-full h-full max-w-layout"
            : "flex flex-col pt-2 px-4 w-full max-w-layout h-full justify-start items-start"
        }
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
