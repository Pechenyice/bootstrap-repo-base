import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const config = {
	backendUrl: publicRuntimeConfig.BACKEND_SERVICE_URL,
};
