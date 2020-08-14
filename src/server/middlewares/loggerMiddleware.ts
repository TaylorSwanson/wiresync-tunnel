// Log requests
export = function LoggerMiddleware(req, res, next) {
  
  console.log({
    ip: req.ip,
    method: req.method,
    path: req.path,
    query: req.query,
    subdomains: req.subdomains
  });

  next();
};
