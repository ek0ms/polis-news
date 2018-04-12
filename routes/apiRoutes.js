const router = require('express').Router();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const shortid = require('shortid');

const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ users: [] }).write();

router.get('/:user_id/articles', (req, res) => {
  const articles = db
    .get('users')
    .find({ id: req.params.user_id })
    .get('savedArticles')
    .value();
  res.send(articles);
});

router.post('/:user_id/articles/', (req, res) => {
  const { author, published, title, url, img, description } = req.body;
  const id = shortid.generate();
  db
    .get('users')
    .find({ id: req.params.user_id })
    .get('savedArticles')
    .push({
      author,
      published,
      title,
      url,
      img,
      description,
      id,
    })
    .write();
});

router.get('/:user_id/articles/:article_title', (req, res) => {
  const article = db
    .get('users')
    .find({ id: req.params.user_id })
    .get('savedArticles')
    .find({ title: decodeURI(req.params.article_title) })
    .value();
  res.send(article);
});

module.exports = router;
