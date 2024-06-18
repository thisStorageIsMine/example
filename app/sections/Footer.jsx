'use client'
import { ListItem } from "../components/BurgerContent"
import { Wrapper } from "../components/Wrapper"

const Footer = () => {
    return (
        <footer className="pt-[50px]  bg-green text-[#f3f5f4] nunito">
            <Wrapper className='sm:flex-row sm:flex-wrap sm:gap-10 lg:justify-between'>
                <div className="sm:flex-[1_1_280px]">
                    <h3 className="font-bold text-[20px]/[140%]">Компания РумТибет</h3>

                    <p className="text-[14px]/[143%] text-white opacity-20 mt-4">
                        Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney.
                    </p>

                    <div className="mt-[30px] flex gap-6 text-[14px]/[129%] font-semibold">
                        <a className="underline" href="mailto: info@domain.com">info@domain.com</a>
                        <a className="underline" href="tel: +71234567890">+7 (123) 456-78-90</a>
                    </div>

                    <div className="flex gap-4 mt-[30px]">
                        <svg className="group/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className='group-hover/svg:fill-yellow cursor-pointer' d="M16 2.66663C8.63996 2.66663 2.66663 8.63996 2.66663 16C2.66663 23.36 8.63996 29.3333 16 29.3333C23.36 29.3333 29.3333 23.36 29.3333 16C29.3333 8.63996 23.36 2.66663 16 2.66663ZM22.1866 11.7333C21.9866 13.84 21.12 18.96 20.68 21.32C20.4933 22.32 20.12 22.6533 19.7733 22.6933C19 22.76 18.4133 22.1866 17.6666 21.6933C16.4933 20.92 15.8266 20.44 14.6933 19.6933C13.3733 18.8266 14.2266 18.3466 14.9866 17.5733C15.1866 17.3733 18.6 14.2666 18.6666 13.9866C18.6759 13.9442 18.6747 13.9002 18.663 13.8584C18.6514 13.8165 18.6298 13.7782 18.6 13.7466C18.52 13.68 18.4133 13.7066 18.32 13.72C18.2 13.7466 16.3333 14.9866 12.6933 17.44C12.16 17.8 11.68 17.9866 11.2533 17.9733C10.7733 17.96 9.86663 17.7066 9.18663 17.48C8.34663 17.2133 7.69329 17.0666 7.74663 16.6C7.77329 16.36 8.10663 16.12 8.73329 15.8666C12.6266 14.1733 15.2133 13.0533 16.5066 12.52C20.2133 10.9733 20.9733 10.7066 21.48 10.7066C21.5866 10.7066 21.84 10.7333 22 10.8666C22.1333 10.9733 22.1733 11.12 22.1866 11.2266C22.1733 11.3066 22.2 11.5466 22.1866 11.7333Z" fill="white" />
                        </svg>
                        <svg className="group/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className='group-hover/svg:fill-yellow cursor-pointer' d="M16.36 2.99988C8.98138 2.99988 3 8.98126 3 16.3599C3 23.7385 8.98138 29.7199 16.36 29.7199C23.7386 29.7199 29.72 23.7385 29.72 16.3599C29.72 8.98126 23.7386 2.99988 16.36 2.99988ZM21.498 18.073C21.498 18.073 22.6796 19.2392 22.9704 19.7806C22.9788 19.7917 22.9829 19.8029 22.9857 19.8084C23.104 20.0074 23.1318 20.1619 23.0734 20.2774C22.976 20.4695 22.642 20.5641 22.5279 20.5725H20.4404C20.2956 20.5725 19.9922 20.5349 19.6248 20.2816C19.3423 20.084 19.064 19.7597 18.7926 19.4438C18.3877 18.9734 18.037 18.5671 17.6835 18.5671C17.6386 18.567 17.594 18.574 17.5513 18.5879C17.2841 18.6742 16.9417 19.0555 16.9417 20.0715C16.9417 20.3888 16.6912 20.5711 16.5145 20.5711H15.5584C15.2327 20.5711 13.5363 20.4569 12.0333 18.8718C10.1935 16.9305 8.53744 13.0366 8.52352 13.0004C8.41915 12.7485 8.63486 12.6135 8.87005 12.6135H10.9784C11.2595 12.6135 11.3514 12.7847 11.4154 12.9364C11.4906 13.1131 11.7661 13.8159 12.2184 14.6064C12.9518 15.8951 13.4013 16.4183 13.7618 16.4183C13.8293 16.4175 13.8957 16.4003 13.9552 16.3682C14.4256 16.1066 14.3379 14.4296 14.317 14.0817C14.317 14.0163 14.3156 13.3316 14.0749 13.0032C13.9023 12.7652 13.6087 12.6747 13.4305 12.6413C13.5026 12.5419 13.5976 12.4612 13.7075 12.4062C14.0303 12.2447 14.6121 12.2211 15.1896 12.2211H15.5111C16.1373 12.2294 16.2988 12.2698 16.5256 12.3268C16.9849 12.4368 16.9946 12.7332 16.9542 13.7477C16.9417 14.0358 16.9292 14.3614 16.9292 14.7455C16.9292 14.829 16.925 14.9181 16.925 15.0127C16.9111 15.5291 16.8944 16.1149 17.259 16.3557C17.3066 16.3855 17.3615 16.4014 17.4177 16.4016C17.5443 16.4016 17.9256 16.4016 18.9582 14.63C19.2767 14.0598 19.5534 13.4673 19.7863 12.8571C19.8072 12.8209 19.8684 12.7095 19.9408 12.6664C19.9942 12.6392 20.0534 12.6253 20.1133 12.626H22.5919C22.8619 12.626 23.047 12.6664 23.0817 12.7708C23.143 12.9364 23.0706 13.4416 21.9392 14.9738L21.434 15.6404C20.4084 16.9847 20.4084 17.0529 21.498 18.073Z" fill="white" />
                        </svg>
                        <svg className="group/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className='group-hover/svg:fill-yellow cursor-pointer' d="M12.0533 28.72C13.3333 29.1066 14.6266 29.3333 16 29.3333C19.5362 29.3333 22.9276 27.9285 25.4281 25.4281C27.9285 22.9276 29.3333 19.5362 29.3333 16C29.3333 14.249 28.9884 12.5152 28.3184 10.8975C27.6483 9.27984 26.6662 7.80998 25.4281 6.57187C24.1899 5.33376 22.7201 4.35163 21.1024 3.68157C19.4847 3.0115 17.7509 2.66663 16 2.66663C14.249 2.66663 12.5152 3.0115 10.8975 3.68157C9.27984 4.35163 7.80998 5.33376 6.57187 6.57187C4.07138 9.07236 2.66663 12.4637 2.66663 16C2.66663 21.6666 6.22663 26.5333 11.2533 28.4533C11.1333 27.4133 11.0133 25.6933 11.2533 24.5066L12.7866 17.92C12.7866 17.92 12.4 17.1466 12.4 15.92C12.4 14.08 13.5466 12.7066 14.8533 12.7066C16 12.7066 16.5333 13.5466 16.5333 14.6266C16.5333 15.7733 15.7733 17.4133 15.3866 18.9866C15.16 20.2933 16.08 21.44 17.4133 21.44C19.7866 21.44 21.6266 18.9066 21.6266 15.3333C21.6266 12.1333 19.3333 9.94663 16.04 9.94663C12.28 9.94663 10.0666 12.7466 10.0666 15.6933C10.0666 16.84 10.44 18 11.0533 18.76C11.1733 18.84 11.1733 18.9466 11.1333 19.1466L10.7466 20.6C10.7466 20.8266 10.6 20.9066 10.3733 20.7466C8.66663 20 7.67996 17.5733 7.67996 15.6133C7.67996 11.4 10.6666 7.57329 16.4266 7.57329C21.0133 7.57329 24.5866 10.8666 24.5866 15.24C24.5866 19.8266 21.7466 23.5066 17.68 23.5066C16.3866 23.5066 15.12 22.8133 14.6666 22L13.7733 25.16C13.4666 26.3066 12.6266 27.84 12.0533 28.76V28.72Z" fill="white" />
                        </svg>
                        <svg className="group/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className='group-hover/svg:fill-yellow cursor-pointer' d="M24 8C26.76 10.72 27.8 14.52 27.1467 18.0667C27.6933 19.0267 28 20.1467 28 21.3333C28 23.1014 27.2976 24.7971 26.0474 26.0474C24.7971 27.2976 23.1014 28 21.3333 28C20.1467 28 19.0267 27.6933 18.0667 27.1467C14.52 27.8 10.72 26.76 8 24C5.24 21.28 4.2 17.48 4.85333 13.9333C4.30667 12.9733 4 11.8533 4 10.6667C4 8.89856 4.70238 7.20286 5.95262 5.95262C7.20286 4.70238 8.89856 4 10.6667 4C11.8533 4 12.9733 4.30667 13.9333 4.85333C17.48 4.2 21.28 5.24 24 8ZM16.0533 22.88C19.88 22.88 21.7867 21.04 21.7867 18.56C21.7867 16.9733 21.04 15.28 18.1467 14.6267L15.4933 14.04C14.48 13.8133 13.3333 13.5067 13.3333 12.56C13.3333 11.6 14.1333 10.9333 15.6 10.9333C18.5733 10.9333 18.2933 12.9733 19.7733 12.9733C20.5467 12.9733 21.2133 12.52 21.2133 11.7333C21.2133 9.90667 18.2933 8.53333 15.8133 8.53333C13.1333 8.53333 10.2667 9.68 10.2667 12.72C10.2667 14.1867 10.7867 15.7467 13.6667 16.4667L17.2533 17.3733C18.3333 17.64 18.6 18.24 18.6 18.8C18.6 19.7067 17.6933 20.6 16.0533 20.6C12.84 20.6 13.28 18.1333 11.56 18.1333C10.7867 18.1333 10.2267 18.6667 10.2267 19.4267C10.2267 20.9067 12 22.88 16.0533 22.88Z" fill="white" />
                        </svg>
                    </div>
                </div>

                <div className="mt-[50px] sm:flex-[1_1_280px] sm:mt-0">
                    <h3 className="font-bold text-[20px]/[140%]">Наши услуги</h3>

                    <ul className="mt-5 flex flex-col gap-4">
                        <ListItem className='text-gray'>Прогулки в горы летом</ListItem>
                        <ListItem className='text-gray'>Зимние походы в горы</ListItem>
                        <ListItem className='text-gray'>Посещение храмов в горах</ListItem>
                        <ListItem className='text-gray'>Экстремальные виды туризма</ListItem>
                        <ListItem className='text-gray'>Походы в джунглях Амазонии</ListItem>
                        <ListItem className='text-gray'>Поездка в Африку</ListItem>
                    </ul>
                </div>

                <div className="mt-[50px] sm:flex-[1_1_280px] sm:mt-0">
                    <h3 className="font-bold text-[20px]/[140%]">Важно для путешествий</h3>

                    <ul className="mt-5 flex flex-col gap-4">
                        <ListItem className='text-gray'>Что взять в долгий поход? </ListItem>
                        <ListItem className='text-gray'>Жизненно важные предметы для похода походе</ListItem>
                        <ListItem className='text-gray'>Медицинская страховка, гарантии безопасности</ListItem>
                        <ListItem className='text-gray'>Если вы врач, загляните сюда</ListItem>
                    </ul>
                </div>

            </Wrapper>


            <div className="bg-[#18121e] mt-[80px] py-4">
                <Wrapper className='gap-2 items-center sm:flex-row sm:justify-between'>
                    <p>ИП Константинопольский К.К., {new Date().getFullYear()}</p>
                    <a className="cursor-pointer underline hover:text-yellow">Политика обработки персональных данных</a>
                </Wrapper>
            </div>
        </footer>
    )
}

export { Footer }