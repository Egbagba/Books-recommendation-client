import { Link } from "react-router-dom";

function ErrorHandling() {
  return (
    <main>
      <div>
        <p>404</p>
        <h1>Page not found</h1>
        <p>Sorry, we couldn’t find the page you’re looking for.</p>
        <div>
          <Link to={`/`}><button className="btn btn-error">Go back home</button></Link>
        </div>
      </div>
    </main>
  );
}

export default ErrorHandling;
