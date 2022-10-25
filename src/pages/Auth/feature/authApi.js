import { authApiSlice } from '../../../app/api';

export const authApiEndSlice = authApiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: '/auth',
        method: 'POST',
        body:{...credentials}
      })
    })
    
  })
})
