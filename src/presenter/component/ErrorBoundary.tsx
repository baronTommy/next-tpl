import type { ErrorInfo, ReactNode } from "react";
import React from "react";

interface Props {
  children: ReactNode;
}
interface State {
  hasError: boolean;
}
export class ErrorBoundary extends React.Component<Props, State> {
  static getDerivedStateFromError(e: Error): State {
    console.log(e);

    return { hasError: true };
  }

  state: State = {
    hasError: false,
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error({ error });
    console.error({ errorInfo });
  }

  render(): ReactNode {
    return this.state.hasError ? (
      <h1>Something went wrong.</h1>
    ) : (
      this.props.children
    );
  }
}
