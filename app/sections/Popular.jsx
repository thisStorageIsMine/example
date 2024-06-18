'use client'

import { Heading } from "../components/Heading"
import { Button } from "../components/Button"
import { PopularCard } from "../components/PopularCard"

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'

import { useWindowDimensions } from "../hooks/useWindowDimensions"

const Popular = () => {
    const { width, height } = useWindowDimensions()



    return (
        <section className="pt-[50px] pb-[50px] md:pb-[100px] md:pt-[80px]">
            <div className="flex flex-col mx-auto max-w-wrapper px-4 xl:px-0">

                <Heading className='text-center' h='3'>по версии отдыхающих</Heading>
                <Heading className='text-center mt-2' h='2'>Популярные направления</Heading>

                <Swiper
                    spaceBetween={20}
                    freeMode={true}
                    modules={[FreeMode]}
                    slidesPerView={width < 1000 ? 'auto' : '3'}
                    className="w-full  mt-8 md:mt-[50px]"
                >
                    {/*  Да простит меня бог*/}
                    <SwiperSlide className="max-w-[285px] sm:max-w-[380px]" >
                        <PopularCard imgURL='/popular-1.png' title='Озеро возле гор' subtitle='романтическое приключение' price='480' rating={4.9}>
                            Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в классической латинской литературе.
                        </PopularCard>
                    </SwiperSlide>
                    <SwiperSlide className="max-w-[285px] sm:max-w-[380px]" >
                        <PopularCard className='bg-center bg-[url("/popular-2.png")] bg-cover' title='Ночь в горах' subtitle='в компании друзей' price='500' rating={4.5}>
                            Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в классической латинской литературе.
                        </PopularCard>
                    </SwiperSlide>
                    <SwiperSlide className="max-w-[285px] sm:max-w-[380px]" >
                        <PopularCard className='bg-center bg-[url("/popular-3.png")] bg-cover' title='Йога в горах' subtitle='Для тех, кто заботиться о себе' price='500' rating={5.0}>
                            Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в классической латинской литературе.
                        </PopularCard>
                    </SwiperSlide>
                </Swiper>

                <Button className='mt-8 self-center' size='md' appearance='green'>Рейтинг направлений</Button>
            </div>
        </section>
    )
}

export { Popular }