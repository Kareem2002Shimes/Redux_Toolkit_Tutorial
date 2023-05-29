import { ordered, reStocked } from "./icecreamSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
function IcecreamView() {
  const numberOfIcecreams = useAppSelector(
    (state) => state.icecream.numberOfIcecreams
  );
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>Number of icecreams - {numberOfIcecreams}</h1>
      <button onClick={() => dispatch(ordered())}>Order icecream</button>
      <button onClick={() => dispatch(reStocked(5))}>Restock icecreams</button>
    </div>
  );
}

export default IcecreamView;
