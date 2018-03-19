const router = require('express').Router();

const Album = require('../models/album');

router.get('/', async (req, res, next) => {
  const albums = await Album.find({}).exec();
  res.json(albums);
});

router.post('/create', async (req, res, next) => {
  const newAlbum = await new Album(req.body);
  newAlbum.save();
  const album = await Album.findOne(req.body);
  res.status(201).json(album);
});

module.exports = router;