import { readable, writable, type Readable, type Writable } from 'svelte/store';
import {
	type Message,
	type Credentials,
	type Config,
	type Auth,
	type Bolt,
	type Account,
	type SelectedPlay,
	configDefaults,
	Game,
	Client
} from './interfaces';

// readable stores. known at starup
export const internalUrl: Readable<string> = readable('https://bolt-internal');
export const productionClientId: Readable<string> = readable(
	'1fddee4e-b100-4f4e-b2b0-097f9088f9d2'
);

// writable stores
export const bolt: Writable<Bolt> = writable();
export const platform: Writable<string | null> = writable('');
export const config: Writable<Config> = writable({ ...configDefaults });
export const credentials: Writable<Map<string, Credentials>> = writable(new Map());
export const messageList: Writable<Array<Message>> = writable([]);
export const pendingOauth: Writable<Auth | null> = writable({});
export const pendingGameAuth: Writable<Array<Auth>> = writable([]);
export const rs3InstalledHash: Writable<string | null> = writable('');
export const runeLiteInstalledId: Writable<string | null> = writable('');
export const hdosInstalledVersion: Writable<string | null> = writable('');
export const isConfigDirty: Writable<boolean> = writable(false);
export const accountList: Writable<Map<string, Account>> = writable(new Map());
export const selectedPlay: Writable<SelectedPlay> = writable({
	game: Game.osrs,
	client: Client.runeLite
});
export const showDisclaimer: Writable<boolean> = writable(false);
