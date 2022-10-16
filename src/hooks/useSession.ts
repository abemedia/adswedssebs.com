import { Dispatch, SetStateAction, useEffect, useState } from 'react'

const isBrowser = () => typeof window !== 'undefined'

const getItem = (key: string) => {
  if (!isBrowser()) return undefined
  const value = window.sessionStorage.getItem(key)
  return value ? JSON.parse(value) : undefined
}

const setItem = <S>(key: string, value: S) => {
  if (!isBrowser()) return
  if (value === undefined) {
    window.sessionStorage.removeItem(key)
  } else {
    window.sessionStorage.setItem(key, JSON.stringify(value))
  }
}

export const useSession = <S>(key: string, initialValue?: S): [S, Dispatch<SetStateAction<S>>] => {
  const [value, setValue] = useState<S>(getItem(key) || initialValue)
  useEffect(() => setItem(key, value), [key, value])
  return [value, setValue]
}
