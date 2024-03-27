import Image from 'next/image'
export default function Product() {
    return (
        <>
            <section className=''>
                <div className="absolute left-0 right-0">
                    <div className="h-48 w-48 absolute left-0 top-0">
                        <Image
                            src={'/images/sallad1.png'}
                            layout={'fill'}
                            objectFit={'contain'}
                        ></Image>
                    </div>
                    <div className="h-48 w-48 absolute right-0">
                        <Image
                            src={'/images/sallad2.png'}
                            layout={'fill'}
                            objectFit={'contain'}
                        ></Image>
                    </div>
                </div>
                <div className="text-center">
                    <div className="text-center">
                        <h3 className="uppercase text-gray-600 font-semibold leading-4">
                            Check out
                        </h3>
                        <h2 className="text-primary font-bold text-4xl italic">
                            Products
                        </h2>
                    </div>
                </div>
            </section>
        </>
    )
}
