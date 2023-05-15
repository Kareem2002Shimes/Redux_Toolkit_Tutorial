import "./App.css";
import CakeView from "../features/cake/CakeView";
import IcecreamView from "../features/icecream/IcecreamView";
import UserList from "../features/user/UserList";

function App() {
  return (
    <div>
      <CakeView />
      <IcecreamView />
      <UserList />
    </div>
  );
}

export default App;
