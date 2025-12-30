import Testimonials from "../../components/testimonials/Testimonials-1";
const testimonialData = [
  {
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&h=1200&fit=crop",
    quote:
      "This product has completely transformed the way I work and improved my productivity.",
    name: "Jane Doe",
    role: "Product Manager",
  },
  {
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&h=1200&fit=crop",
    quote:
      "The experience feels polished and thoughtful. Everything just works the way you expect it to.",
    name: "Mark Wilson",
    role: "UX Designer",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&h=1200&fit=crop",
    quote:
      "Performance, clarity, and speed. This is one of the rare tools that actually delivers.",
    name: "Aisha Khan",
    role: "Tech Lead",
  },
];

const Testing = () => {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center">
        <Testimonials testimonials={testimonialData} />
      </section>
    </>
  );
};

export default Testing;
