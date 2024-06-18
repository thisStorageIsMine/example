'use client'
import { Button } from "./Button"
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from "react";

const TourForm = ({ className, ...props }) => {
    const tours = [
        {
            text: 'Локации для тура',
            value: 'default'
        },
        {
            text: 'Йошкар-Ола',
            value: 'yo'
        },
        {
            text: 'Кисловодск',
            value: 'happy'
        },
        {
            text: 'Дуйлянь',
            value: 'not happy'
        },
    ];

    const humanResourses = [
        {
            text: 'Участники',
            value: 'default'
        },
        {
            text: '4',
            value: '4'
        },
        {
            text: '5',
            value: '5'
        },
        {
            text: '6',
            value: '6'
        },
    ]


    return (
        <form className={[`hidden  gap-[24px] px-[42px] py-[40px] w-full  backdrop-blur-sm bg-white/20 rounded-[10px]
                           flex-wrap lg:flex-nowrap
                            sm:flex`, className].join(' ')} {...props} >
            <Select options={tours} text='Выберите из списка' />

            <DataInput text={'Выберите дату поездки'} />

            <Select options={humanResourses} text='Минимум 4 человека' />

            <Button className={'whitespace-nowrap'} size='md' appearance='white'>
                Найти программу
            </Button>
        </form>
    )
}

export { TourForm }

export function Select({ options, text }) {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null)

    useEffect(() => {
        if (!selectRef) return;

        function handleOutsideClick(e) {
            if (selectRef.current && !selectRef.current.contains(e.target)) {
                setIsOpen(false);
            }

        }

        window.addEventListener('click', handleOutsideClick)


        return () => {
            window.removeEventListener('click', handleOutsideClick)
        }
    }, [])


    return (
        <label className="flex flex-[1_1_48%] lg:flex-[0_1_auto] flex-col gap-2 relative w-[270px] " onClick={() => setIsOpen(!isOpen)} >
            <select
                className="rounded-lg border border-[#e1e3e4] w-full appearance-none bg-transparent  text-base/[150%] text-gray font-bold nunito px-[16px] py-[14px] cursor-pointer"
                ref={selectRef}
            >
                {options.map((o, i) =>
                    <option value={o.value} disabled={!i} hidden={!i} selected={!i} key={o.value}>
                        {o.text}
                    </option>
                )}
            </select>

            <p className="font-normal text-[14px]/[150%] text-gray">
                {text}
            </p>


            <motion.span
                className="absolute right-4 top-[26px] pointer-events-none"
                style={{
                    y: '-50%'
                }}
                animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
            >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.2475 6.6574L10 12.7474L3.7525 6.6574C3.64088 6.54837 3.49103 6.48733 3.335 6.48733C3.17897 6.48733 3.02912 6.54837 2.9175 6.6574C2.86345 6.71036 2.82052 6.77356 2.7912 6.84332C2.76189 6.91308 2.74679 6.98798 2.74679 7.06365C2.74679 7.13932 2.76189 7.21422 2.7912 7.28398C2.82052 7.35374 2.86345 7.41694 2.9175 7.4699L9.56375 13.9499C9.68047 14.0637 9.83701 14.1273 10 14.1273C10.163 14.1273 10.3195 14.0637 10.4362 13.9499L17.0825 7.47115C17.1369 7.41816 17.1802 7.35479 17.2097 7.2848C17.2393 7.21481 17.2545 7.13962 17.2545 7.06365C17.2545 6.98768 17.2393 6.91248 17.2097 6.8425C17.1802 6.77251 17.1369 6.70914 17.0825 6.65615C16.9709 6.54712 16.821 6.48608 16.665 6.48608C16.509 6.48608 16.3591 6.54712 16.2475 6.65615V6.6574Z" fill="#FDFDFD" />
                </svg>
            </motion.span>
        </label>
    )
}

export function DataInput({ text }) {
    return (
        <label className="flex flex-[1_1_48%] lg:flex-[0_1_auto] flex-col gap-2 w-full max-w-[270px] ">
            <input className="bg-transparent w-[270px] rounded-lg border border-[#e1e3e4] px-[16px] py-[14px] text-base/[150%] text-gray font-bold nunito" type="date" />
            <p className="font-normal text-[14px]/[150%] text-gray">{text}</p>
        </label>
    )
}