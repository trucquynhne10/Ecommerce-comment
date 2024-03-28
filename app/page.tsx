import Header from '@/components/layout/Header'
import Hero from '@/components/layout/Hero'
import Product from '@/components/layout/Product'
import ProductMenu from '@/components/layout/ProductMenu'
import SectionHeader from '@/components/layout/SectionHeader'
export default function Home() {
    return (
        <>
            <Hero />
            <Product />
            <section className="text-center my-16">
                <SectionHeader
                    subHeader={'Our story'}
                    mainHeader={'About us'}
                />
                <div className='text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4'>
                    <p className=" mx-auto mt-4">
                        Welcome to our skincare e-commerce platform, where beauty
                        meets convenience. <br /> At <span className='text-primary'>QBeauty</span>, we're dedicated to
                        revolutionizing your skincare routine with a curated
                        selection of high-quality products tailored to your needs.
                    </p>
                    <p>From rejuvenating serums to soothing moisturizers, we strive
                        to empower you to achieve radiant, healthy skin effortlessly.</p>
                </div>
            </section>
            <section className='text-center my-8'>
                <SectionHeader subHeader={'Don\'t hesitate'} mainHeader={'Contact us'}/>
                <div className="mt-4">
                    <a className='text-1xl underline text-gray-500' href="tel: +89 0704 2022">
                        +89 0704 2022
                    </a>
                </div>
            </section>
            
        </>
    )
}
