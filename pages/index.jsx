import {
  Typography,
  Card,
  CardContent,
  Drawer,
  CardHeader,
  Grid,
  CardMedia,
  CardActionArea,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
} from "@material-ui/core";
import Layout from "../components/managementLayout/layout";
import SwiperComp from "../components/pages/dashboard/slider";
import {useEffect,useState} from 'react';
import {DataPlaceHolder} from '../utils';
import Link from 'next/link';
import {StaffData, StudentData} from '../components/pages/dashboard/chartData';
import CustomPie from '../components/pages/dashboard/piechart';


export default function Homepage() {
/**

const [DataArrived, setDataArived]=useState(false)
const [Staff, setStaff] = useState('null')

const fetcher = async () =>{
  const raw = await fetch('api/peopleApi', {method:"GET"})
  const info = await raw.json();
	if(info){
		setStaff(info.data);
		console.log(Staff);
	}
}



useEffect(()=>{
	fetch('api/peopleApi', {method:"GET"})
		.then((response)=>response.json())
		.then((data)=>setStaff(data))
		.then(()=>console.log(Staff))

},[Staff])
 *
 *
 * **/


  return (
    <>
	
      <Layout>
        <div className=" my-8">
          <Grid container justifyContent="center" spacing={4}>
            <Grid item sm={12} md={4}>
              <div>
                <Typography variant="h3" gutterBottom>
                  Welcome Shadrack,
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Good Morning
                </Typography>
              </div>
            </Grid>

            <Grid item sm={12} md={8}>
              <Card>
                <CardHeader title="Quote of the day" subheader="Quote:" />
                <CardContent>
                  <Typography variant="body1">
                    {" "}
                    " When someone says you can't, do it twice and take pictures
                    "
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card>
                <CardHeader
                  title="Latest News"
                  subheader="Attendence"
                  className={`flex`}
                />
                <CardContent>
                  <Typography variant="body1">
                    {" "}
                    Please every student should do well to come to schoole early
                    comming Monday to prevent any punishment
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <div>
                <SwiperComp />
              </div>
            </Grid>


	   <Grid item xs="12">
	  	<CustomPie />
	   </Grid>
           
            <Grid item xs={12}>
              <Card>
	  	<CardContent className="flex justify-center">
	  		<Typography variant="h6">Staff</Typography>	
	  	</CardContent>
                <Grid container justifyContent="space-around">
	  		
	  	<div className="max-w-full max-h-sm  overflow-auto">
                  <Grid item xs={12} md={8}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Email</TableCell>
                          <TableCell>Position</TableCell>
                          <TableCell>Subject</TableCell>
                          <TableCell>Grade</TableCell>
                          <TableCell>Status</TableCell>
                        </TableRow>
	  		</TableHead>
                      <TableBody>
	  		{DataPlaceHolder.map((Cred, key)=>{
			return(
				<TableRow className="hover:bg-grey-800">
					<TableCell>{`${Cred.first_name} ${Cred.last_name}`}</TableCell>
					<TableCell>{`${Cred.email}`}</TableCell>
					<TableCell>{`${Cred.position}`}</TableCell>
					<TableCell>{`${Cred.subject}`}</TableCell>
					<TableCell>{`${Cred.grade}`}</TableCell>
					<TableCell>Active</TableCell>
					
				</TableRow>

			)	
			}) 
			 }

                      </TableBody>
                    </Table>
			
                  </Grid>
	  	
	  	<Grid item xs={12} className="bg-blue-200 flex justify-center cursor-pointer">
	  		<Link href="instructor">
				<Typography>See more</Typography>
	  		</Link>
	  	</Grid>
	  	</div>
                </Grid>
              </Card>
            </Grid>




            <Grid item xs={12}>
              <Card>
	  	<CardContent className="flex justify-center">
	  		<Typography variant="h6">Students</Typography>	
	  	</CardContent>
                <Grid container justifyContent="space-around">
	  		
	  	<div className="max-w-full max-h-sm  overflow-auto">
                  <Grid item xs={12} md={8}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Email</TableCell>
                          <TableCell>Position</TableCell>
                          <TableCell>Subject</TableCell>
                          <TableCell>Grade</TableCell>
                          <TableCell>Status</TableCell>
                        </TableRow>
	  		</TableHead>
                      <TableBody>
	  		{DataPlaceHolder.map((Cred, key)=>{
			return(
				<TableRow className="hover:bg-grey-800">
					<TableCell>{`${Cred.first_name} ${Cred.last_name}`}</TableCell>
					<TableCell>{`${Cred.email}`}</TableCell>
					<TableCell>{`${Cred.position}`}</TableCell>
					<TableCell>{`${Cred.subject}`}</TableCell>
					<TableCell>{`${Cred.grade}`}</TableCell>
					<TableCell>Active</TableCell>
					
				</TableRow>

			)	
			}) 
			 }

                      </TableBody>
                    </Table>
			
                  </Grid>
	  	
	  	<Grid item xs={12} className="bg-blue-200 flex justify-center cursor-pointer">
	  		<Link href="instructor">
				<Typography>See more</Typography>
	  		</Link>
	  	</Grid>
	  	</div>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Layout>
    </>
  );
}

//getStaticProps Only supports relative and real life urls from an external api.

/*export async function getStaticProps(){
  const fetched = await fetch('https://localhost:3000/api/peopleApi');
  const data = await raw.json();

  return {
    props:{
      data,
    }
  }
}
*/

/*
	{(Staff !== null) ? Staff.map((_,index)=>{
		  return(
		    <TableRow>
		      <TableCell>
		       {index.first_name +" " + index.last_name}
		      </TableCell>
		      <TableCell>
			index.email
		      </TableCell>
		      <TableCell>
			{index.position}
		      </TableCell>
		     <TableCell>
			{index.subject}
		      </TableCell>
		     <TableCell>
			{index.grade}
		      </TableCell>
		     <TableCell>
			Active
		      </TableCell>
		    </TableRow>
		    )
		}): "NO content"}
 * */

/*
 * */
