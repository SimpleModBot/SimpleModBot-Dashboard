import { useNavigate } from 'react-router-dom';
import { GuildItem } from '../components/GuildItem';
import { Container } from '../utils/styles';

export function Menu() {
	const navigate = useNavigate();
	let guilds: any[] = [
		{
			id: '169256939211980800',
			name: 'Discord Town Hall',
			icon: '09ce97fca59c01223513c35f8bb68599',
			owner: false,
			permissions: 1379328,
			features: [
				'WELCOME_SCREEN_ENABLED',
				'FEATURABLE',
				'THREADS_ENABLED',
				'NEW_THREAD_PERMISSIONS',
				'ROLE_ICONS',
				'MEMBER_VERIFICATION_GATE_ENABLED',
				'PREVIEW_ENABLED',
				'VERIFIED',
				'THREE_DAY_THREAD_ARCHIVE',
				'BANNER',
				'NEWS',
				'COMMUNITY',
				'PARTNERED',
				'SEVEN_DAY_THREAD_ARCHIVE',
				'VIP_REGIONS',
				'CHANNEL_BANNER',
				'ANIMATED_BANNER',
				'DISCOVERABLE',
				'PRIVATE_THREADS',
				'MEMBER_PROFILES',
				'ANIMATED_ICON',
				'VANITY_URL',
				'INVITE_SPLASH',
			],
			permissions_new: '1379328',
		},
		{
			id: '563139253542846474',
			name: 'BONEWORKS',
			icon: 'a0be0c0f80a488e62324262c6111af43',
			owner: false,
			permissions: 104140352,
			features: [
				'WELCOME_SCREEN_ENABLED',
				'THREADS_ENABLED',
				'NEW_THREAD_PERMISSIONS',
				'ROLE_ICONS',
				'MEMBER_VERIFICATION_GATE_ENABLED',
				'PREVIEW_ENABLED',
				'ENABLED_DISCOVERABLE_BEFORE',
				'THREE_DAY_THREAD_ARCHIVE',
				'BANNER',
				'NEWS',
				'COMMUNITY',
				'SEVEN_DAY_THREAD_ARCHIVE',
				'CHANNEL_BANNER',
				'ANIMATED_BANNER',
				'PRIVATE_THREADS',
				'MEMBER_PROFILES',
				'ANIMATED_ICON',
				'VANITY_URL',
				'INVITE_SPLASH',
			],
			permissions_new: '966471781952',
		},
		{
			id: '602960684870926386',
			name: 'DAVIGO',
			icon: 'a_8209610a6bee687a552dc1e03feb7cf1',
			owner: false,
			permissions: 104189505,
			features: [
				'WELCOME_SCREEN_ENABLED',
				'THREADS_ENABLED',
				'NEW_THREAD_PERMISSIONS',
				'ROLE_ICONS',
				'MEMBER_VERIFICATION_GATE_ENABLED',
				'PREVIEW_ENABLED',
				'ENABLED_DISCOVERABLE_BEFORE',
				'COMMERCE',
				'BANNER',
				'THREE_DAY_THREAD_ARCHIVE',
				'NEWS',
				'COMMUNITY',
				'SEVEN_DAY_THREAD_ARCHIVE',
				'CHANNEL_BANNER',
				'ANIMATED_BANNER',
				'DISCOVERABLE',
				'PRIVATE_THREADS',
				'MEMBER_PROFILES',
				'ANIMATED_ICON',
				'VANITY_URL',
				'INVITE_SPLASH',
			],
			permissions_new: '1002979053121',
		},
		{
			id: '665811923471958018',
			name: "Auxtal's Discord",
			icon: '1152fa2712c366d7c55aec56d38dc1a5',
			owner: false,
			permissions: 267775718,
			features: ['NEWS', 'COMMUNITY', 'THREADS_ENABLED', 'NEW_THREAD_PERMISSIONS', 'MEMBER_VERIFICATION_GATE_ENABLED', 'PREVIEW_ENABLED', 'ANIMATED_ICON', 'INVITE_SPLASH', 'THREE_DAY_THREAD_ARCHIVE'],
			permissions_new: '2188553613030',
		},
		{
			id: '723473254559514686',
			name: 'SpiderHeck',
			icon: 'a_ad8eec996bff8a23a75d64a452d446be',
			owner: false,
			permissions: 37080641,
			features: [
				'BANNER',
				'WELCOME_SCREEN_ENABLED',
				'ANIMATED_ICON',
				'NEWS',
				'COMMUNITY',
				'THREADS_ENABLED',
				'SEVEN_DAY_THREAD_ARCHIVE',
				'NEW_THREAD_PERMISSIONS',
				'ROLE_ICONS',
				'MEMBER_VERIFICATION_GATE_ENABLED',
				'DISCOVERABLE',
				'PREVIEW_ENABLED',
				'PRIVATE_THREADS',
				'MEMBER_PROFILES',
				'ENABLED_DISCOVERABLE_BEFORE',
				'INVITE_SPLASH',
				'THREE_DAY_THREAD_ARCHIVE',
			],
			permissions_new: '968552205889',
		},
		{
			id: '723910452727513168',
			name: 'Fusion Empire',
			icon: 'd850a6733a0e8fad4a4780892d836f3b',
			owner: false,
			permissions: 37080641,
			features: [
				'WELCOME_SCREEN_ENABLED',
				'ROLE_ICONS',
				'MEMBER_VERIFICATION_GATE_ENABLED',
				'PREVIEW_ENABLED',
				'ENABLED_DISCOVERABLE_BEFORE',
				'THREE_DAY_THREAD_ARCHIVE',
				'BANNER',
				'NEWS',
				'COMMUNITY',
				'SEVEN_DAY_THREAD_ARCHIVE',
				'CHANNEL_BANNER',
				'ANIMATED_BANNER',
				'DISCOVERABLE',
				'PRIVATE_THREADS',
				'MEMBER_PROFILES',
				'ANIMATED_ICON',
				'VANITY_URL',
				'INVITE_SPLASH',
			],
			permissions_new: '554087861825',
		},
		{
			id: '731532456724922459',
			name: 'recon dev',
			icon: 'a_bbbc27b67719cd799e0bfef5230472bc',
			owner: false,
			permissions: 37080641,
			features: [
				'WELCOME_SCREEN_ENABLED',
				'THREADS_ENABLED',
				'NEW_THREAD_PERMISSIONS',
				'ROLE_ICONS',
				'MEMBER_VERIFICATION_GATE_ENABLED',
				'PREVIEW_ENABLED',
				'ENABLED_DISCOVERABLE_BEFORE',
				'THREE_DAY_THREAD_ARCHIVE',
				'BANNER',
				'NEWS',
				'COMMUNITY',
				'SEVEN_DAY_THREAD_ARCHIVE',
				'CHANNEL_BANNER',
				'ANIMATED_BANNER',
				'DISCOVERABLE',
				'PRIVATE_THREADS',
				'MEMBER_PROFILES',
				'ANIMATED_ICON',
				'VANITY_URL',
				'INVITE_SPLASH',
			],
			permissions_new: '521875607105',
		},
		{
			id: '734127708488859831',
			name: 'Origins',
			icon: 'bd2c8510514e33409a3920aba556c91a',
			owner: false,
			permissions: 104189505,
			features: [
				'BANNER',
				'WELCOME_SCREEN_ENABLED',
				'NEWS',
				'COMMUNITY',
				'THREADS_ENABLED',
				'SEVEN_DAY_THREAD_ARCHIVE',
				'NEW_THREAD_PERMISSIONS',
				'ROLE_ICONS',
				'MEMBER_VERIFICATION_GATE_ENABLED',
				'PRIVATE_THREADS',
				'PREVIEW_ENABLED',
				'MEMBER_PROFILES',
				'ANIMATED_ICON',
				'INVITE_SPLASH',
				'THREE_DAY_THREAD_ARCHIVE',
			],
			permissions_new: '968619314753',
		},
		{
			id: '753366889924657193',
			name: 'Chill With Friends.',
			icon: '699999c5a21a5ffa29cdc74401ce3c9e',
			owner: false,
			permissions: 1610612679,
			features: ['WELCOME_SCREEN_ENABLED', 'NEWS', 'COMMUNITY', 'MEMBER_VERIFICATION_GATE_ENABLED', 'THREADS_ENABLED', 'PREVIEW_ENABLED', 'NEW_THREAD_PERMISSIONS'],
			permissions_new: '1073204953031',
		},
		{
			id: '804373317128552449',
			name: 'AuxBot - Support Server',
			icon: 'ce97be069d5a3ca2cc7681855f643e79',
			owner: false,
			permissions: 268299974,
			features: ['THREADS_ENABLED_TESTING', 'NEWS', 'COMMUNITY', 'MEMBER_VERIFICATION_GATE_ENABLED', 'THREADS_ENABLED', 'PREVIEW_ENABLED', 'NEW_THREAD_PERMISSIONS'],
			permissions_new: '2186406653638',
		},
		{
			id: '805969743466332191',
			name: 'Blancworks',
			icon: 'a_4d88c644c0b6781b1bacd52a6cb1b2e9',
			owner: false,
			permissions: 104189632,
			features: [
				'WELCOME_SCREEN_ENABLED',
				'THREADS_ENABLED',
				'NEW_THREAD_PERMISSIONS',
				'ROLE_ICONS',
				'MEMBER_VERIFICATION_GATE_ENABLED',
				'PREVIEW_ENABLED',
				'THREE_DAY_THREAD_ARCHIVE',
				'BANNER',
				'NEWS',
				'COMMUNITY',
				'SEVEN_DAY_THREAD_ARCHIVE',
				'CHANNEL_BANNER',
				'ANIMATED_BANNER',
				'PRIVATE_THREADS',
				'MEMBER_PROFILES',
				'ANIMATED_ICON',
				'VANITY_URL',
				'INVITE_SPLASH',
			],
			permissions_new: '693741407936',
		},
		{
			id: '832099706120831006',
			name: "dood's Army",
			icon: 'a81815b6d73c035c351032507ea248c3',
			owner: false,
			permissions: 104189505,
			features: ['WELCOME_SCREEN_ENABLED', 'NEWS', 'COMMUNITY', 'THREADS_ENABLED', 'NEW_THREAD_PERMISSIONS', 'ANIMATED_ICON', 'INVITE_SPLASH', 'THREE_DAY_THREAD_ARCHIVE'],
			permissions_new: '315784285761',
		},
		{
			id: '848642391094722560',
			name: "Ender's Mansion",
			icon: 'c1424ee8266adb4a5b1e0120fbe023c3',
			owner: false,
			permissions: 2147483647,
			features: ['NEWS', 'COMMUNITY', 'ANIMATED_ICON', 'INVITE_SPLASH', 'THREE_DAY_THREAD_ARCHIVE'],
			permissions_new: '2199023255551',
		},
		{
			id: '900208666844725258',
			name: 'gaming club',
			icon: '31e504df6e4902c09151c94ed2dd6ca0',
			owner: false,
			permissions: 2147483647,
			features: ['WELCOME_SCREEN_ENABLED', 'NEWS', 'COMMUNITY', 'MEMBER_VERIFICATION_GATE_ENABLED', 'PREVIEW_ENABLED'],
			permissions_new: '2199023255551',
		},
		{
			id: '911107504421875712',
			name: 'SimpleModBot² Community',
			icon: 'ff3833051a710a054156880de9cd7e67',
			owner: true,
			permissions: 2147483647,
			features: ['WELCOME_SCREEN_ENABLED', 'NEWS', 'COMMUNITY'],
			permissions_new: '2199023255551',
		},
	];
	const handleClick = (guildID: string) => {
		localStorage.setItem('guild-id', guildID);
		navigate('/guild/categories');
	};

	const oauthState = localStorage.getItem('oauth-state');
	const tokenType = localStorage.getItem('token-type');
	const accessToken = localStorage.getItem('access-token');

	if (oauthState === 'success') {
		// fetch('https://discord.com/api/users/@me/guilds', {
		// 	headers: {
		// 		authorization: `${tokenType} ${accessToken}`,
		// 	},
		// })
		// 	.then((result) => result.json())
		// 	.then((response) => {
		// 		response.forEach((element: any) => {
		// 			guilds.push(element);
		// 		});
		// 		
		// })
		// .catch(console.error);
	} else window.location.href = '/';

	return (
		<div>
			<Container>
				<h2 style={{ fontWeight: 300 }}>Select a Guild to edit.</h2>
				<div>
					{guilds.map((guild) => {
						return (
							<div key={guild.id} onClick={() => handleClick(guild.id)}>
								<GuildItem guild={guild} />
							</div>
						);
					})}
				</div>
			</Container>
		</div>
	);
}
