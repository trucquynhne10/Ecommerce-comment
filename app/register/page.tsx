'use client'
import Image from 'next/image'
import { useState } from 'react'
export default function RegisterPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function handleFormSubmit(eve: any) {
        eve.preventDefault()
        fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        })
    }
    return (
        <>
            <section className="m-8">
                <h1 className="text-center text-primary text-4xl">Register</h1>
                <form
                    className="block max-w-xs mx-auto"
                    onSubmit={handleFormSubmit}
                    action=""
                >
                    <input
                        type="email"
                        placeholder="email"
                        value={email}
                        onChange={(ev) => setEmail(ev.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(ev) => setPassword(ev.target.value)}
                    />
                    <button type="submit"> Register</button>
                    <div className="my-4 text-center text-gray-500">
                        or Login with provider
                    </div>
                    <button className="flex gap-4 justify-center">
                        <Image
                            src={'/images/gg.png'}
                            width={24}
                            height={24}
                            alt=""
                        ></Image>
                        Login with google
                    </button>
                </form>
            </section>
        </>
    )
}
