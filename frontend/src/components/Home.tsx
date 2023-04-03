import image from '../img/JoelHiltonHeadshot.jpg'; // Import the headshot image

/**
 *  The Home page component
 *
 * @returns The Home Page
 */
const Home = () => {
  return (
    <div className="container">
      <main role="main" className="pb-3">
        <div className="text-center">
          <h1 className="display-4">The Joel Hilton Film Collection</h1>
          <img src={image} alt="Joel Hilton headshot" />
        </div>
      </main>
    </div>
  );
};

export default Home;
