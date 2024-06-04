module.exports = async(email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return await emailRegex.test(email);
};