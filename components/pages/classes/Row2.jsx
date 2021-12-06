import { Typography, Card, CardContent } from "@material-ui/core";
import { useState } from "react";

export default function Row2() {
  const [ClassPlaceholder, setClassPlaceholder] = useState([
    "Kingdergaten 1",
    "Kingdergaten 2",
    "Primary 1",
    "Primary 2",
    "Primary 3",
	"Primary 4",
	"Primary 5",
	"Primary 6",
	"JHS 1",
	"JHS 2",
	"JHS 3",
  ]);
  return (
    <div className="my-9">
      <Card>
        <CardContent className=" flex flex-col items-center justify-center">
	  	  <Typography variant="h4">Class :</Typography>
          <div>
	  		<select className="border-2 border-gray-500 p-4 rounded-lg">
	  		{ClassPlaceholder.map((item, key)=>{
				return(
					<option value={item} key={key}>{item}</option>
				)
			})

			}
	  		</select>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
