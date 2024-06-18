

const BlogCard = ({ imgURL, title, children, date, ...props }) => {


    return (
        <div className={`flex flex-col h-full  group/card 
                         sm:flex-row sm:p-4 bg-[#FDFDFD]
                        `}
            {...props}
        >
            <img className="block w-full h-[280px] sm:w-[284px] sm:h-auto sm:rounded-lg" src={imgURL} aria-hidden='true' />

            <div className=" text-[#18121e] p-4 flex flex-col justify-center flex-1 rounded-b-md">
                <h5 className="hover:underline text-[20px]/[130%] font-bold md:text-[24px]/[133%] cursor-pointer">
                    <a>
                        {title}
                    </a>
                </h5>

                <p className="mt-4 text-[14px]/[143%] line-clamp-5">
                    {children}
                </p>

                <div className="mt-auto pt-4 flex justify-between font-bold text-[14px]/[143%] ">
                    <time className="text-yellow" datetime={date}>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</time>
                    <a className="text-green hover:underline">Читать статью</a>
                </div>
            </div>
        </div>
    )
}

export { BlogCard }