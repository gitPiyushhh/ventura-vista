import { atom } from 'recoil';

export const uiState = atom({
    key: 'uiState',
    default: {
        status: "idle",
        activeTab: "Cover letter"
    },
    
})