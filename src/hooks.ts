import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './index';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


// IMPORTANT!
// in components, import the following:
// import { useAppDispatch, useAppSelector } from '../hooks';

// inside of component function, example of use:
// const dispatch = useAppDispatch();
// const count = useAppSelector(state => state.sampleCRD.count);