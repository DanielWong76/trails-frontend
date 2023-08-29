import User from '../../models/user';
import { UPDATE_SESSION_TOKEN, CLEAR_SESSION_TOKEN } from './constants';

export const updateUserSession = (user: User, sessionToken: string, updateSessionToken: string, sessionExpiration: Date) => ({
    type: UPDATE_SESSION_TOKEN,
    payload: {
        user,
        sessionToken,
        updateSessionToken,
        sessionExpiration
    }
});



