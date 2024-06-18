import { Button } from "./Button"

const PopularCard = ({ className, rating, price, title, subtitle, children, imgURL, ...props }) => {
    return (
        <div className={["group/card w-[285px] h-[400px]  relative overflow-hidden sm:w-full sm:max-w-[380px] sm:h-[500px] rounded-[32px]", className].join(' ')}
            {...props}
        >
            <img className="w-full h-full object-cover" src={imgURL} aria-hidden='true' />

            <span
                className={`flex gap-2 rounded-[4px_0px_0px_4px] backdrop-blur-sm bg-[rgba(253,253,253,0.4)] nunito font-bold text-[14px]/[129%] text-green
                            absolute top-9 sm:top-[50px] right-0 px-2 py-1`}
                aria-label={`Оценка тура - ${rating}`}
            >
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.99995 14.27L13.15 16.78C13.91 17.24 14.8399 16.56 14.6399 15.7L13.54 10.98L17.2099 7.80001C17.8799 7.22001 17.5199 6.12001 16.6399 6.05001L11.81 5.64001L9.91995 1.18001C9.57995 0.37001 8.41995 0.37001 8.07995 1.18001L6.18995 5.63001L1.35995 6.04001C0.479951 6.11001 0.119951 7.21001 0.789951 7.79001L4.45995 10.97L3.35995 15.69C3.15995 16.55 4.08995 17.23 4.84995 16.77L8.99995 14.27Z" fill="#F2BE22" />
                </svg>
                {rating}
            </span>

            <div className={`absolute inset-0 bg-[rgba(255,255,255,0.5)] [backdrop-filter:blur(8px)] translate-y-[330px] sm:translate-y-[400px] transition-transform duration-1000 ease-in-out
                            group-hover/card:translate-y-0 px-8 pt-4 sm:pt-[30px] pb-[20px] flex flex-col text-gray rounded-[32px_32px_0px_0px]`}>
                <div className="flex justify-between items-center nunito">
                    <div>
                        <h4 className="font-bold text-[18px]/[120%] sm:text-[24px]/[120%] ">{title}</h4>
                        <h5 className="hidden sm:inline text-[14px]/[129%] mt-2">{subtitle}</h5>
                    </div>

                    <div className="text-center rounded px-4 py-2 bg-white/30 whitespace-nowrap">
                        <p className="font-bold text-[20px]/[120%]">{price} $</p>
                    </div>
                </div>

                <p className="mt-10 text-[16px]/[150%]">
                    {children}
                </p>

                <Button className='mt-auto' size='sm' appearance='green'>
                    Программа тура
                </Button>
            </div>
        </div>
    )
}

export { PopularCard }