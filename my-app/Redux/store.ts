import { configureStore } from "@reduxjs/toolkit";
import authReducer from './feature/authSlice'
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store=configureStore({
    reducer:{
        authReducer 
    },
})

export type RoofState= ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch

export const useAppSelector:TypedUseSelectorHook<RoofState>=useSelector