import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimationBox: React.FC<{
  children: any;
  option: number;
  styles?: any;
}> = ({ children, option, styles }) => {
  const flickerEffect = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2, // Short duration for quick flickers
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0.3, // Adjust this value to control how long the element stays visible between flickers
      },
    },
  };

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const animationList: Array<any> = [
    {
      intial: { opacity: 0, y: 30 },
      animate: { opacity: inView ? 1 : 0, y: inView ? 0 : 30 },
      transition: 0.7,
    },
    {
      intial: { opacity: 0 },
      animate: { opacity: inView ? 1 : 0 },
      transition: { delay: 0.3, duration: 2 },
    },
    {
      intial: { rotate: 0 },
      animate: { rotate: inView ? 360 : 0 },
      transition: { duration: 0.5, ease: "linear" },
    },
    {
      intial: { opacity: 0, y: 50 },
      animate: { opacity: inView ? 1 : 0, y: inView ? 0 : 30 },
      transition: { type: "spring", stiffness: 100 },
    },
    {
      whileHover: { scale: 1.1 },
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  ];

  return (
    <>
      <motion.div
        ref={ref}
        initial={animationList[option].intial}
        animate={animationList[option].animate}
        transition={animationList[option].transition}
        whileHover={animationList[option].whileHover}
        style={styles}
      >
        {children}
      </motion.div>
    </>
  );
};

export default AnimationBox;
