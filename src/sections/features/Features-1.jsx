import Card from "../../components/cards/Cards-2";

const Features = () => {
  return (
    <section className="w-full py-16 px-6 text-primary-white">
      <div className="space-y-10">
        {/* Heading */}
        <header className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r font-ragnear from-primary-blue to-secondary-blue text-300 bg-clip-text text-transparent">
            Why Build With Our Components?
          </h2>

          <p className="text-gray-700 text-lg">
            A delightful experience for you and your users.
          </p>
        </header>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card title="Intuitive Customization">
            Our components stay out of your way. Modify behaviors, override
            styles, or extend functionality — you're always in control.
          </Card>

          <Card title="Timeless Aesthetics">
            Build beautiful interfaces with clean design principles. Use the
            prebuilt theme or craft your own visual identity.
          </Card>

          <Card title="Developer-First Components">
            Every pattern, prop, and hook is explained. With extensive guides
            and examples, you never get stuck.
          </Card>

          <Card title="Performance Optimized">
            Every component is engineered for speed, minimal re-renders, and
            buttery smooth interactions on any device.
          </Card>

          <Card title="Fully Accessible">
            Built with semantic HTML, keyboard navigation, ARIA attributes, and
            WCAG-compliant patterns — accessibility is never an afterthought.
          </Card>

          <Card title="Theme-Ready & Scalable">
            Swap colors, spacing, or typography instantly. Scale your design
            system without rewriting components.
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
