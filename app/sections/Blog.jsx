import { Wrapper } from "../components/Wrapper";
import { Heading } from "../components/Heading";
import { BlogSlider } from "../components/BlogSlider";
import { Button } from "../components/Button";

const Blog = () => {

    return (
        <section className="bg-[#f3f5f4] py-[50px] md:pb-[100px] md:pt-[100px]">
            <Wrapper>
                <Heading className='text-center' h='3'>делимся впечитлениями</Heading>
                <Heading className='text-center mt-2 ' h='2'>Блог о путешествиях</Heading>

                <BlogSlider />

                <Button className='self-center mt-8 md:mt-[50px]' size='md' appearance='green'>Другие материалы</Button>

            </Wrapper>
        </section>
    )
}

export { Blog }
