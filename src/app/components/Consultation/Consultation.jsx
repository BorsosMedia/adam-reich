import Link from "next/link";
import styles from "./Consultation.module.css";

export function Consultation() {
  return (
    <article
      className={`${styles.background} text-white flex flex-col items-center justify-center text-center text-[0.8em] pt-8 pb-24 w-full px-[10vw] md:px-0`}
    >
      <h3 className="text-pink font-Organetto md:text-h5">
        GET A FREE 15 MINUTE CONSULTATION CALL
      </h3>
      <p className="my-5 px-5">
        You can book a free 15 minute consultation{" "}
        <span className="hidden md:inline font-bold">
          to talk about the process of rediscovering your best version.
        </span>
      </p>
      <Link href="https://coaching.rnvntucoaching.com/inquiry-call">
        <button className="bg-blue rounded-3xl font-bold px-[4rem] py-[1rem] hover:scale-110 transition-all ease-in-out duration-300">
          Go To The Calendar
        </button>
      </Link>
    </article>
  );
}
