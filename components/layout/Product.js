import Image from 'next/image'
import ProductMenu from '@/components/layout/ProductMenu'
import SectionHeader from './SectionHeader'
export default function Product() {
    return (
        <>
            <section className="">
                <div className="absolute -left-12 -right-12 w-full">
                    <div className="h-48 w-48 absolute left-0 -top-[70px] -z-10">
                        <Image
                            src={'/images/sallad1.png'}
                            layout={'fill'}
                            objectFit={'contain'}
                        ></Image>
                    </div>
                    <div className="h-48 w-48 absolute -right-24 -top-[70px] -z-10">
                        <Image
                            src={'/images/sallad2.png'}
                            layout={'fill'}
                            objectFit={'contain'}
                        ></Image>
                    </div>
                </div>

                <div className="text-center">
                    <SectionHeader subHeader={'check out'} mainHeader={'Product'}/>
                </div>

                <div className="pt-6 grid grid-cols-3 gap-4">
                    <ProductMenu />
                    <ProductMenu />
                    <ProductMenu />
                    <ProductMenu />
                    <ProductMenu />
                    <ProductMenu />
                    <ProductMenu />
                    <ProductMenu />
                    <ProductMenu />
                </div>
            </section>
        </>
    )
}
