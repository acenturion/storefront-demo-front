import { Product } from "../../interfaces";
import CardProduct from "../CardProduct/CardProduct";
import classes from "./ListCardsProducts.module.css"

interface ListCardsProductProps {
    products: Product[]
}
const ListCardsProduct = ({
    products,
}: ListCardsProductProps) => {
    return (
        <div className={classes.container}>
            <h2 className={classes.title}>Products</h2>
            <div className={classes.productsContainer}>
                {products.map(product => (<CardProduct key={product.id} product={product} />))}
            </div>
        </div>
    )
}

export default ListCardsProduct;