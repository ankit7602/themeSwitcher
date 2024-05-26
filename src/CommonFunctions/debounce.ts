import { useCallback } from "react";

// Define the type for the debounce function
type DebouncedFunction<T extends (...args: any[]) => any> = (
    ...args: Parameters<T>
) => void;

export const debounce = <T extends (...args: any[]) => any>(func: T, delay: number): DebouncedFunction<T> => {
    let timer: ReturnType<typeof setTimeout> | null;
    return function (this: any, ...args: Parameters<T>) {
        const context = this;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            timer = null;
            func.apply(context, args);
        }, delay);
    };
};

export const useDebounceFunction = <T extends (...args: any[]) => any>(callback: T, delay: number): DebouncedFunction<T> => {
    const debouncedFn = useCallback(
        debounce(callback, delay),
        [callback, delay] // recreate if callback or delay changes
    );
    return debouncedFn;
};
