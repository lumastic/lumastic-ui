import { useContext } from "react";
import CurrentUserContext from "./CurrentUserContext";

const useCurrentUser = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  if (!currentUser) {
    return { currentUser: {} };
  }
  return { currentUser, setCurrentUser };
};

export default useCurrentUser;
