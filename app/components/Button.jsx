'use client'
import { motion } from 'framer-motion'

const Button = ({ children, size, appearance, className, ...props }) => {
    const sizes = {
        sm: 'h-[44px] px-[24px] py-[12px]',
        md: 'h-[44px] px-[24px] py-[12px] sm:h-[52px] sm:px-[36px] sm:py-[16px]'
    }

    const styles = {
        green: 'bg-green text-gray border border-green hover:bg-white hover:text-[#1a3e3e]',
        white: 'bg-gray text-[#1a3e3e] border border-gray hover:bg-green hover:text-gray'
    }

    return (
        <motion.button
            className={["text-[16px]/[125%] tracking-[0.01em] rounded nunito transition-colors duration-200", styles[appearance], sizes[size], className].join(' ')}
            whileTap={{
                scale: 0.95
            }}
            type='button'
            transition={{
                type: 'spring',
                bounce: 0.4,
                stiffness: 310,
            }}

            {...props}
        >
            {children}
        </motion.button>
    )
}

export { Button }