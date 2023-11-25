import { atom } from "recoil";

export const chatState = atom({
    key: "chatState",
    default: {
        showProfiles: true,
        chatId: null
    },
});

