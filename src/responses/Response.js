const Response = (success = true, error = "", details) => {
  return {
    status: success ? "OK" : "ERROR",
    error: error ? `Ocurrió un error ---> ${error}:` : "",
    details,
  };
};

export default Response;
