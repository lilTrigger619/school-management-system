				#Student page plan
			................................							
#Cards that display total numbers.
	This cards will contain.
	1. Total number of students
	2. Total number of foreign students
	3. Total number of Female students
	4. Total number of Male students.
	5. Total number of Inactive students.

#Student performance.
	May be the teachers can give each students a score for their perfomance
	between 1 to 12. The performance units are;
	1. Neatness {12}
	2. Comportment {12}
	3. Involving {12}
	4. Prescribed Clothing {12}
	
	Average Student performance.
	Calculate the the total performance of every student and divide it by the
	expected value and mutiply it by 100%.
	
	Average Student Neatness.
	Calculate the total neatness of every student and divide it by the
	expected  value and multiply it by expected neatness Value.
	
	Average Student Comportment.
	...^
	
	Average student Involving.
	...^
	
	Average Student in Prescribed Clothing.
	...^

#Student attendance for the day.
	Total number of student who are present at a specific time over the 
	expected students to be present at that particular time.
	This will be taken in a piechart format.
	
	Male chart and Female chart for the presence status.


#Add Student button.
	This will be a button that will be used to add a new student to the 
	database. THis will open a new page with a form for the addition.

#A table displaying all students.
	This is the main functionality of this page. A table with maxhieght that
	will list all the students in prefered arrangement. From the table some 
	are some fields:
		1. Name of student
		2. Class
		3. General position
		4. Classroom position
		5. Owing status{This will show red if the owings are way too much
			blue if its moderate and green if they are not owing}
		6. Gaudian Contact.
	
	In this Row, there should be a search and filter component.
		#Functionality. When a text is entered into the component, 
				it should search for students by their name.
				
				The sort or filter component will help sort the
				table in the prescribed manner.
				sort methods are;
				1. By Name {Ascending, Descending}
				2. By HighestClass {Ascending, Descending}
				3. Recently Added {Ascending, Decending}	
		
		#How to make it.
			1. Create 3 different states. {SearchString, MatchedData, StudentData}
			2. On every key press, a loop should be made through the studentData.firstName and studentData.LastName
			3. When the string matches the data in push it to an array and map that array in a card right below the search ui.

			!!! it's that simple. You can ignore the MatchedData state.			
