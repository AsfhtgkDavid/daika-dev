import { useSyncExternalStore } from "react";

export const useIsClient = () => {
    return useSyncExternalStore(
        () => () => {},
        () => true,
        () => false
    );
}