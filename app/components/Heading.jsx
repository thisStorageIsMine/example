

const Heading = ({ h, className, children }) => {


    switch (h) {
        case "3":
            return <h3 className={["text-[16px]/[125%] sm:text-[24px]/[83%] text-yellow font-normal", className].join(' ')}>{children}</h3>
        case '2':
            return <h2 className={["font-extrabold text-[24px]/[120%] sm:text-[32px]/[120%] text-[#18121e]", className].join(' ')}>{children}</h2>
    }
}

export { Heading }