import Image from 'next/image'
import Right from '@/components/icons/Right'
export default function Hero() {
    return (
        <>
            <div className="py-2"></div>

            <section className="hero mt-4">
                <div className="py-12">
                    <h1 className="text-4xl font-semibold">
                        Everything is better with me
                    </h1>
                    <p className="mt-4 text-gray-500">
                        Discover radiant skin with our premium skincare. Elevate
                        your beauty routine with our curated selection of
                        luxurious products.
                    </p>
                    <div className="py-2"></div>
                    <div className="flex gap-4">
                        <button className="bg-primary uppercase text-sm flex items-center gap-2 text-white px-8 py-2 rounded-full">
                            Buy now
                            <Right />
                        </button>
                        <button className="flex gap-2 text-gray-400 font-semibold py-2">
                            Learn more
                        </button>
                    </div>
                </div>
                <div className="h-15 w-15 max-h-344 relative ">
                    <Image
                        src={'/images/pizza.png'}
                        layout={'fill'}
                        objectFit={'contain'}
                        alt={'pizza'}
                    />
                </div>
            </section>
        </>
    )
}
