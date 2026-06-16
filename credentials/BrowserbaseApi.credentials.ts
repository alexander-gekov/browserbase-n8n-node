import type {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class BrowserbaseApi implements ICredentialType {
	name = 'browserbaseApi';

	displayName = 'Browserbase API';

	documentationUrl = 'https://docs.browserbase.com';

	icon = 'file:../icons/browserbase.svg' as const;

	properties: INodeProperties[] = [
		{
			displayName: 'Browserbase API Key',
			name: 'browserbaseApiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Your Browserbase API key',
		},
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'https://api.browserbase.com',
			required: false,
			description:
				'Base URL for the Browserbase REST API (Search and Fetch). Overridden automatically by n8n Connect.',
		},
		{
			displayName: 'Stagehand Base URL',
			name: 'stagehandBaseUrl',
			type: 'string',
			default: 'https://api.stagehand.browserbase.com',
			required: false,
			description: 'Base URL for the Stagehand API used by the Agent resource',
		},
		{
			displayName: 'Browserbase Project ID (Deprecated)',
			name: 'browserbaseProjectId',
			type: 'string',
			default: '',
			required: false,
			description: 'Optional. Your Browserbase project ID (no longer required for new setups)',
		},
		{
			displayName: 'Model API Key',
			name: 'modelApiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: false,
			description: 'Optional. Provide your own model API key, or leave blank to use the <a href="https://docs.browserbase.com/platform/model-gateway/overview">Browserbase Model Gateway</a>.',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'x-bb-api-key': '={{$credentials.browserbaseApiKey}}',
			},
		},
	};

}
