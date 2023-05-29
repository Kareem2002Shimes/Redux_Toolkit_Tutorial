import { useEffect } from "react";
import { fetchUsers } from "./userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
function UserList() {
  const data = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h2>List of Users:</h2>
      {data.loading && <div>Loading...</div>}
      {!data.loading && data.error ? <div>Error: {data.error}</div> : null}
      {!data.loading && data.data.length ? (
        <ul>
          {data.data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default UserList;
