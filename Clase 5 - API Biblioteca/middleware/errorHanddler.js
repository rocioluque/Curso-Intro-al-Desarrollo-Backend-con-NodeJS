const errorHanddler = (err, req, res, next) => {
  const status = err.statusCode || 500;

  const errorResponse = {
    error: {
      message: err.message || "Error interno del servidor",
      code: err.code || "internal_error",
    },
  };

  res.status(status).json(errorResponse);
};

module.exports = errorHanddler;
