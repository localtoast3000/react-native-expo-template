import { configureStore } from '@reduxjs/toolkit';
import theme from './reducers/theme';
import user from './reducers/user';

export default configureStore({
  reducer: {
    theme,
    user,
  },
});
