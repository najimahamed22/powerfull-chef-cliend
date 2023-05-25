import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();

  return (
    <section
      className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
      style={{
        background: "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)",
      }}>
      <div className="max-w-screen-md w-full px-6 py-12 bg-white shadow-lg rounded-xl">
        <div className="text-center">
          <img
            src="data:image/png;base64,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"
            alt="Error"
            className="w-48 mx-auto mb-8"
          />
          <h1 className="text-5xl font-bold text-rose-700 mb-2">
            {status || "404"} Error
          </h1>
          <p className="text-lg font-medium text-red-500 mb-4">
            {error?.message || "Oops! Something went wrong."}
          </p>
          <Link
            to="/"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg">
            Go back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
