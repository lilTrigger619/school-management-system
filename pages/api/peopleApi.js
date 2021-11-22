import staffApi from './staffData';


export default async function handler(req,res){
		const bigData = JSON.stringify(staffApi)
		res.status(200).json({data:bigData})
}