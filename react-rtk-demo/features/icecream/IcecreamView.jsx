import { useDispatch, useSelector } from "react-redux";
import { ordered, reStocked } from "./icecreamSlice";
function IcecreamView() {
  const numberOfIcecreams = useSelector(
    (state) => state.icecream.numberOfIcecreams
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of icecreams - {numberOfIcecreams}</h1>
      <button onClick={() => dispatch(ordered())}>Order icecream</button>
      <button onClick={() => dispatch(reStocked(5))}>Restock icecreams</button>
    </div>
  );
}

export default IcecreamView;
