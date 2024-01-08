import { useDispatch } from "react-redux";
import Button from "../../ui/Button.jsx";
import { deleteCartItem } from "./cartSlice.js";

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(deleteCartItem(pizzaId))}>
      Delete
    </Button>
  );
};

export default DeleteItem;
