const express = require('express');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const router = express.Router();

router.post('/api/users/register', async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  const body = JSON.stringify({
    first_name,
    last_name,
    email,
    password
  });

  try {
    const registerRes = await fetch(`${process.env.API_URL}/api/users/register`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json'
      },
      body
    });
    const data = await registerRes.json();

    return res.status(registerRes.status).json(data);
  } catch (err) {
    return res.status(500).json({
      error: 'something went wrong when registering the account'
    });
  }
});

module.exports = router;
