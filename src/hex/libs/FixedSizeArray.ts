export type FixedSizeArray<N extends number, T> = {
    0: T;
    length: N;
} & ReadonlyArray<T>;
