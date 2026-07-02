// File: api/index.js
module.exports = (req, res) => {
  res.status(200).json({ 
    message: "Halo dari Vercel Serverless!",
    timestamp: new Date().toISOString() 
  });
};