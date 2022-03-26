const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

dotenv.config();

app.use(express.json());
app.use(cors(corsOptions));

// return text array
const text_list = [
  'Logic will get you from A to B. Imagination will take you everywhere.',
  "There are 10 kinds of people. Those who know binary and those who don't.",
  'There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies and the other is to make \
                  it so complicated that there are no obvious deficiencies',
  "It's not that I'm so smart, it's just that I stay with problems longer",
  'It is pitch dark. You are likely to be eaten by a grue.',
];

app.get('/', (req, res) => {
  let random_text = text_list[Math.floor(Math.random() * text_list.length)];
  res.send(random_text);
});

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
