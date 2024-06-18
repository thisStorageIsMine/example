'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode } from "swiper/modules"

import { Wrapper } from "../components/Wrapper"
import { Heading } from "../components/Heading"
import { Button } from "../components/Button"

import { useWindowDimensions } from "../hooks/useWindowDimensions"
import { useMemo, useRef } from "react"

const Gallery = () => {
    const { width } = useWindowDimensions()
    const swiperRef = useRef(null)

    const enabled = width < 640;

    useMemo(() => {
        if (!swiperRef.current) return;

        swiperRef.current.swiper.enabled = enabled
    }, [enabled]);

    return (
        <section className=" py-[50px] md:pb-[100px] md:pt-[100px]">
            <Wrapper>
                <Heading h='3'>фото-отчёт</Heading>
                <Heading h='2'>Делимся впечатлениями</Heading>

                <Swiper
                    ref={swiperRef}
                    spaceBetween={20}
                    freeMode={true}
                    modules={[FreeMode]}
                    slidesPerView={'auto'}
                    className="h-[280px] w-full mt-8 md:mt-[50px] sm:h-fit sm:grid sm:grid-cols-4 "
                    enabled={enabled}
                    wrapperClass="sm:!grid sm:grid-cols-4 sm:gap-5 sm:grid-rows-[250px_250px] sm:h-fit"
                >
                    <SwiperSlide className=" flex-[0_1_280px] sm:col-span-2">
                        <img className="block w-full h-full object-cover rounded-md" src="/gallery-1.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="flex-[0_1_280px] ">
                        <img className="block w-full h-full object-cover rounded-md" src="/gallery-2.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=" flex-[0_1_280px] ">
                        <img className="block w-full h-full object-cover rounded-md" src="/gallery-3.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=" flex-[0_1_280px] ">
                        <img className="block w-full h-full object-cover rounded-md" src="/gallery-5.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="flex-[0_1_280px] sm:col-span-2">
                        <img className="block w-full h-full object-cover rounded-md" src="/gallery-4.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=" flex-[0_1_280px] ">
                        <img className="block w-full h-full object-cover rounded-md" src="/gallery-6.png" alt="" />
                    </SwiperSlide>
                </Swiper>

                <Button className='mt-8 md:mt-[50px] self-center' size='md' appearance='green'>Наш pinterest</Button>
            </Wrapper>
        </section>
    )
}

export { Gallery }