import Footer from "./Footer";
import UserPage from "../pages/UserPage";

function About() {


    /*  return(
     
         <div className="">
             <h3>Welcome to our Book Recommendation Web Application!</h3>
             <p>Here, we are dedicated to creating an immersive literary 
                 experience tailored just for you. Our platform is designed 
                 to foster a love for reading by providing personalized book 
                 recommendations that align with your unique preferences.
             </p>
 
             <p>Join our community of book enthusiasts, where the joy of discovering 
                 new tales is celebrated. The About Page is a glimpse into our mission, 
                 values, and the dedicated team behind the scenes. Feel free to explore 
                 and connect with us as we embark on this literary adventure together. 
                 Happy reading!
             </p>
         <div>
         <a href={`${"https://www.linkedin.com/in/egbagba-ese/"}`} target="_blank" rel="noopener noreferrer"><button>LinkedIn</button></a>
         <a href={`${"https://github.com/Andr3L4"}`} target="_blank" rel="noopener noreferrer"><button>Github</button></a>
         <Footer />
         </div>    
         </div> */
    return (
        <div className='bg-[url("https://images.pexels.com/photos/4207791/pexels-photo-4207791.jpeg?auto=compress&cs=tinysrgb&w=600")] bg-cover bg-center full-screen w-76'>

            <div style={{ position: 'relative', minHeight: '80vh' }}>
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        right: 0,
                        zIndex: 1,
                        padding: '10px',
                        background: 'stone',
                    }}
                >
                    <UserPage />
                </div>
                <div>
                    <h3 className="text-stone-950 text-3xl font-serif font-bold m-20 inline-block align-middle ">Welcome to our Book Recommendation Web Application!</h3>
                </div>
                <div>
                    <div className="break-all my-8 ml-5 mr-5 inline-block align-bottom font-serif mb-10 text-zinc-900  text-center text-2xl semibold" >
                        <p>Here, we are dedicated to creating an immersive literary
                            experience tailored just for you. Our platform is designed
                            to foster a love for reading by providing personalized book
                            recommendations that align with your unique preferences.</p>
                            <br/>
                        <p>The About Page is a glimpse into our mission,values, and the dedicated team behind the scenes. Feel free to explore
                            and connect with us as we embark on this literary adventure together.
                            Happy reading!
                        </p>
                    </div>
                    <p className="text-lg font-serif font-semibold mt-20">Find us on Github</p>
                    <div>
                        <div className="mt-20 px-6 pb-10">
                            <div className="space-x-6">
                                <a href={`${"https://github.com/Egbagba"}`}><button className="btn btn-outline btn-success">Ese Egbagba</button></a>
                                <a href={`${"https://github.com/Andr3L4"}`}><button className="btn btn-outline btn-warning">Andre SR</button></a>
                            </div>
                            <div className="mt-20 footer footer-center">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            < Footer />
        </div>
    );


}

export default About;