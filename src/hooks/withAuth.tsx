import { Button } from "@mui/material";
import { FC, useCallback, useEffect } from "react";
import { DEBUG } from "../constants/global";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectTokens, setTokens, setUser } from "../store/LocalStore";
import { useAuthMutation } from "../store/services/features/TodoApi";

// Higher Order Component for Authentication
export const withAuth = (Component: FC): FC => {
  const WrappedComponent: FC = (props) => {
    const [authApi, { data, isSuccess, error }] = useAuthMutation();
    const dispatch = useAppDispatch();
    const storedTokens = useAppSelector(selectTokens);

    // Function to initiate authentication
    const goTodo = useCallback(async () => {
      try {
        await authApi();
      } catch (err) {
        if (DEBUG) console.error("Authentication error:", err);
      }
    }, [authApi]);

    console.log({ data, error });
    // Handle actions on successful authentication
    useEffect(() => {
      if (isSuccess && data) {
        dispatch(
          setTokens({
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
          })
        );
        dispatch(setUser(data.user));
      }
    }, [isSuccess, data, dispatch]);

    // Render the wrapped component if authentication tokens are present
    if (storedTokens?.accessToken) {
      return <Component {...props} />;
    }

    // Render the authentication button if the user is not authenticated
    return (
      <Button title="Go Todo" variant="outlined" onClick={goTodo}>
        Go Todo
      </Button>
    );
  };

  return WrappedComponent;
};
