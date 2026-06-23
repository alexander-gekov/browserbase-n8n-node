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
			type: 'hidden',
			default: 'https://api.browserbase.com',
		},
		{
			displayName: 'Stagehand Base URL',
			name: 'stagehandBaseUrl',
			type: 'hidden',
			default: 'https://api.stagehand.browserbase.com',
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
			displayName: 'Anthropic API Key',
			name: 'anthropicApiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: false,
			description:
				'Optional. Bring your own Anthropic key for the Agent. Leave all model keys empty to use the Browserbase Model Gateway.',
		},
		{
			displayName: 'OpenAI API Key',
			name: 'openAiApiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: false,
			description:
				'Optional. Bring your own OpenAI key for the Agent. Leave all model keys empty to use the Browserbase Model Gateway.',
		},
		{
			displayName: 'Google API Key',
			name: 'googleApiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: false,
			description:
				'Optional. Bring your own Google (Gemini) key for the Agent. Leave all model keys empty to use the Browserbase Model Gateway.',
		},
		{
			displayName: 'Model API Key (Deprecated)',
			name: 'modelApiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: false,
			description:
				'Deprecated. Use the provider-specific keys above instead. Kept for credentials created before per-provider keys existed; used as a fallback when no matching provider key is set.',
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
