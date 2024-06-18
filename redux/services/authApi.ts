import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constants/baseUrl";
import { IAccessToken, ILoginDto } from "../../types/types";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        loginUser: builder.mutation<IAccessToken, ILoginDto>({
            query: (body) => ({
                url: "/internship/v1/auth",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const { useLoginUserMutation } = authApi;
