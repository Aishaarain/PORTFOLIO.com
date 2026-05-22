
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding bg-[#0a001a]">
      <div className="w-full h-full md:px-10 px-5">
        {/* TitleHeader with neon style */}
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />

        <div className="grid-12-cols mt-16 gap-8">
          {/* Form */}
          <div className="xl:col-span-5">
            <div className="flex-center rounded-xl p-10 border border-[#00ffff] shadow-[0_0_20px_#00ffff] backdrop-blur-md">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-6"
              >
                {/* Name */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-[#00ffff] font-semibold mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                    className="px-4 py-2 rounded-lg bg-[#02010a] border border-[#00ffff] text-white focus:outline-none focus:ring-2 focus:ring-[#00ffff] focus:ring-opacity-75 transition"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-[#f3f3f4] font-semibold mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                    className="px-4 py-2 rounded-lg bg-[#02010a] border border-[#f3f3f4] text-white focus:outline-none focus:ring-2 focus:ring-[#8a79ff] focus:ring-opacity-75 transition"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-[#f3f3f4] font-semibold mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                    className="px-4 py-2 rounded-lg bg-[#02010a] border border-[#f3f3f4] text-white focus:outline-none focus:ring-2 focus:ring-[#8a79ff] focus:ring-opacity-75 transition"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group relative w-full px-6 py-3 mt-4 rounded-lg bg-gradient-to-r from-[#00ffff] via-[#7f00ff] to-[#8a79ff] text-white font-semibold shadow-[0_0_15px_#00ffff] hover:cursor-pointer hover:shadow-[0_0_40px_#8a79ff] transition-all"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          {/* 3D Model */}
          <div className="xl:col-span-7 min-h-96">
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-[0_0_25px_#00ffff] hover:shadow-[0_0_40px_#ff00ff] transition">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
