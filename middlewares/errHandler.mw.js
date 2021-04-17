module.exports = async (err, req, res, next) => {
  console.log(err);
  res.status(400).send({ error: 'Some err' });
};
//TODO ERR HANDLER
