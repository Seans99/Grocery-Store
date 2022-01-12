export default function Product(props) {

  // destructuring
  let { product, goToDetail } = props;
  let { id, name, price, image } = product;

  return <div className="product" onClick={() => goToDetail(id)}>
    <img src={image} />
    <h3>{name}</h3>
    <p>{price} kr</p>
  </div>
}