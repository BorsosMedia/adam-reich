import { TestimonialsSlider } from "../TestimonialsSlider/TestimonialsSlider";

export function Testimonials() {
  return (
    <article id="testimonials" className="my-10">
      <h2 className="text-blue bg-black font-Organetto text-center py-5 md:py-10 md:text-h5">
        <span className="whitespace-nowrap">My clients</span>{" "}
        <span className="text-pink whitespace-nowrap">and their progress</span>
      </h2>

      <div className="my-10">
        <TestimonialsSlider />
      </div>
    </article>
  );
}
