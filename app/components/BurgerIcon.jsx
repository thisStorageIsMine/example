import { motion, MotionConfig } from "framer-motion"

const upVarinats = {
    open: {
        rotate: '-45deg',
        y: -3
    },
    closed: {
        rotate: '0deg',
        y: 0
    }
}

const middleVariants = {
    open: {
        opacity: 0
    },
    closed: {
        opacity: 1
    }
}

const downVariants = {
    open: {
        rotate: '45deg',
        width: '100%',
        y: 19
    },
    closed: {
        rotate: '0deg',
        width: '50%',
        y: 16
    }
}

const BurgerIcon = ({ className, ...props }) => {

    return (
        <>
            <div
                className={["size-[30px] relative cursor-pointer z-50 lg:hidden", className].join(' ')}
                aria-label="Открыть меню"
                {...props}
            >
                <MotionConfig transition={{
                    duration: 0.5,
                    type: 'spring'
                }}>
                    <motion.span
                        variants={upVarinats}
                        className="top-0 left-0 block absolute bg-white w-full h-[3px] rounded"
                        style={{
                            originX: 1,
                            originY: 1
                        }}
                    >
                    </motion.span>
                    <motion.span
                        variants={middleVariants}
                        className=" top-0 left-0 block absolute bg-white w-full h-[3px] rounded"
                        style={{
                            y: 8
                        }}
                    ></motion.span>
                    <motion.span
                        className="top-0 right-0 block absolute bg-white w-1/2 h-[3px] rounded"
                        style={{
                            originX: 1,
                            originY: 0,
                        }}
                        variants={downVariants}
                    ></motion.span>
                </MotionConfig>

            </div>
        </>
    )
}

export { BurgerIcon }