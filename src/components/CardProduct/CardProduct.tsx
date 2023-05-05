import { Product } from "../../interfaces";
import { formatPrice } from "../../utils";
import classes from './CardProduct.module.css'

interface CardProductProps {
    product: Product
}
const CardProduct = ({
    product
}: CardProductProps) => {

    return (
        <div>
            <h2 className={classes.title}>{product?.name}</h2>
            <p key={product?.id}>{product?.description}</p>
            <p className={classes.price}>{formatPrice(product.price)}</p>
            {
                product.photos.map(photo => (
                    <img
                        key={photo.id}
                        width={200}
                        height={200}
                        src={photo.urlPhoto}
                    />
                ))
            }
        </div>
    )
}

export default CardProduct;
