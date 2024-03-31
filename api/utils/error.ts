class AccessError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export const createError = (message: string, status: number): AccessError => {
  return new AccessError(message, status);
};
