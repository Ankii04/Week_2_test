import React, { useState } from "react"

const products = [
    { id: 1, name: "Mobile", price: 15000 },
    { id: 2, name: "Fridge", price: 10000 },
    { id: 3, name: "AC", price: 30000 }
]

const ProductDashboard = () => {
    const [cart, setCart] = useState([])

    const toggleCart = (id) => {
        if (cart.includes(id)) {
            setCart(cart.filter(item => item !== id))
        } else {
            setCart([...cart, id])
        }
    }

    const total = products
        .filter(p => cart.includes(p.id))
        .reduce((sum, p) => sum + p.price, 0)

    return (
        <div className="max-w-3xl mx-auto mt-10 font-sans">
            <h1 className="text-3xl font-bold text-center mb-6">
                Product Dashboard
            </h1>

            <table className="w-full border border-gray-300 text-center">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border border-gray-300 p-3">Product Name</th>
                        <th className="border border-gray-300 p-3">Price</th>
                        <th className="border border-gray-300 p-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(p => (
                        <tr key={p.id}>
                            <td className="border border-gray-300 p-3">{p.name}</td>
                            <td className="border border-gray-300 p-3">₹ {p.price}</td>
                            <td className="border border-gray-300 p-3">
                                <button
                                    onClick={() => toggleCart(p.id)}
                                    className={`px-4 py-1 rounded text-white ${
                                        cart.includes(p.id)
                                            ? "bg-red-500 hover:bg-red-600"
                                            : "bg-green-500 hover:bg-green-600"
                                    }`}
                                >
                                    {cart.includes(p.id)
                                        ? "Remove from Cart"
                                        : "Add to Cart"}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2 className="text-xl font-semibold text-center mt-6">
                Total: ₹ {total}
            </h2>
        </div>
    )
}

export default ProductDashboard
