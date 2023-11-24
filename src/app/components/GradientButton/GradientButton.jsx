import styles from "./GradientButton.module.css";
import Link from "next/link";

export function GradientButton({ content, to = "#" }) {
  return (
    <>
      {content === "Purchase" ? (
        <Link href={to}>
          <button
            className={`${styles.bg} text-white rounded-full px-[4rem] py-[1rem] font-bold hover:scale-110 transition-all duration-300 ease-in-out`}
          >
            {content}
          </button>
        </Link>
      ) : (
        <a href={to} target="_blank">
          <button
            className={`${styles.bg} text-white rounded-full px-[4rem] py-[1rem] font-bold hover:scale-110 transition-all duration-300 ease-in-out`}
          >
            {content}
          </button>
        </a>
      )}
    </>
  );
}
