import axios from "axios";

export default async (req, res) => {
  if (req.method == "POST") {
	  console.log('this if from the server')
		console.log('data', req.body)
      //res.status(200).json(JSON.stringify(req.body));
	try{
		const url = process.env.Backend+'/staff/register/'
		const config = {
			headers : {"Content-Type":"application/json"}
		}
		const body = req.body
		//making the request to the backend
		axios.post(url, body, config)
			.then(res=>{
				res.status(response.satus).json(response)
			})
			.catch(err=>{
				res.status(500).json(err)
			})
	}
	catch(err){
		res.status(500).json(err)
	}
    }
  }
