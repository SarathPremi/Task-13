import PropTypes from "prop-types";

export default function PriceCard(props = {}) {
  const { width, height, background, title, price, items } = props;

  return (
    <div
      style={{
        width: width,
        height: height,
        background: background,
      }}
      className="PriceCard"
    >
      <div>
        <h6 className="type">{title}</h6>
        <h2 className="content">{price}</h2>
        <h6 className="type">______________________________________</h6>
        <p className="items">
          {items.map((element, index) => (
            <h3
              key={index}
              style={{ filter: element.isAvailable ? "none" : "blur(0.6px)" }}
            >
              {element.isAvailable ? "✔️" : "✖️"} {element.name}
            </h3>
          ))}
        </p>
        <button className="button">BUTTON</button>
      </div>
    </div>
  );
}

PriceCard.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  background: PropTypes.string,

  title: PropTypes.string,
  price: PropTypes.string,
  items: PropTypes.array,
  isAvailable: PropTypes.bool,
};
