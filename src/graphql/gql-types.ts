
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateUserInput {
    email?: Nullable<string>;
    name?: Nullable<string>;
    surname?: Nullable<string>;
}

export interface IQuery {
    getUser(email?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
    getUsers(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
}

export interface UserProperties {
    name?: Nullable<string>;
    email?: Nullable<string>;
    canDisplay?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    canDelete?: Nullable<boolean>;
    createdBy?: Nullable<string>;
    updatedAt?: Nullable<string>;
    createdAt?: Nullable<string>;
}

export interface User {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    properties?: Nullable<UserProperties>;
}

export interface IMutation {
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
}

type Nullable<T> = T | null;
