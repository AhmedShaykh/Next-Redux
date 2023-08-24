import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
    isAuth: boolean;
    username: string;
    uid: string;
    isModerator: boolean;
};

type InitialStateType = {
    value: AuthState;
};

const initialState = {
    value: {
        isAuth: false,
        username: "",
        uid: "",
        isModerator: false
    } as AuthState,
} as InitialStateType;

export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: () => {
            return initialState
        },
        logIn: (state, action: PayloadAction<string>) => {
            return {
                value: {
                    isAuth: true,
                    username: action.payload,
                    uid: "e242j4b2j4b24b24920090snmxnmnxak",
                    isModerator: false
                }
            }
        }
    }
});

export const { logIn, logOut } = auth.actions;

export default auth.reducer;