import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constants/baseUrl";
import { LS_AUTH_KEY } from "../../constants/accessToken";
import { DictCodes, IDictionaryDto } from "@/types/types";

export const dictionaryApi = createApi({
    reducerPath: "dictionaryApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getDictionary: builder.query<IDictionaryDto[], DictCodes>({
            query: (dictCode) => ({
                url: `internship/v1/dictionary/${dictCode}`,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        LS_AUTH_KEY
                    )}`,
                },
            }),
        }),
    }),
});

export const { useGetDictionaryQuery, useLazyGetDictionaryQuery } = dictionaryApi;
