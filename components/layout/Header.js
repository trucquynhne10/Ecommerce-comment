import Link from 'next/link'
export default function Header() {
    return (
        <>
            <header className="flex items-center justify-between">
                <nav className="flex items-center gap-8 text-gray-400 font-semibold">
                    <Link
                        className="text-primary font-semibold text-2xl"
                        href=""
                    >
                        {' '}
                        ST Beauty
                    </Link>
                    <Link href={'/'}>Home</Link>
                    <Link href={''}>Products</Link>
                    <Link href={''}>About</Link>
                    <Link href={''}>Contact</Link>
                </nav>
                <nav className="flex items-center gap-4 text-gray-500">
                    <Link href={'/login'}> Login </Link>
                    <Link
                        href={'/register'}
                        className="bg-primary rounded-full text-white px-6 py-2"
                    >
                        Register
                    </Link>
                </nav>
            </header>
        </>
    )
}
