import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeError } from "../../actions";
import { ErrorMessage } from "../../components/ErrorMessage";
import { errorSelector } from "../../selectors";

export const ErrorContainer = () => {
  const { error } = useSelector(errorSelector);
  const dispatch = useDispatch();

  const timer = useCallback(
    () =>
      setTimeout(() => {
        dispatch(removeError());
      }, 4000),
    [dispatch]
  );

  useEffect(() => {
    if (error) timer();
    return () => clearTimeout(timer);
  }, [dispatch, error, timer]);

  return <>{error && <ErrorMessage error={error} />}</>;
};
