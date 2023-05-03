import { useRouteError } from "react-router-dom";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <AuthLayouts>
      <div className="flex flex-col justify-center min-h-screen items-center px-5">
        <h1 className="text-3xl font-bold">Oops!</h1>
        <p className="my-5 text-xl text-center">
          Sorry, an unexpected error has occured
        </p>
        <p className="text-lg">{error.statusText || error.message}</p>
      </div>
    </AuthLayouts>
  );
};

export default ErrorPage;
