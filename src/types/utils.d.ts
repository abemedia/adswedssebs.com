// eslint-disable-next-line import/no-extraneous-dependencies
import type { Any, Object } from 'ts-toolbelt'

export type Must<T> = Object.Compulsory<T, Any.Key, 'deep'>
