export default function ProductMenu() {
    return (
        <>
            <div className="bg-gray-100 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
                <div className="text-center">
                    
                    <img src="images/pizza.png" className="max-h-auto max-h-24 block mx-auto" alt="pizza" />
                </div>
                <h4 className="font-semibold my-3 text-xl">Lotion</h4>
                <p className="text-gray-500 text-sm pb-2">
                    Indulge your skin in luxurious hydration with our
                    Moisturizing Lotion.
                </p>
                <button className="bg-primary text-white rounded-full px-8 py-2">
                    Add to cart
                </button>
            </div>
        </>
    )
}
