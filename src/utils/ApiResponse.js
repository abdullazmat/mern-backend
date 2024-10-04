class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    (this.statusCode = statusCode),
      (this.data = data),
      (tis.message = message),
      (this.success = statusCode);
  }
}
