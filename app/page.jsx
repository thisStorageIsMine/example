import { Hero } from "./sections/Hero";
import { AboutTour } from "./sections/AboutTour";
import { Offer } from "./sections/Offer";
import { Popular } from "./sections/Popular";
import { Blog } from "./sections/Blog";
import { Gallery } from "./sections/Gallery";
import { Footer } from "./sections/Footer";

import 'swiper/css'

export const metadata = {
  title: 'РумТибет',
  description: 'Сайт РумТибет - это путеводитель для любителей горных местностей, предлагающий уникальные туры по Тибету. Здесь вы можете найти информацию о самых живописных трекинговых маршрутах, экскурсиях к древним монастырям и храмам, а также возможности для альпинизма и скалолазания. На сайте представлена подробная информация о каждом туре, условиях проживания и питания, а также отзывы участников. Приключения в горах Тибета ждут вас на сайте РумТибет!'
}

export default function Home() {
  return (
    <>
      <Hero />
      <AboutTour />
      <Offer />
      <Popular />
      <Blog />
      <Gallery />
      <Footer />
    </>
  );
}
