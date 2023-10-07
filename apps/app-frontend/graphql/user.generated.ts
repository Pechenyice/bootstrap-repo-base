// @ts-nocheck
import * as Types from './types/types.generated';

import { useQuery, UseQueryOptions, useInfiniteQuery, UseInfiniteQueryOptions, QueryFunctionContext } from 'react-query';
import { requestWrapper } from './helpers/gql-api';
export type FindUserByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
}>;


export type FindUserByIdQuery = { findUserById: { id: string } };


export const FindUserByIdDocument = `
    query FindUserById($id: String!) {
  findUserById(id: $id) {
    id
  }
}
    `;
export const useFindUserByIdQuery = <
      TData = FindUserByIdQuery,
      TError = unknown
    >(
      variables: FindUserByIdQueryVariables,
      options?: UseQueryOptions<FindUserByIdQuery, TError, TData>
    ) =>
    useQuery<FindUserByIdQuery, TError, TData>(
      ['FindUserById', variables],
      requestWrapper<FindUserByIdQuery, FindUserByIdQueryVariables>(FindUserByIdDocument, variables),
      options
    );

useFindUserByIdQuery.getKey = (variables: FindUserByIdQueryVariables) => ['FindUserById', variables];
;

export const useInfiniteFindUserByIdQuery = <
      TData = FindUserByIdQuery,
      TError = unknown
    >(
      variables: FindUserByIdQueryVariables,
      options?: UseInfiniteQueryOptions<FindUserByIdQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<FindUserByIdQuery, TError, TData>(
      ['FindUserById.infinite', variables],
      (metaData) => requestWrapper<FindUserByIdQuery, FindUserByIdQueryVariables>(FindUserByIdDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteFindUserByIdQuery.getKey = (variables: FindUserByIdQueryVariables) => ['FindUserById.infinite', variables];
;

useFindUserByIdQuery.fetcher = (variables: FindUserByIdQueryVariables, options?: RequestInit['headers']) => requestWrapper<FindUserByIdQuery, FindUserByIdQueryVariables>(FindUserByIdDocument, variables, options);