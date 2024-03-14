import { Link } from "react-router-dom";

function ErrorHandling() {
  return (
    <main>
      <div className="bg-[url('https://i.postimg.cc/L5FRBKKs/pexels-vie-studio-4439425.jpg')]">
        <p className="m-10 mb-20 bg-orange-100 text-5xl">404</p>
        <h1 className="mt-2 mb-3 font-serif">Page Not Found</h1>
        <p className="mt-10 font-bold font-mono">Sorry, we couldn’t find the page you’re looking for.</p>
        <div>
          <Link to={`/`}><button className="mt-20 rounded-xl btn btn-error">Go back home</button></Link>
        </div>
      </div>
    </main>
  );
}

export default ErrorHandling;
