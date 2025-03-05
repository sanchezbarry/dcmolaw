'use client'
const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js
import { motion, Variants, useAnimationControls } from 'framer-motion';
import { useScroll } from 'framer-motion';
import { useEffect } from 'react';
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';

function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const ScrollToTopContainerVariants: Variants = {
    hide: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
};

export default function FloatingBackToTop() {
    const { scrollYProgress } = useScroll();
    const controls = useAnimationControls();

    useEffect(() => {
        return scrollYProgress.on('change', (latestValue) => {
            if (latestValue > 0.5) {
                controls.start('show');
            } else {
                controls.start('hide');
            }
        });
    });

    return (
        <motion.button
            className="fixed bottom-0 right-0 p-5"
            variants={ScrollToTopContainerVariants}
            initial="hide"
            animate={controls}
            onClick={scrollToTop}>
            <ArrowUpCircleIcon className="size-12 text-gray-900" />
        </motion.button>
    );
}