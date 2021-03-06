import React from "react";
import Link from "next/link";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Link href="/">
          <a style={{ fontSize: "20" }}>Home</a>
        </Link>
        <Link href="/blogs">
          <a>Blogs</a>
        </Link>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/cv">
          <a>Cv</a>
        </Link>
        <style jsx>
          {`
            a {
              font-size: 20px;
            }
            .custom-p {
              color: red;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

export default Header;
