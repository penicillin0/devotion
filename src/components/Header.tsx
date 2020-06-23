import * as React from "react";
import Link from "next/link";

const Header: React.FC<{ pathname?: string }> = ({ pathname }) => (
  <header>
    <Link href="/">
      <a className={pathname === "/" ? "is-active" : ""}>Home</a>
    </Link>{" "}
    <Link href="/practices">
      <a className={pathname === "/practices" ? "is-active" : ""}>Practices</a>
    </Link>
  </header>
);

export default Header;
