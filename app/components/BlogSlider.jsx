'use client'
import { BlogCard } from "./BlogCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { useEffect, useRef } from "react";

const BlogSlider = () => {
    const { width } = useWindowDimensions();
    const swiperRef = useRef(null)

    useEffect(() => {
        if (!swiperRef.current) return;

        if (width > 640) {
            swiperRef.current.swiper.enabled = false;

        } else {
            swiperRef.current.swiper.enabled = true
        }

    }, [width])

    return (
        <Swiper
            ref={swiperRef}
            spaceBetween={20}
            freeMode={true}
            modules={[FreeMode]}
            slidesPerView={'auto'}
            className="w-full mt-8 md:mt-[50px]"
            wrapperClass="sm:flex-col sm:gap-4 xl:flex-row xl:flex-wrap"
        >
            <SwiperSlide className="flex-[0_1_285px] xl:flex-[1_1_480px] !h-auto">
                <BlogCard imgURL='/blog-1.png' title='Красивая Италия, какая она в реальности?' date={new Date(2024, 5, 13)}>
                    Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих условий активизации ...Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих условий активизации ...
                </BlogCard>
            </SwiperSlide>
            <SwiperSlide className="flex-[0_1_285px] xl:flex-[1_1_480px] !h-auto">
                <BlogCard imgURL='/blog-2.png' title='Долой сомнения! Весь мир открыт для вас!' date={new Date(2024, 5, 2)}>
                    Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих условий активизации ...Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих условий активизации ...
                </BlogCard>
            </SwiperSlide>
            <SwiperSlide className="flex-[0_1_285px] xl:flex-[1_1_480px]  !h-auto">
                <BlogCard imgURL='/blog-3.png' title='Как подготовиться к путешествию в одиночку?' date={new Date(2024, 4, 27)}>
                    Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих условий активизации ...Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих условий активизации ...
                </BlogCard>
            </SwiperSlide>
            <SwiperSlide className="flex-[0_1_285px] xl:flex-[1_1_480px] !h-auto">
                <BlogCard imgURL='/blog-4.png' title='Индия... летим?' date={new Date(2024, 3, 2)}>
                    Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих условий активизации ...Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих условий активизации ...
                </BlogCard>
            </SwiperSlide>
        </Swiper>


    )
}

export { BlogSlider }