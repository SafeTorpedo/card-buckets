import { useSelector } from "react-redux";
import Cards from "./Cards";

const CardList = ({ value }) => {
    //get cards state from store
    const cards = useSelector((state: RootState) => state[value]);

    return (
        <div className="grid grid-cols-2">
            {cards.map((card, index) => {
                return <Cards key={index} name={card.name} link={card.link} />;
            })}
        </div>
    );
};

export default CardList;
