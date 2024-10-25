import { Link } from "react-router-dom";

export function Unauthorized() {
  return (
    <div className="unauthorize-page">
      <h1>401</h1>
      <h2>Unauthorized</h2>
      <p>
        you don't have access to this page please login if you are an authorized
        person
      </p>
      <Link to="/login">Go to login page</Link>
    </div>
  );
}
export function Error() {
  return (
    <div className="error-page">
      <h1>500</h1>
      <h2>oops!! something went wrong, please try again later</h2>
    </div>
  );
}
export function NotFoundPage() {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for doesn’t exist or was removed.</p>
      <a href="/">Go Back to Home</a>
    </div>
  );
}
