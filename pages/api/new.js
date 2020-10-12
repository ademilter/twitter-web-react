// import Twit from '../../lib/tweet'

// export default (req, res) => {
//   const { tweet } = req.body

//   if (!tweet) return res.status(400).json({ message: 'Please type something' })

//   Twit.post('statuses/update', { status: tweet }, function (
//     err,
//     data,
//     response
//   ) {
//     if (err) {
//       return res.status(400).json({ message: 'Opps!' })
//     }
//     res.status(200).json(data)
//   })
// }
