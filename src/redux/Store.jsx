import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from 'redux/SliceContacts';
import { reducerFilter } from 'redux/SliceFilters';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, PERSIST, PURGE, REGISTER, FLUSH, REHYDRATE, PAUSE,} from 'redux-persist';
const reducer = combineReducers({
  contacts: contactsReducer,
  filter: reducerFilter,
});

const configForPersist = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

const reducerContacts = persistReducer(configForPersist, reducer);

const store = configureStore({
  reducer: reducerContacts,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;