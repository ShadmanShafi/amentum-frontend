import {
  ErrorBoundary as ReactErrorBoundary,
  type FallbackProps,
} from "react-error-boundary";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold tracking-tighter text-gray-800 animate-bounce">
          Oops!
        </h1>

        <p className="mt-4 text-xl text-gray-600">Something went wrong.</p>

        <p className="mt-2 text-gray-500">{error.message}</p>

        <Button className="mt-6" onClick={resetErrorBoundary}>
          Try Again
        </Button>

        <Button
          className="mt-2"
          variant="outline"
          onClick={() => navigate("/")}
        >
          Go Back Home
        </Button>
      </div>
    </div>
  );
};

const ErrorBoundary: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of app so the error doesn't happen again.
      }}
    >
      {props.children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
