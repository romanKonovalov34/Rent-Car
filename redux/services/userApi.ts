import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constants/baseUrl";
import { IUserDto } from "../../types/types";
import { LS_AUTH_KEY } from "../../constants/accessToken";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getUser: builder.query<IUserDto, void>({
            query: () => ({
                url: "internship/v1/user",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        LS_AUTH_KEY
                    )}`,
                },
            }),
        }),
    }),
});

export const { useGetUserQuery } = userApi;
