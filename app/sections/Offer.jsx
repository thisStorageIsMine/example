import { Button } from "../components/Button"

const Offer = () => {

    return (
        <section className="bg-[#f3f5f4] pt-[50px] pb-[50px] md:pt-[80px] md:pb-[100px] gap-4">
            <div className="flex justify-between mx-auto max-w-wrapper px-4 xl:px-0">
                <div className="flex flex-col nunito max-w-[580px] flex-3  lg:flex-1">
                    <h3 className="text-[16px]/[125%] sm:text-[24px]/[83%] text-yellow font-normal">Наши предложения</h3>
                    <h2 className="mt-2 font-extrabold text-[24px]/[120%] sm:text-[32px]/[120%] text-[#18121e]">Лучшие программы для тебя</h2>
                    <p className="mt-8 text-[16px]/[150%] sm:text-[18px]/[150%] text-[#18121e] md:mt-10">
                        Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа.
                    </p>

                    <ul className="flex flex-col gap-8 mt-8 list-none md:gap-10 md:mt-10">
                        <li className="relative pl-[66px] before:absolute before:bg-[url('/offer-section-list-icon-1.svg')] before:size-[50px] before:left-0">
                            <h4 className="text-[18px]/[111%] text-[#18121e] font-bold tracking-[0.01em]">Опытный гид</h4>

                            <p className="text-[14px]/[143%] font-normal mt-1">
                                Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.
                            </p>
                        </li>
                        <li className="relative pl-[66px] before:absolute before:bg-[url('/offer-section-list-icon-2.svg')] before:size-[50px] before:left-0">
                            <h4 className="text-[18px]/[111%] text-[#18121e] font-bold tracking-[0.01em]">Безопасный поход</h4>

                            <p className="text-[14px]/[143%] font-normal mt-1">
                                Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.
                            </p>
                        </li>
                        <li className="relative pl-[66px] before:absolute before:bg-[url('/offer-section-list-icon-3.svg')] before:size-[50px] before:left-0">
                            <h4 className="text-[18px]/[111%] text-[#18121e] font-bold tracking-[0.01em]">Лояльные цены</h4>

                            <p className="text-[14px]/[143%] font-normal mt-1">
                                Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.
                            </p>
                        </li>
                    </ul>

                    <Button className='self-center mt-8 md:mt-10 md:self-start' appearance='green' size='md'>
                        Стоимость программ
                    </Button>
                </div>

                <div className="hidden gap-[10px] max-w-[510px] justify-end flex-1 sm:grid sm:grid-cols-gallery-sm lg:grid-cols-gallery-md">
                    <img className="rounded-[0px_50px]" src="/offer-section-1.png" aria-hidden='true' />
                    <img className="rounded-[50px_0px]" src="/offer-section-2.png" aria-hidden='true' />
                    <img className="rounded-[50px_0px]" src="/offer-section-3.png" aria-hidden='true' />
                    <img className="rounded-[0px_50px]" src="/offer-section-4.png" aria-hidden='true' />
                </div>
            </div>
        </section>
    )
}

export { Offer }