interface ErrorType {
  code: 'API_ERROR',
  data?: unknown
}

type NextErrorFn = (error: ErrorType) => void;