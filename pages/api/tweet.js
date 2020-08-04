import Twit from '../../lib/twit'

export default (req, res) => {
  Twit.get('search/tweets', { from: 'ademilter', count: 20 }, function (
    err,
    data,
    response
  ) {
    if (err) {
      return res.status(400).json({ message: 'Ups! bir hata oldu.' })
    }

    res.status(200).json(data)
  })
}
