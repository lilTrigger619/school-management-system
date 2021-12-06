import {configureStore} from '@reduxjs/toolkit';
import questions from './pages/quiz/quizSlice';

export default configureStore({
	reducer: {
			questions,	
	}
})
