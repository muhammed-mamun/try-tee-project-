// ErrorPage.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="flex items-center justify-center ">
        <div className="text-center">
          <h1>ERROR 404</h1>
          <h1 className="text-4xl font-bold text-red-500 mb-4 ">
            Oops! Something went wrong.
          </h1>
          <p className="text-xl text-gray-700">
            We apologize for the inconvenience. Please try again later.
          </p>
          <p className="btn btn-ghost btn-outline btn-success btn-sm mt-10">
            <Link to={"/"}>Go to Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
