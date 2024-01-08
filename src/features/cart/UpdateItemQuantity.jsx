import { useDispatch } from "react-redux";
import Button from "../../ui/Button.jsx";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice.js";

const UpdateItemQuantity = ({ pizzaId, currentItemQuantity }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      {currentItemQuantity}
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
