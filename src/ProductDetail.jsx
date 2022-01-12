export default function ProductDetail(props) {

  // destructuring
  let { product, goToList } = props;
  let { id, name, price, description, image } = product;

  return <div className="product-detail">
    <h1>
      {name}
      <button
        className="back"
        onClick={() => goToList(0)}
      >Back</button>
    </h1> 
    <img src={image} />
    <p className="price">{price} kr</p>
    {description.split("\n\n").map((paragraph, i) =>
      <p key={i}>
        {paragraph}
      </p>)
    }
  </div>

}