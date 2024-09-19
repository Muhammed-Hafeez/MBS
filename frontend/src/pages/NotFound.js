import React from "react";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for doesn’t exist or was removed.</p>
      <a href="/">Go Back to Home</a>
    </div>
  );
};

export default NotFoundPage;
