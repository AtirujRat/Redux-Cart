import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 40,
    title: "My First Book",
    description: "The first book in my life.",
  },
  {
    id: "p2",
    price: 70,
    title: "My Second Book",
    description: "The second book in my life.",
  },
  {
    id: "p3",
    price: 130,
    title: "Pencil case",
    description: "This pencil case made by myself.",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((prod) => {
          return (
            <ProductItem
              key={prod.id}
              id={prod.id}
              title={prod.title}
              price={prod.price}
              description={prod.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
