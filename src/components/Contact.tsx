import { motion } from "framer-motion";
import {
  RiMailLine,
  RiPhoneLine,
  RiLinkedinFill,
} from "@remixicon/react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6 bg-slate-950 text-primary relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-blue-500/10 blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Let’s Build Something Impactful
        </motion.h2>

        <p className="text-gray-400 max-w-2xl mb-14">
          Whether it's building scalable systems, AI-powered applications,
          or cloud-native architectures, I’m always open to meaningful
          collaborations and challenging engineering problems.
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Phone */}
          <a
            href="tel:+917755919112"
            className="p-8 transition rounded-3xl shadow-xl border border-slate-700 group"
          >
            <RiPhoneLine
              size={28}
              className="mb-4 text-green-500 group-hover:scale-110 transition"
            />
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-gray-400 text-sm">
              +91 77559 19112
            </p>
          </a>

          {/* Email */}
          <a
            href="mailto:maruti.bandagar@yahoo.com"
            className="p-8 transition rounded-3xl shadow-xl border border-slate-700 group"
          >
            <RiMailLine
              size={28}
              className="mb-4 text-red-500 group-hover:scale-110 transition"
            />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-400 text-sm">
              maruti.bandagar@yahoo.com
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/marutibandagar"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 transition rounded-3xl shadow-xl border border-slate-700 group"
          >
            <RiLinkedinFill
              size={28}
              className="mb-4 text-blue-500 group-hover:scale-110 transition"
            />
            <h3 className="font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-400 text-sm">
              Connect Professionally
            </p>
          </a>
        </div>

        {/* Optional Decorative Image */}
        {/* <div className="mt-16 flex justify-center">
          <img
            src="/images/contact-illustration.png"
            alt="Contact Illustration"
            className="w-64 opacity-70 hover:opacity-100 transition"
          />
        </div> */}
      </div>
    </section>
  );
}