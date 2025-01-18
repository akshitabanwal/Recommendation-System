import "./services.css";


const Services = () => {
  const services = [
    {
      title: 'Personalized Recommendations',
      description: 'Receive book suggestions tailored to your tastes, derived from the collective wisdom of our diverse community of readers.',
      image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMzA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=200', // Books stack image
    },
    {
      title: 'Reviews and Ratings',
      description: 'Share your thoughts and rate the books you’ve read. Your insights help others in the community find their next great read.',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMzA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=200', // Library shelves
    },
    {
      title: 'User Profiles',
      description: 'Create your profile to list reading preferences, favorite genres, and beloved authors. Let the community know what you love!',
      image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMzA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=200', // Profile silhouette
    },
  ];

  return (
    <div className="services">
      <h2 className="services-title">SERVICES</h2>
      <div className="services-cards">
        {services.map((service, index) => (
          <div key={index} className="card">
            <div className="card-image" style={{ backgroundImage: `url(${service.image})` }}></div>
            <h3 className="card-title">{service.title}</h3>
            <p className="card-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;