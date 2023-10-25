import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const error: unknown = useRouteError();
  return (
    <div className="prose p-4">
      <h1>Error</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
