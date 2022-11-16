import frontCard from "../assets/bg-card-front.png";
import backCard from "../assets/bg-card-back.png";

export default function Cards(props) {
  return (
    <div className="cardContainer">
      <div className="frontCard">
        <img src={frontCard} alt="frontCard" />
        <h1 className="frontNumber">
          {props.number == ""
            ? `0000 0000 0000 0000`
            : `${props.number.slice(0, 4)} ${props.number.slice(
                4,
                8
              )} ${props.number.slice(8, 12)} ${props.number.slice(12, 16)}`}
        </h1>
        <h2 className="frontDate">
          {props.month == "" ? `00` : props.month}/
          {props.year == "" ? `00` : props.year}
        </h2>
        <h2 className="frontName">
          {props.name == "" ? `Jane Doe` : props.name}
        </h2>
      </div>
      <div className="backCard">
        <h2 className="backDigits">{props.cvc == "" ? `000` : props.cvc}</h2>
        <img src={backCard} alt="backCard" />
      </div>
    </div>
  );
}
