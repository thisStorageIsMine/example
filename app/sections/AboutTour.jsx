'use client'
import { Button } from "../components/Button"
import { PlayButton } from "../components/PlayButton"
import { Modal } from "../components/Modal"

import { useState } from "react"

const AboutTour = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)


    return (
        <>
            <section>
                <div className="flex flex-col gap-10 mx-auto max-w-wrapper pt-[50px] md:pt-[100px] px-4 items-center pb-[50px] md:pb-[100px] lg:flex-row">
                    <div className="flex flex-col max-w-[580px] nunito lg:order-2">
                        <h3 className="text-[16px]/[125%] sm:text-[24px]/[83%] text-yellow font-normal">О нашем походе</h3>
                        <h2 className="mt-2 font-extrabold text-[24px]/[120%] sm:text-[32px]/[120%] text-[#18121e]">Исследуйте все горные массивы мира вместе с нами</h2>

                        <p className="mt-6 text-[16px]/[150%] sm:text-[18px]/[150%] text-[#18121e]">
                            Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в классической латинской литературе.
                        </p>

                        <Button className='self-center mt-10' size='sm' appearance='green'>Программа тура</Button>
                    </div>

                    <div className="flex justify-center w-full max-w-[480px] relative lg:order-1">
                        <div>
                            <div className="relative z-20 block w-[350px] h-[400px] rounded-3xl sm:mt-24 sm:ml-12 lg:shrink-1">
                                <img className="w-full h-full" src="/about-tour-forest.png" />
                                <PlayButton
                                    className="cursor-pointer absolute top-1/2 left-1/2 z-30"
                                    style={{ x: '-50%', y: '-50%' }}
                                    onClick={() => setIsModalOpen(true)}
                                />
                            </div>
                        </div>
                        <div><img className="z-10 top-0 left-0 absolute hidden w-[350px] h-[400px] rounded-3xl sm:block" src="/about-tour-mountain.png" /></div>
                    </div>
                </div>
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/z9Sf4Sb8oYM?si=199mat9HYG2B90db&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Modal>
            </section>
        </>
    )
}

export { AboutTour }