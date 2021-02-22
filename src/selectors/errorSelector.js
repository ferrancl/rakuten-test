export const errorSelector = (state) => {
  const notFoundError = state.error?.status === "404";
  const error = state.error?.status !== "404" && state.error;
  return { notFoundError, error };
};
