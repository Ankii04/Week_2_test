import React, { useState } from "react"

const Catfile = () => {
    const [fact, setfact] = useState("")

    const getfact = async () => {
        const res = await fetch("https://catfact.ninja/fact")
        const data = await res.json()
        setfact(data.fact)
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow text-center">
            <h2 className="text-2xl font-bold mb-4">
                Cat Facts 🐱
            </h2>

            <button
                onClick={getfact}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
                Get New Fact
            </button>

            {fact && (
                <p className="mt-4 text-gray-700">
                    {fact}
                </p>
            )}
        </div>
    )
}

export default Catfile
