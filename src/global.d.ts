type code = "unknown";
interface ErrorType {
  code: code;
  data?: unknown;
}

type NextErrorFn = (error?: ErrorType) => void;
