'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  /** Slide direction: 'up' (default), 'left', 'right', 'fade' */
  direction?: 'up' | 'left' | 'right' | 'fade'
  /** Delay in seconds before the animation starts */
  delay?: number
  /** How much of the element must be visible to trigger (0-1) */
  threshold?: number
  className?: string
}

const directionVariants = {
  up:    { hidden: { opacity: 0, y: 48 },  visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -48 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 48 },  visible: { opacity: 1, x: 0 } },
  fade:  { hidden: { opacity: 0 },         visible: { opacity: 1 } },
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  threshold = 0.15,
  className,
}: ScrollRevealProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: threshold })
  const variants = directionVariants[direction]

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
