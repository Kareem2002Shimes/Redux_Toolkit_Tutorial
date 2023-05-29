import { ordered, reStocked } from "./cakeSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
function CakeView() {
  const numberOfCakes = useAppSelector((state) => state.cake.numberOfCakes);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>Number of cakes - {numberOfCakes}</h1>
      <button onClick={() => dispatch(ordered())}>Order cake</button>
      <button onClick={() => dispatch(reStocked(10))}>Restock cakes</button>
    </div>
  );
}

export default CakeView;
