/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";

export function Links() {
  return (
    <>
      <li>
        <Link href="/#coaching-plans">Coaching Plans</Link>
      </li>
      <li>
        <Link href="/#one-time-plans">One-Time Plans</Link>
      </li>
      <li>
        <Link href="/#about">About Me</Link>
      </li>
      <li>
        <Link href="/#reviews">Clients' Reviews</Link>
      </li>
    </>
  );
}
