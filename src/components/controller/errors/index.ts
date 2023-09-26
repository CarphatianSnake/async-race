class ApiError extends Error {
  public status: number;

  public statusText: string;

  constructor(message: string, statusCode: number, statusText: string) {
    super(message);
    this.status = statusCode;
    this.statusText = statusText;
  }
}

export default ApiError;
