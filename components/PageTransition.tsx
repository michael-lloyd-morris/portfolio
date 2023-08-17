import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import { useRouter } from "next/router";

interface Props {
  children: ReactNode;
}

const variants = {
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.5,
    },
  },
  out: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.75,
    },
  },
};

const PageTransition = ({ children }: Props) => {
  const { asPath } = useRouter();

  return (
    <div className="transition-container">
      <AnimatePresence initial={false} mode={"wait"}>
        <motion.div
          key={asPath}
          variants={variants}
          animate="in"
          initial="out"
          exit="out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;
