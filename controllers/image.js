
const Clarifai =  require ('clarifai');


const app = new Clarifai.App({
 apiKey: '87b5eb01a1b44f60aa27702bed42544d'
});

const handleApiCall = (req, res, input) =>{
	app.models.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
	.then(data => {
		res.json(data)
	})
}







const handleImage = (req, res, db) => {
	const {id} = req.body;
	// db.select('*').from('users')
	// .then(data => console.log(data))
	db('users')
	.where({id})
	.increment('entries', 1)
	.returning('entries')
	.then(entries =>{
		res.json(entries)
	})
	.catch(err => res.status(400).json('Unable to get count'))
 	
}

module.exports ={
	handleImage:handleImage,
	handleApiCall:handleApiCall
}