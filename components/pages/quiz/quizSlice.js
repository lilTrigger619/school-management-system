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
			const id = action.payload.id

			state.questions.push({
				id : id,
				question: question,
				options: options,
				answer: answer,
				type: type,
			})
		},
	
		removeQuestion: (state,action)=>{
			const id = action.payload.id

			const FilteredQuestions = state.questions.filter((item)=>{
				if (item.id != id) return item
			})

			state.questions = FilteredQuestions;
		},

		removeAllQuestions: (state, action)=>{
			const Empty = [];
			state.questions = Empty; 
		}
  },
});

export default Slice.reducer;
export const {appendQuestion, removeQuestion, removeAllQuestions} = Slice.actions;
