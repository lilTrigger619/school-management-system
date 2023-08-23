import Axios from 'axios';
import {Request} from './funcs';
import cookie from 'cookie';

export default async(req, res)=>{
	const TheRequest = req;
	console.dir('request from front end ', JSON.stringify(TheRequest.body))
	//the access cookie to make the user request.
	console.log('right be for method cheking');
	const Cookie = cookie.parse(req.headers.cookie)
	const {access, refresh} = Cookie;
	console.log({access,refresh});
	if (req.method=='POST'){
		console.dir('request from front end ', TheRequest)
		console.dir('request from front end ', JSON.stringify(TheRequest.body))
		/**
		if(req.body=='getAllStaff'){
			console.log('we got to backend')
				const Data = {
					accessToken:access,
					url:'/staff/',
				}
				const ApiRes = await Request(Data);
				console.log('response from funcs', ApiRes);
				if(ApiRes.status !=200){
					RefreshToken(cookie, req, refresh, Request, Data)
					res.status(500).json('Failed to get data');	
				}else{
					const {data} = await ApiRes;
					res.status(ApiRes.status).json(data)
					console.log('res from nex backend', data)
				}
		}
		 **/
	}
}
