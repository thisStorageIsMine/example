import { Header } from "../components/Header"
import { Button } from "../components/Button"
import { TourForm } from "../components/TourForm"

const Hero = () => {
    return (
        <section
            style={{
                backgroundImage: `url('/Rectangle 1.png')`
            }}
            className=" w-full pb-[82px] bg-cover lg:pb-[48px]"
        >
            <div className="mx-auto w-full max-w-wrapper px-4 xl:px-0">
                <Header />

                <h1 className="text-[28px]/[150%] break-keep next font-bold  text-gray mt-[416px] sm:text-[36px]/[150%] sm:tracking-[0.02em] md:text-[50px]/[150%]">
                    Насладитесь прогулкой в горах с командой единомышленников
                </h1>
                <TourForm className={'mt-10'} />

                <Button className='font-bold mt-8 sm:hidden' size='md' appearance='white'>
                    Найти программу
                </Button>
            </div>
        </section>
    )
}

export { Hero }