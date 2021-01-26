import type { Snowflake } from '../../common/index';

export * from './auditLog';
export * from './channel';
export * from './emoji';
export * from './gateway';
export * from './guild';
export * from './interactions';
export * from './invite';
export * from './oauth2';
export * from './template';
export * from './user';
export * from './voice';
export * from './webhook';

export const APIVersion = '8';
export const Routes = {
	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/audit-logs`
	 */
	guildAuditLog(guildID: Snowflake) {
		return `/guilds/${guildID}/audit-logs`;
	},

	/**
	 * Route for:
	 * - GET    `/channels/{channel.id}`
	 * - PATCH  `/channels/{channel.id}`
	 * - DELETE `/channels/{channel.id}`
	 */
	channel(channelID: Snowflake) {
		return `/channels/${channelID}`;
	},

	/**
	 * Route for:
	 * - GET  `/channels/{channel.id}/messages`
	 * - POST `/channels/{channel.id}/messages`
	 */
	channelMessages(channelID: Snowflake) {
		return `/channels/${channelID}/messages`;
	},

	/**
	 * Route for:
	 * - GET    `/channels/{channel.id}/messages/{message.id}`
	 * - PATCH  `/channels/{channel.id}/messages/{message.id}`
	 * - DELETE `/channels/{channel.id}/messages/{message.id}`
	 */
	channelMessage(channelID: Snowflake, messageID: Snowflake) {
		return `/channels/${channelID}/messages/${messageID}`;
	},

	/**
	 * Route for:
	 * - POST `/channels/{channel.id}/messages/{message.id}/crosspost`
	 */
	channelMessageCrosspost(channelID: Snowflake, messageID: Snowflake) {
		return `/channels/${channelID}/messages/${messageID}/crosspost`;
	},

	/**
	 * Route for:
	 * - PUT    `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/@me`
	 * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/@me`
	 *
	 * **Note**: You need to URL encode the emoji yourself
	 */
	channelMessageOwnReaction(channelID: Snowflake, messageID: Snowflake, emoji: string) {
		return `/channels/${channelID}/messages/${messageID}/reactions/${emoji}/@me`;
	},

	/**
	 * Route for:
	 * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/{user.id}`
	 *
	 * **Note**: You need to URL encode the emoji yourself
	 */
	channelMessageUserReaction(channelID: Snowflake, messageID: Snowflake, emoji: string, userID: Snowflake) {
		return `/channels/${channelID}/messages/${messageID}/reactions/${emoji}/${userID}`;
	},

	/**
	 * Route for:
	 * - GET    `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}`
	 * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}`
	 *
	 * **Note**: You need to URL encode the emoji yourself
	 */
	channelMessageReaction(channelID: Snowflake, messageID: Snowflake, emoji: string) {
		return `/channels/${channelID}/messages/${messageID}/reactions/${emoji}`;
	},

	/**
	 * Route for:
	 * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions`
	 */
	channelMessageAllReactions(channelID: Snowflake, messageID: Snowflake) {
		return `/channels/${channelID}/messages/${messageID}/reactions`;
	},

	/**
	 * Route for:
	 * - POST `/channels/{channel.id}/messages/bulk-delete`
	 */
	channelBulkDelete(channelID: Snowflake) {
		return `/channels/${channelID}/messages/bulk-delete`;
	},

	/**
	 * Route for:
	 * - PUT    `/channels/{channel.id}/permissions/{overwrite.id}`
	 * - DELETE `/channels/{channel.id}/permissions/{overwrite.id}`
	 */
	channelPermission(channelID: Snowflake, overwriteID: Snowflake) {
		return `/channels/${channelID}/permissions/${overwriteID}`;
	},

	/**
	 * Route for:
	 * - GET  `/channels/{channel.id}/invites`
	 * - POST `/channels/{channel.id}/invites`
	 */
	channelInvites(channelID: Snowflake) {
		return `/channels/${channelID}/invites`;
	},

	/**
	 * Route for:
	 * - POST `/channels/{channel.id}/followers`
	 */
	channelFollowers(channelID: Snowflake) {
		return `/channels/${channelID}/followers`;
	},

	/**
	 * Route for:
	 * - POST `/channels/{channel.id}/typing`
	 */
	channelTyping(channelID: Snowflake) {
		return `/channels/${channelID}/typing`;
	},

	/**
	 * Route for:
	 * - GET `/channels/{channel.id}/pins`
	 */
	channelPins(channelID: Snowflake) {
		return `/channels/${channelID}/pins`;
	},

	/**
	 * Route for:
	 * - PUT    `/channels/{channel.id}/pins/{message.id}`
	 * - DELETE `/channels/{channel.id}/pins/{message.id}`
	 */
	channelPin(channelID: Snowflake, messageID: Snowflake) {
		return `/channels/${channelID}/pins/${messageID}`;
	},

	/**
	 * Route for:
	 * - PUT    `/channels/{channel.id}/recipients/{user.id}`
	 * - DELETE `/channels/{channel.id}/recipients/{user.id}`
	 */
	channelRecipient(channelID: Snowflake, userID: Snowflake) {
		return `/channels/${channelID}/recipients/${userID}`;
	},

	/**
	 * Route for:
	 * - GET  `/guilds/{guild.id}/emojis`
	 * - POST `/guilds/{guild.id}/emojis`
	 */
	guildEmojis(guildID: Snowflake) {
		return `/guilds/${guildID}/emojis`;
	},

	/**
	 * Route for:
	 * - GET    `/guilds/{guild.id}/emojis/{emoji.id}`
	 * - PATCH  `/guilds/{guild.id}/emojis/{emoji.id}`
	 * - DELETE `/guilds/{guild.id}/emojis/{emoji.id}`
	 */
	guildEmoji(guildID: Snowflake, emojiID: Snowflake) {
		return `/guilds/${guildID}/emojis/${emojiID}`;
	},

	/**
	 * Route for:
	 * - POST `/guilds`
	 */
	guilds() {
		return '/guilds';
	},

	/**
	 * Route for:
	 * - GET    `/guilds/{guild.id}`
	 * - PATCH  `/guilds/{guild.id}`
	 * - DELETE `/guilds/{guild.id}`
	 */
	guild(guildID: Snowflake) {
		return `/guilds/${guildID}`;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/preview`
	 */
	guildPreview(guildID: Snowflake) {
		return `/guilds/${guildID}/preview`;
	},

	/**
	 * Route for:
	 * - GET   `/guilds/{guild.id}/channels`
	 * - POST  `/guilds/{guild.id}/channels`
	 * - PATCH `/guilds/{guild.id}/channels`
	 */
	guildChannels(guildID: Snowflake) {
		return `/guilds/${guildID}/channels`;
	},

	/**
	 * Route for:
	 * - GET    `/guilds/{guild.id}/members/{user.id}`
	 * - PUT    `/guilds/{guild.id}/members/{user.id}`
	 * - PATCH  `/guilds/{guild.id}/members/{user.id}`
	 * - DELETE `/guilds/{guild.id}/members/{user.id}`
	 */
	guildMember(guildID: Snowflake, userID: Snowflake) {
		return `/guilds/${guildID}/members/${userID}`;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/members`
	 */
	guildMembers(guildID: Snowflake) {
		return `/guilds/${guildID}/members`;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/members/search`
	 */
	guildMembersSearch(guildID: Snowflake) {
		return `/guilds/${guildID}/members/search`;
	},

	/**
	 * Route for:
	 * - PATCH `/guilds/{guild.id}/members/@me/nick`
	 */
	guildCurrentMemberNickname(guildID: Snowflake) {
		return `/guilds/${guildID}/members/@me/nick`;
	},

	/**
	 * Route for:
	 * - PUT    `/guilds/{guild.id}/members/{user.id}/roles/{role.id}`
	 * - DELETE `/guilds/{guild.id}/members/{user.id}/roles/{role.id}`
	 */
	guildMemberRole(guildID: Snowflake, memberID: Snowflake, roleID: Snowflake) {
		return `/guilds/${guildID}/members/${memberID}/roles/${roleID}`;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/bans`
	 */
	guildBans(guildID: Snowflake) {
		return `/guilds/${guildID}/bans`;
	},

	/**
	 * Route for:
	 * - GET    `/guilds/{guild.id}/bans/{user.id}`
	 * - PUT    `/guilds/{guild.id}/bans/{user.id}`
	 * - DELETE `/guilds/{guild.id}/bans/{user.id}`
	 */
	guildBan(guildID: Snowflake, userID: Snowflake) {
		return `/guilds/${guildID}/bans/${userID}`;
	},

	/**
	 * Route for:
	 * - GET   `/guilds/{guild.id}/roles`
	 * - POST  `/guilds/{guild.id}/roles`
	 * - PATCH `/guilds/{guild.id}/roles`
	 */
	guildRoles(guildID: Snowflake) {
		return `/guilds/${guildID}/roles`;
	},

	/**
	 * Route for:
	 * - PATCH  `/guilds/{guild.id}/roles/{role.id}`
	 * - DELETE `/guilds/{guild.id}/roles/{role.id}`
	 */
	guildRole(guildID: Snowflake, roleID: Snowflake) {
		return `/guilds/${guildID}/roles/${roleID}`;
	},

	/**
	 * Route for:
	 * - GET  `/guilds/{guild.id}/prune`
	 * - POST `/guilds/{guild.id}/prune`
	 */
	guildPrune(guildID: Snowflake) {
		return `/guilds/${guildID}/prune`;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/regions`
	 */
	guildVoiceRegions(guildID: Snowflake) {
		return `/guilds/${guildID}/regions`;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/invites`
	 */
	guildInvites(guildID: Snowflake) {
		return `/guilds/${guildID}/invites`;
	},

	/**
	 * Route for:
	 * - GET  `/guilds/{guild.id}/integrations`
	 * - POST `/guilds/{guild.id}/integrations`
	 */
	guildIntegrations(guildID: Snowflake) {
		return `/guilds/${guildID}/integrations`;
	},

	/**
	 * Route for:
	 * - PATCH  `/guilds/{guild.id}/integrations/{integration.id}`
	 * - DELETE `/guilds/{guild.id}/integrations/{integration.id}`
	 */
	guildIntegration(guildID: Snowflake, integrationID: Snowflake) {
		return `/guilds/${guildID}/integrations/${integrationID}`;
	},

	/**
	 * Route for:
	 * - POST `/guilds/{guild.id}/integrations/{integration.id}/sync`
	 */
	guildIntegrationSync(guildID: Snowflake, integrationID: Snowflake) {
		return `/guilds/${guildID}/integrations/${integrationID}/sync`;
	},

	/**
	 * Route for:
	 * - GET   `/guilds/{guild.id}/widget`
	 * - PATCH `/guilds/{guild.id}/widget`
	 */
	guildWidgetSettings(guildID: Snowflake) {
		return `/guilds/${guildID}/widget`;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/widget.json`
	 */
	guildWidgetJSON(guildID: Snowflake) {
		return `/guilds/${guildID}/widget.json`;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/vanity-url`
	 */
	guildVanityUrl(guildID: Snowflake) {
		return `/guilds/${guildID}/vanity-url`;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/widget.png`
	 */
	guildWidgetImage(guildID: Snowflake) {
		return `/guilds/${guildID}/widget.png`;
	},

	/**
	 * Route for:
	 * - GET    `/invites/{invite.code}`
	 * - DELETE `/invites/{invite.code}`
	 */
	invite(code: string) {
		return `/invites/${code}`;
	},

	/**
	 * Route for:
	 * - GET  `/guilds/templates/{template.code}`
	 * - POST `/guilds/templates/{template.code}`
	 */
	template(code: string) {
		return `/guilds/templates/${code}`;
	},

	/**
	 * Route for:
	 * - GET  `/guilds/{guild.id}/templates`
	 * - POST `/guilds/{guild.id}/templates`
	 */
	guildTemplates(guildID: Snowflake) {
		return `/guilds/${guildID}/templates`;
	},

	/**
	 * Route for:
	 * - PUT    `/guilds/{guild.id}/templates/{template.code}`
	 * - PATCH  `/guilds/{guild.id}/templates/{template.code}`
	 * - DELETE `/guilds/{guild.id}/templates/{template.code}`
	 */
	guildTemplate(guildID: Snowflake, code: string) {
		return `/guilds/${guildID}/templates/${code}`;
	},

	/**
	 * Route for:
	 * - GET   `/users/@me`
	 * - GET   `/users/{user.id}`
	 * - PATCH `/users/@me`
	 *
	 * @param [userID='@me'] The user ID, defaulted to `@me`
	 */
	user(userID = '@me') {
		return `/users/${userID}`;
	},

	/**
	 * Route for:
	 * - GET `/users/@me/guilds`
	 */
	userGuilds() {
		return `/users/@me/guilds`;
	},

	/**
	 * Route for:
	 * - DELETE `/users/@me/guilds/{guild.id}`
	 */
	userGuild(guildID: Snowflake) {
		return `/users/@me/guilds/${guildID}`;
	},

	/**
	 * Route for:
	 * - POST `/users/@me/channels`
	 */
	userChannels() {
		return `/users/@me/channels`;
	},

	/**
	 * Route for:
	 * - GET `/users/@me/connections`
	 */
	userConnections() {
		return `/users/@me/connections`;
	},

	/**
	 * Route for:
	 * - GET `/voice/regions`
	 */
	voiceRegions() {
		return `/voice/regions`;
	},

	/**
	 * Route for:
	 * - GET  `/channels/{channel.id}/webhooks`
	 * - POST `/channels/{channel.id}/webhooks`
	 */
	channelWebhooks(channelID: Snowflake) {
		return `/channels/${channelID}/webhooks`;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/webhooks`
	 */
	guildWebhooks(guildID: Snowflake) {
		return `/guilds/${guildID}/webhooks`;
	},

	/**
	 * Route for:
	 * - GET    `/webhooks/{webhook.id}`
	 * - GET    `/webhooks/{webhook.id}/{webhook.token}`
	 * - PATCH  `/webhooks/{webhook.id}`
	 * - PATCH  `/webhooks/{webhook.id}/{webhook.token}`
	 * - DELETE `/webhooks/{webhook.id}`
	 * - DELETE `/webhooks/{webhook.id}/{webhook.token}`
	 * - POST   `/webhooks/{webhook.id}/{webhook.token}`
	 *
	 * - POST   `/webhooks/{application.id}/{interaction.token}`
	 */
	webhook(webhookID: Snowflake, webhookToken?: string) {
		const parts = ['', 'webhooks', webhookID];

		if (webhookToken) parts.push(webhookToken);

		return parts.join('/');
	},

	/**
	 * Route for:
	 * - PATCH  `/webhooks/{webhook.id}/{webhook.token}/messages/@original`
	 * - PATCH  `/webhooks/{webhook.id}/{webhook.token}/messages/{message.id}`
	 * - DELETE `/webhooks/{webhook.id}/{webhook.token}/messages/@original`
	 * - DELETE `/webhooks/{webhook.id}/{webhook.token}/messages/{message.id}`
	 *
	 * - PATCH  `/webhooks/{application.id}/{interaction.token}/messages/@original`
	 * - PATCH  `/webhooks/{application.id}/{interaction.token}/messages/{message.id}`
	 * - DELETE `/webhooks/{application.id}/{interaction.token}/messages/{message.id}`
	 *
	 * @param [messageID='@original'] The message ID to change, defaulted to `@original`
	 */
	webhookMessage(webhookID: Snowflake, webhookToken: string, messageID = '@original') {
		return `/webhooks/${webhookID}/${webhookToken}/messages/${messageID}`;
	},

	/**
	 * Route for:
	 * - POST `/webhooks/{webhook.id}/{webhook.token}/github`
	 * - POST `/webhooks/{webhook.id}/{webhook.token}/slack`
	 */
	webhookPlatform(webhookID: Snowflake, webhookToken: string, platform: 'github' | 'slack') {
		return `/webhooks/${webhookID}/${webhookToken}/${platform}`;
	},

	/**
	 * Route for:
	 * - GET `/gateway`
	 */
	gateway() {
		return `/gateway`;
	},

	/**
	 * Route for:
	 * - GET `/gateway/bot`
	 */
	gatewayBot() {
		return `/gateway/bot`;
	},

	/**
	 * Route for:
	 * - GET `/oauth2/applications/@me`
	 */
	oauth2CurrentApplication() {
		return `/oauth2/applications/@me`;
	},

	/**
	 * Route for:
	 * - GET `/oauth2/@me`
	 */
	oauth2CurrentAuthorization() {
		return `/oauth2/@me`;
	},

	/**
	 * Route for:
	 * - GET  `/applications/{application.id}/commands`
	 * - POST `/applications/{application.id}/commands`
	 */
	applicationCommands(applicationID: Snowflake) {
		return `/applications/${applicationID}/commands`;
	},

	/**
	 * Route for:
	 * - GET    `/applications/{application.id}/commands/{command.id}`
	 * - PATCH  `/applications/{application.id}/commands/{command.id}`
	 * - DELETE `/applications/{application.id}/commands/{command.id}`
	 */
	applicationCommand(applicationID: Snowflake, commandID: Snowflake) {
		return `/applications/${applicationID}/commands/${commandID}`;
	},

	/**
	 * Route for:
	 * - GET  `/applications/{application.id}/guilds/{guild.id}/commands`
	 * - POST `/applications/{application.id}/guilds/{guild.id}/commands`
	 */
	applicationGuildCommands(applicationID: Snowflake, guildID: Snowflake) {
		return `/applications/${applicationID}/guilds/${guildID}/commands`;
	},

	/**
	 * Route for:
	 * - GET    `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}`
	 * - PATCH  `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}`
	 * - DELETE `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}`
	 */
	applicationGuildCommand(applicationID: Snowflake, guildID: Snowflake, commandID: Snowflake) {
		return `/applications/${applicationID}/guilds/${guildID}/commands/${commandID}`;
	},

	/**
	 * Route for:
	 * - POST `/interactions/{interaction.id}/{interaction.token}/callback`
	 */
	interactionCallback(interactionID: Snowflake, interactionToken: string) {
		return `/interactions/${interactionID}/${interactionToken}/callback`;
	},

	/**
	 * Route for:
	 * - GET   `/guilds/{guild.id}/member-verification`
	 * - PATCH `/guilds/{guild.id}/member-verification`
	 */
	guildMemberVerification(guildID: Snowflake) {
		return `/guilds/${guildID}/member-verification`;
	},
};

export const OAuth2Routes = {
	authorizationURL: `https://discord.com/api/v${APIVersion}/oauth2/authorize`,
	tokenURL: `https://discord.com/api/v${APIVersion}/oauth2/token`,
	/**
	 * See https://tools.ietf.org/html/rfc7009
	 */
	tokenRevocationURL: `https://discord.com/api/v${APIVersion}/oauth2/token/revoke`,
} as const;

/**
 * Freeze route object
 * @internal
 */
Object.freeze(OAuth2Routes);
