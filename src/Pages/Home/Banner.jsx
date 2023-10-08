import banner from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url(${banner})`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Your Ultimate Event Experience</h1>
            <p className="mb-5">Discover the art of unforgettable moments with our event management services. From enchanting weddings to lively birthday parties, we specialize in creating extraordinary experiences for every occasion. Let us turn your dreams into reality and make your events truly special.</p>
            <button className="btn btn-neutral" >Let's Planning</button>
          </div>
        </div>
      </div>
      
    );
};

export default Banner;