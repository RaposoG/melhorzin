import { type PropsWithChildren } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { theme } from '@/stitches.config';
import { useRouter } from 'next/router';
import NextNProgress from 'nextjs-progressbar';

export const AnimatePageTransition = ({ children }: PropsWithChildren) => {
  const { route } = useRouter();
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
      >
        <NextNProgress color={theme.colors.blue.value} />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
