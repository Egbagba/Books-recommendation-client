import { Link } from "react-router-dom";

function ErrorHandling() {
  return (
    <main>
      <div>
        <p className="m-10 mb-20 bg-orange-100 text-5xl">404</p>
        <h1 className="m">Page not found</h1>
        <p className="mt-10 font-bold">Sorry, we couldn’t find the page you’re looking for.</p>
        <div>
          <Link to={`/`}><button className="mt-20 btn btn-error">Go back home</button></Link>
        </div>
      </div>
    </main>
  );
}

export default ErrorHandling;
