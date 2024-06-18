'use client'
import { motion } from 'framer-motion'

const PlayButton = ({ className, ...props }) => {

    return (
        <motion.img
            className={className}
            src="/play-btn.svg"
            aria-label='Смотреть видео'
            {...props}

            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
                ease: 'easeIn',
                duration: 0.15
            }}
        />
    )
}

export { PlayButton }