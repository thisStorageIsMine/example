import { motion } from 'framer-motion';

const navVariants = {
    closed: {
        x: "-100%"
    },
    open: {
        x: 0
    }
}


const BurgerContent = () => {

    return (
        <motion.nav
            className="fixed top-0 left-0 h-screen w-screen overflow-hidden bg-green z-40 py-[50px] px-4"
            variants={navVariants}
            transition={{
                ease: 'easeOut',
                duration: 0.5
            }}
        >
            <ul className="list-none font-normal text-[18px]/[129%] text-[#FDFDFD] nunito flex flex-col gap-4">
                <ListItem>
                    Про гида
                </ListItem>

                <ListItem>
                    Программа тура
                </ListItem>

                <ListItem>
                    Стоимость
                </ListItem>

                <ListItem>
                    Блог
                </ListItem>

                <ListItem>
                    Контакты
                </ListItem>


            </ul>
        </motion.nav>
    )
}

export function ListItem({ children }) {
    return (

        <li className='w-full'>
            <a className={`hover:text-yellow hover:underline cursor-pointer relative pl-[18px] group/a`}>
                <span className='absolute -translate-y-1/2 top-1/2 left-0' aria-hidden='true'>
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className='group-hover/a:fill-yellow' d="M5.7154 4.6098L1.26527 0.159755C1.16235 0.0567475 1.02495 0 0.878448 0C0.731945 0 0.594548 0.0567475 0.491622 0.159755L0.163901 0.487394C-0.0493491 0.700889 -0.0493491 1.04788 0.163901 1.26105L3.90078 4.99793L0.159755 8.73895C0.0568288 8.84196 0 8.97928 0 9.1257C0 9.27228 0.0568288 9.4096 0.159755 9.51269L0.487476 9.84024C0.590483 9.94325 0.727799 10 0.874302 10C1.0208 10 1.1582 9.94325 1.26113 9.84024L5.7154 5.38613C5.81857 5.2828 5.87524 5.14484 5.87491 4.99817C5.87524 4.85094 5.81857 4.71305 5.7154 4.6098Z" fill="#FDFDFD" />
                    </svg>
                </span>
                {children}
            </a>
        </li>
    )
}

export { BurgerContent }