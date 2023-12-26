import { createStore } from './redux';
import infoJson from '../info.json';
import { TextEncoder } from 'util';
import { vi } from 'vitest';
import { MockBroadcastChannel } from './mock-broadcast-channel';

export const createTestStore = createStore;

vi.stubGlobal('BroadcastChannel', MockBroadcastChannel);

const originalFetch = global.fetch;
global.fetch = (...args) => {
    if (args[0].toString().includes('/info.json')) {
        return Promise.resolve({
            ok: true,
            status: 200,
            json: () => Promise.resolve(infoJson),
        }) as any;
    } else {
        return originalFetch(...args);
    }
};

global.TextEncoder = TextEncoder;
