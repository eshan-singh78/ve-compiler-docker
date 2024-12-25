const express = require('express');
const { CompileFile } = require('ve-compiler-2.0');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.post('/compile-code', async (req, res) => {
  const { code, language } = req.body;

  try {
    const output = await CompileFile(language, code);
    const stdout = output.stdout || '';
    res.json({ output: stdout });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'server is running', timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
