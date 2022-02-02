/**
 * @description Pick from T and U those types
 * which are not in T and U at once
 */
export type Without<T, U> = T extends U ? never : T;
export type Exclusive<T, U> = Without<T, U> & Without<U, T>;
