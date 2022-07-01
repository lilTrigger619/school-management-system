import axios from "axios";
import cookie from 'cookie';
// Login api to make the login api call

export default async (req, res) => {
	try{
	  if (req.method == "POST") {
		const url = process.env.Backend + "/login/";
		const body = req.body;
		const config = {
		  headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		  },
		};
		const response = await axios.post(url, body, config)
		if(response.status==200){
			res.setHeader('Set-Cookie',[
				cookie.serialize('access', response.data.access,{
					maxAge: 60*60,
					httpOnly: true,
					secure: process.env.NODE_ENV !== 'development',
					path: '/',
					sameSite: 'strict',
				}),
				cookie.serialize('refresh', response.data.refresh, {
					maxAge: 60 * 60 *12,
					sameSite: 'strict',
					httpOnly: true,
					secure: process.env.NODE_ENV !== 'development',
					path: '/',
				})
			])
			res.status(200).json({response:'success'})
		}
  }
	}catch(err){
		const resString = await err?.response?.statusText
		const resStatus = await err?.response?.status
		res.status(resStatus?resStatus:500).json(resString?resString:'Somthing happened please try again')
	}
};
