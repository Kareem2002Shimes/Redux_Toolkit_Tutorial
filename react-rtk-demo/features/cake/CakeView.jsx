import { useSelector, useDispatch } from "react-redux";
import { ordered, reStocked } from "./cakeSlice";
function CakeView() {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of cakes - {numberOfCakes}</h1>
      <button onClick={() => dispatch(ordered())}>Order cake</button>
      <button onClick={() => dispatch(reStocked(10))}>Restock cakes</button>
    </div>
  );
}

export default CakeView;
