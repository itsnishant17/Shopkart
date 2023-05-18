const express = require('express');
const app = express();
app.use(express.json());
const users = [];
app.post('/api/users', (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    if (users.find(user => user.username === username)) {
      return res.status(400).json({ error: 'Username already exists' });
    }
    const newUser = {
      username,
      password
    };
    users.push(newUser);
    return res.status(201).json({ message: 'User created successfully' });
  } else {
    return res.status(400).json({ error: 'Username and password are required' });
  }
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
