import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "Quiz_questions",
  initialState: {
		questions: [],
	},
  reducers: {
    appendQuestion: (state, action) => {
			const options = action.payload.options
			const question = action.payload.question
			const answer = action.payload.answer
			const type= action.payload.type

			state.questions.push({
				question: question,
				options: options,
				answer: answer,
				type: type,
			})
		},
	
		removeQuestion: (state,action)=>{
			const id = action.payload.id

			const FilteredQuestions = state.questions.filter((item,key)=>{
				if (key == !id){
					return item
				} 
			})

			state.questions = FilteredQuestions;
		},

		removeAllQuestions: (state, action)=>{
			state.questions = [];
		}
  },
});

export default Slice.reducer;
export const {appendQuestion, removeQuestion, removeAllQuestions} = Slice.actions;
