import {Search} from '@material-ui/icons';
import {InputBase} from '@material-ui/core';


export default function SearchComponent(props){
return (
	<>
	<div className="bg-white-500 w-1/2 flex items-center justify-center ">
		<InputBase value={props.value} className="text-lg" placeholder="search..." onChange={props.searchFunction}/>
		<Search/>
	</div>
	</>
)
}
