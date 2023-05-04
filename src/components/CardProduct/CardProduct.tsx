import { Product } from "../../interfaces";

interface CardProductProps {
    products: Product[]
}
const CardProduct = ({
    products
}: CardProductProps) => {

    return (
        <div className="">
            <h2>Products:</h2>
            {products.map(product => {
                return (
                    <div>
                        <h2>{product?.name}</h2>
                        <p key={product?.id}>{product?.description}</p>
                        {
                            product.photos.map(photo => (
                                <img
                                width={200}
                                height={200}
                                src={photo.urlPhoto} />
                            ))
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default CardProduct;
