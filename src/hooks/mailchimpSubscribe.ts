import { Reducer, useReducer } from 'react'

declare global {
  interface Window {
    [s: string]: Callback | undefined
  }
}

interface Callback {
  (s: any): void // eslint-disable-line @typescript-eslint/no-explicit-any
}

function jsonp<T>(url: string, parameter = 'callback') {
  const callbackName = `jsonp${Math.random().toString().substring(2)}${Date.now()}`
  const script = document.createElement('script')

  const fn = (cb: Callback) => (data: unknown) => {
    window[callbackName] = undefined // delete window[callbackName]
    document.head.removeChild(script)
    cb(data)
  }

  return new Promise<T>((resolve, reject) => {
    window[callbackName] = fn(resolve)
    script.onerror = fn(reject)
    // setTimeout(script.onerror, 5000)
    script.src = `${url}&${parameter}=${callbackName}`
    document.head.appendChild(script)
  })
}

interface MailChimpData {
  EMAIL: string
  [s: string]: string | number | boolean
}

const toQueryString = (data: MailChimpData) =>
  Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&')

const getUrl = (url: string) => url.replace('/post?', '/post-json?')

const initialState = {
  message: '',
  isError: false,
  isSubmitting: false,
  isSubmitted: false,
}

type State = typeof initialState

interface Action {
  type: 'submit' | 'success' | 'error'
  payload?: string
}

const reducer: Reducer<State, Action> = (_state, action) => {
  switch (action.type) {
    case 'submit':
      return { ...initialState, isSubmitting: true }
    case 'success':
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return { ...initialState, message: action.payload! }
    // case 'error':
    default:
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return { ...initialState, message: action.payload!, isError: true }
  }
}

interface Response {
  msg: string
  result: 'success' | 'error'
}

export const useMailchimp = (url: string) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return {
    subscribe: async (data: MailChimpData) => {
      const uri = `${getUrl(url)}&${toQueryString(data)}`
      dispatch({ type: 'submit' })
      try {
        const { result, msg } = await jsonp<Response>(uri, 'c')
        dispatch({ type: result, payload: msg })
      } catch (error) {
        dispatch({ type: 'error', payload: `${error}` })
      }
    },
    ...state,
  }
}
