export const createError = (status: string, message: string) => {
  const err = new Error();
  err.name = status;
  err.message = message;
  return err;
};
