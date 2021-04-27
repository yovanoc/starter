/**
 * GQLESS AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

import { ScalarsEnumsHash } from "gqless";

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: string;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
}

export const scalarsEnumsHash: ScalarsEnumsHash = {
  DateTime: true,
  JSONObject: true,
  String: true,
  Boolean: true,
};
export const generatedSchema = {
  query: {
    __typename: { __type: "String!" },
    test: { __type: "Test!", __args: { test: "String!" } },
  },
  mutation: {
    __typename: { __type: "String!" },
    test: { __type: "String!", __args: { test: "String!" } },
  },
  subscription: {
    __typename: { __type: "String!" },
    foobars: { __type: "Boolean" },
  },
  Test: {
    __typename: { __type: "String!" },
    date: { __type: "DateTime!" },
    name: { __type: "String!" },
  },
  User: { __typename: { __type: "String!" }, id: { __type: "String!" } },
} as const;

export interface Query {
  __typename: "Query" | undefined;
  test: (args: { test: Scalars["String"] }) => Test;
}

export interface Mutation {
  __typename: "Mutation" | undefined;
  test: (args: { test: Scalars["String"] }) => ScalarsEnums["String"];
}

export interface Subscription {
  __typename: "Subscription" | undefined;
  foobars?: Maybe<ScalarsEnums["Boolean"]>;
}

export interface Test {
  __typename: "Test" | undefined;
  date: ScalarsEnums["DateTime"];
  name: ScalarsEnums["String"];
}

export interface User {
  __typename: "User" | undefined;
  id: ScalarsEnums["String"];
}

export interface SchemaObjectTypes {
  Query: Query;
  Mutation: Mutation;
  Subscription: Subscription;
  Test: Test;
  User: User;
}
export type SchemaObjectTypesNames =
  | "Query"
  | "Mutation"
  | "Subscription"
  | "Test"
  | "User";

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export type ScalarsEnums = MakeNullable<Scalars>;
