const StudentPresent = {
	labels :["Present Students", "Total students"],
	datasets :[{
		label : "Number of students present",
		data : [10000, 17000], 
		backgroundColor: [
			"rgba(255, 207, 40, 1)",
			"rgba(255, 85, 0, 1)"
		]
	}]

}



const MaleStudentPresent = {
	labels :["Present Male Students", "Total students"],
	datasets :[{
		label : "Number of students present",
		data : [10000, 17000], 
		backgroundColor: [
			"rgba(230,166,181,1)",
			"rgba(47,255, 254, 1)"
		]
	}]

}


const FemaleStudentPresent = {
	labels :["Present Students", "Total students"],
	datasets :[{
		label : "Number of students present",
		data : [10000, 17000], 
		backgroundColor: [
			"rgba(255,40,0,1)",
			"rgba(255,255,28,1)"
		]
	}]

}


export {StudentPresent, MaleStudentPresent, FemaleStudentPresent};
