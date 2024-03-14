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

        <div className='bg-[url("https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=600")] bg-cover bg-center full-screen'>

            <div style={{ position: 'relative' }}>
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        right: 0,
                        zIndex: 1,
                        padding: '10px',
                        background: 'white',
                    }}
                >
                    <UserPage/>
                </div>
                <div>
                    <h3 className="text-xl m-20">Welcome to our Book Recommendation Web Application!</h3>
                </div>

                <div className="mt-8 text-center mb-10 text-white text-3xl semibold" >
                    <p>Here, we are dedicated to creating an immersive literary
                        experience tailored just for you. Our platform is designed
                        to foster a love for reading by providing personalized book
                        recommendations that align with your unique preferences.</p>
                    <br />
                    <p>The About Page is a glimpse into our mission,values, and the dedicated team behind the scenes. Feel free to explore
                        and connect with us as we embark on this literary adventure together.
                        Happy reading!
                    </p>
                </div>

                <div>
                    <a href={`${"https://github.com/Egbagba"}`} target="_blank"><button>Ese Egbagba</button></a>
                    <a href={`${"https://github.com/Andr3L4"}`} target="_blank"><button>Andre SR</button></a>
                    <div className="mt-20 footer footer-center">
                        < Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;