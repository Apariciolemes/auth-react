import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { formatPrice } from '../../util/format'
import './style.css'

interface Product {
    title: string,
    image: string,
    brand: string,
    price: number,
    reviewScore: number
}

export function Products() {
    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        async function getProducts(): Promise<void> {
            const response = await (await api.get('/product')).data.data
            setProducts(response)
        }
        getProducts()
    }, [])

    return (
        <div className="list-product">
            <header>
                <h3>Lista de produtos</h3>
            </header>
            <div className="cards">
                {products.map(product => (
                    <div className="single-card">
                        <h2>{product.title}</h2>
                        <img src={product.image} alt={product.title} />
                        <h3>{product.brand}</h3>
                        <h4>{formatPrice(product.price)}</h4>
                        <h5>{formatPrice(product.reviewScore)}</h5>
                    </div>
                ))}
            </div>
        </div>
    )
}