import React from "react";

const ContactForm = () => {
  return (
    <form
      className="
      flex flex-col justify-between
      h-full
      bg-gray-900/60 backdrop-blur
      p-6
      rounded-2xl
      border border-gray-800
      hover:border-gray-600
      transition
    "
    >
      <h3 className="text-3xl md:text-4xl text-center font-semibold text-purple-500 mb-4">
        Let's Connect
      </h3>
      {/* Inputs */}
      <div className="flex flex-col gap-4">
        {/* Name */}
        <label
          htmlFor="name"
          className="flex flex-col gap-1 text-sm text-gray-300"
        >
          <span>
            Name <span className="text-red-500">*</span>
          </span>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Full name"
            required
            autoComplete="name"
            className="
              px-3 py-2
              bg-gray-800 text-gray-100
              border border-gray-700
              rounded-md
              placeholder-gray-500
              focus:outline-none
              focus:ring-2 focus:ring-purple-500
              focus:border-purple-500
            "
          />
        </label>

        {/* Email */}
        <label
          htmlFor="email"
          className="flex flex-col gap-1 text-sm text-gray-300"
        >
          <span>
            Email <span className="text-red-500">*</span>
          </span>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            autoComplete="email"
            className="
              px-3 py-2
              bg-gray-800 text-gray-100
              border border-gray-700
              rounded-md
              placeholder-gray-500
              focus:outline-none
              focus:ring-2 focus:ring-purple-500
              focus:border-purple-500
            "
          />
        </label>

        {/* Message */}
        <label
          htmlFor="message"
          className="flex flex-col gap-1 text-sm text-gray-300"
        >
          <span>
            Message <span className="text-red-500">*</span>
          </span>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Write your message..."
            className="
              px-3 py-2
              bg-gray-800 text-gray-100
              border border-gray-700
              rounded-md
              placeholder-gray-500
              resize-none
              focus:outline-none
              focus:ring-2 focus:ring-purple-500
              focus:border-purple-500
            "
          />
        </label>
      </div>

      {/* Submit pinned to bottom */}
      <div className="pt-6 flex justify-end">
        <button
          type="submit"
          className="
            bg-purple-500 hover:bg-purple-600
            text-white text-sm font-medium
            px-5 py-2.5
            rounded-md
            transition
            focus:outline-none
            focus:ring-2 focus:ring-purple-400
          "
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
