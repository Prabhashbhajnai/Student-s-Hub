import { combineReducers } from 'redux';

import books from './books/book.reducer';
import teachers from './teachers/teacher.reducer';
import quespapers from './Quespaper/quespaper.reducer';
import user from './user/user.reducer';
import auth from './auth/auth.reducer';
import review from './review/review.reducer';
import forum from './Forum/forum.reducer'

const rootReducer = combineReducers({ books, teachers, quespapers, user, auth, review, forum });

export default rootReducer;