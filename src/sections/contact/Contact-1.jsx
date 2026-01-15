import React from "react";
import ContactForm from "../../components/contact-form/contactForm-1";

const Contact = () => {
  return (
    <section className="min-h-screen bg-black flex items-center">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-stretch gap-12">
          {/* Left Content */}
          <div className="flex-1 flex flex-col justify-center gap-6">
            <small className="text-gray-500 tracking-wide uppercase">
              Contact
            </small>

            <h2 className="text-3xl md:text-5xl font-semibold font-mono leading-tight text-gray-100">
              <span className="block">Ready to begin your</span>
              <span className="block text-purple-500/90">Digital Journey?</span>
            </h2>

            <p className="text-gray-400 max-w-xl">
              Let’s talk about your ideas, goals, and how we can turn them into
              something powerful. Drop a message and let’s build something that
              actually matters.
            </p>

            <div className="relative overflow-hidden rounded-2xl max-w-xl">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                alt="Contact Us"
                className="w-full h-[280px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-black/20 rounded-2xl" />
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:flex items-center">
            <div className="h-full w-px bg-gray-700/60" />
          </div>

          {/* Mobile Divider */}
          <div className="md:hidden">
            <div className="w-full h-px bg-gray-700/60" />
          </div>

          {/* Right Form */}
          <div className="flex-1  flex justify-end">
            <div className="w-full max-w-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
