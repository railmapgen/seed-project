import thunk, { ThunkDispatch } from 'redux-thunk';
import { RootState } from './redux';
import createMockStore from 'redux-mock-store';

// FIXME: any -> AnyAction?
type DispatchExts = ThunkDispatch<RootState, void, any>;
export const createMockAppStore = createMockStore<RootState, DispatchExts>([thunk]);
