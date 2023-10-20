/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";

export function Links() {
  const hover =
    "bg-no-repeat bg-left-bottom pb-[4px] rounded-sm w-fit bg-gradient-to-r from-blue to-pink bg-[length:0%_3px] hover:bg-[length:100%_3px] transition-all ease-in-out duration-500";

  return (
    <>
      <li>
        <Link href="/#coaching-plans" className={hover}>
          Coaching Plans
        </Link>
      </li>
      <li>
        <Link href="/#one-time-plans" className={hover}>
          One-Time Plans
        </Link>
      </li>
      <li>
        <Link href="/#about" className={hover}>
          About Me
        </Link>
      </li>
      <li>
        <Link href="/#testimonials" className={hover}>
          Testimonials
        </Link>
      </li>
      {/* <li>
        <Link href="/#reviews" className={hover}>
          Clients' Reviews
        </Link>
      </li> */}
    </>
  );
}
