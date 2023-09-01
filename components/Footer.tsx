"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <div>
        <p>
          Copyright © 2023 - Created by{" "}
          <Link
            href={"https://github.com/prasannakarki77"}
            target="_blank"
            className=" hover:underline"
          >
            prasannakarki77
          </Link>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
