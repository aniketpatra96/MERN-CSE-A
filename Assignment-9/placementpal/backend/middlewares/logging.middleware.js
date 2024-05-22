const logger = (req, res, next) => {
  const { method, url, ip } = req;
  console.log(`logger ${method}- ${url} - ${ip} `);
  next();
};

module.exports = { logger };
