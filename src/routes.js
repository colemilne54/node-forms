const express = require('express');
const router = express.Router();

const multer = require('multer');
const upload = multer({ storage: multer.diskStorage() });

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/contact', (req, res) => {
  res.render('contact', {
    data: {},
    errors: {}
  });
});

router.post('/contact', upload.single('photo'), (req, res) => {
  
  res.render('contact', {
    data: req.body, // { message, email }
    errors: {
      message: {
        msg: 'A message is required'
      },
      email: {
        msg: 'That email doesn‘t look right'
      }
    }
  });

  if (req.file) {
    console.log('Uploaded: ', req.file);
  }

  else 

  console.log(req.body);
  console.log(res.body);
});

module.exports = router;
