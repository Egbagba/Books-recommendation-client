import { Link } from "react-router-dom";

function ErrorHandling() {
  return (
    <main>
      <div className="bg-[url('https://i.postimg.cc/281JPCS3/pexels-vie-studio-4439425.jpg')]">
        <p className="m-10 mb-20 font-extrabold text-5xl">404</p>
        <h1 className="mt-2 mb-3 font-serif text-3xl">Page Not Found</h1>
        <p className="mt-10 font-bold font-serif text-xl">Sorry, we couldn’t find the page you’re looking for.</p>
        <div>
          <Link to={`/`}><button className="mt-20 rounded-xl btn btn-error">Go back home</button></Link>
        </div>
      </div>
    </main>
  );
}

export default ErrorHandling;
