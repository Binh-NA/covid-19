import { Toaster } from "react-hot-toast";

import { NavBar } from "./nav-bar";
import layoutCss from "./layout.module.css";

export const Layout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <div className="min-h-screen font-Source-Sans-Pro">
      <NavBar />

      <div className={`relative flex w-full ${layoutCss.bodySticky}`}>
        {children}
      </div>

      <Toaster />
    </div>
  );
}