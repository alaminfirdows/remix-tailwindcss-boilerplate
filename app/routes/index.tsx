import { Link } from '@remix-run/react'

export default function Index() {
    return (
        <div className="h-screen bg-neutral-900 grid place-content-center font-['Signika_Negative']">
            <div className="text-center space-y-3">
                <h3 className="text-green-600 font-bold text-7xl">
                    Hello Remix
                </h3>
                <p className="text-gray-300 text-lg font-light">
                    Just another Remix and tailwindcss boilerplate.
                </p>
            </div>
        </div>
    )
}
