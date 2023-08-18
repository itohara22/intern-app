"use client";
import { motion, easeOut } from "framer-motion";

const fadeAnimation = {
  initial: {},
  animate: {
    transition: {
      ease: easeOut,
      duration: 2,
      staggerChildren: 0.3,
    },
  },
};

const fadeAnimationChild = {
  initial: {
    x: 200,
    scale: 0,
  },
  animate: {
    scale: 1,
    x: 0,
  },
};

const Privacy = () => {
  return (
    <div className="mt-20 grid place-items-center min-h-[85vh]">
      <motion.div
        variants={fadeAnimation}
        initial="initial"
        whileInView="animate"
        className="text-center"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeAnimationChild}>
          <p className="text-xs font-semibold">Lorem ipsum dolor sit.</p>
          <p className="font-bold text-3xl mt-2 mb-6">
            Lorem ipsum dolor sit amet.
          </p>
        </motion.div>
        <motion.p
          variants={fadeAnimationChild}
          className="text-sm max-w-[50vw]"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Assumenda,Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </motion.p>
        <motion.div variants={fadeAnimationChild}>
          <p className="font-semibold mt-4 mb-8">With Love, Shubham</p>
          <a
            href="https://www.linkedin.com/in/shubham-ghogle-25743a258/"
            target="_blank"
            className="bg-black text-white px-4 py-2 rounded-full hover:bg-blue-600  "
          >
            LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Privacy;
