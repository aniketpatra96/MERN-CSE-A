const logger = (req, res, next) => {
    const { method, url, ip } = req
    const date = new Date().toLocaleString();
    console.log(`${date} - ${method} - ${url} - ${ip}`);
    next();
}

module.exports = logger