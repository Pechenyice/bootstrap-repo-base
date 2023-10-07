 import type { CodegenConfig } from '@graphql-codegen/cli';
 
const config: CodegenConfig = {
  schema: 'http://localhost:8000/graphql',
  generates: {
    './': {
        documents: './graphql/*.graphql',
		preset: 'near-operation-file',
		presetConfig: {
			extension: '.generated.ts',
			baseTypesPath: './graphql/types/types.generated.ts'
		},
		plugins: {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment -- no need to check
			// @ts-expect-error
            add: {
				content: '// @ts-nocheck'
			},
			'typescript-operations': {},
			'typescript-react-query': {}
		},
		config: {
			skipTypename: true,
			avoidOptionals: true,
			addInfiniteQuery: true,
			exposeQueryKeys: true,
			exposeFetcher: true,
			isReactHook: false,
            fetcher: './helpers/gql-api#requestWrapper'
		}
    },
	'./graphql/types/types.generated.ts': {
        config: {
			withHooks: true
		},
		plugins: {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment -- no need to check
			// @ts-expect-error
			typescript: {},
			add: {
				content: '/* eslint-disable no-shadow */'
			}
		}
    }
  }
}
 
export default config