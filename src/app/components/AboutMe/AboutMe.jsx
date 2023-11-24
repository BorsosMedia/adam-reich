import Image from "next/image";
import aboutAdam from "../../../../public/about-adam.png";

export function AboutMe() {
  return (
    <article
      id="about"
      className="grid grid-cols-1 md:grid-cols-6 my-10 md:my-20"
    >
      <section className="col-span-2 col-start-2 place-self-center flex flex-col text-center md:text-left justify-center items-center md:items-start px-[10vw] md:px-0">
        <h2 className="font-Organetto text-h5 md:text-h4">
          About me
          <br />
          <span className="text-blue whitespace-nowrap">Adam Reich</span>
        </h2>
        <Image
          src={aboutAdam}
          alt="Adam's Picture"
          className="md:hidden mt-5 max-w-[80vw]"
        />
        <p className="my-5 text-[0.8em]">
          I&apos;m the co-owner of ReinventU Gym. With 20+ years of bodybuilding
          experience, I&apos;m an expert at helping clients exceed their limits
          to achieve their goals.
        </p>
        <p className="text-[0.8em]">
          I work with people of all fitness levels, from pros to beginners. I
          specialize in personalized training, nutrition and rehab. With my
          motivational, success-focused attitude, I know I can help you
          transform body and mind.
        </p>
      </section>
      <Image
        src={aboutAdam}
        alt="Adam's Picture"
        className="hidden md:block place-self-center col-span-2"
      />
    </article>
  );
}
