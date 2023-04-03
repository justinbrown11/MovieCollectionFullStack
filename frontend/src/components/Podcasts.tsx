import image from '../img/cropped-baconsale-logo-huge.webp'; // Import the needed image

/**
 *  The Podcasts component
 *
 * @returns The podcasts link page
 */
const Podcasts = () => {
  return (
    <div className="text-center">
      <h1 className="display-4">My Podcasts</h1>
      <img src={image} alt="Bacon logo" />
      <a
        className="btn btn-primary"
        href="https://baconsale.com/"
        role="button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit
      </a>
    </div>
  );
};

export default Podcasts;
