import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import User from '../../models/user';
import { ReduxAction } from '../actions'
import { UPDATE_SESSION_TOKEN, CLEAR_SESSION_TOKEN } from '../actions/constants';

export interface UserState {
    user?: User,
    sessionToken: string,
    updateSessionToken: string,
    sessionExpiration: Date
}

const initialState : UserState = {
    sessionToken: "",
    updateSessionToken: "",
    sessionExpiration: new Date()
}

const authReducer = (
    state: UserState = initialState,
    action: ReduxAction
) => {
    switch (action.type) {
        case UPDATE_SESSION_TOKEN: {
            return {
                ...state,
                sessionToken: action.payload.sessionToken,
                updateSessionToken: action.payload.updateSessionToken,
                sessionExpiration: action.payload.sessionExpiration
            }
        }
        case CLEAR_SESSION_TOKEN: {
            return {
                ...state,
                sessionToken: '',
                updateSessionToken: '',
                sessionExpiration: new Date()
            }
        }
        default:
            return state;
    }
}

export default authReducer;

