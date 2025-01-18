import "./testimonials.css";
const testimonialsData = [
  {
    id: 1,
    name: 'Jase Smith',
    review: 'This platform has significantly expanded my reading list with books that I absolutely love. The recommendations are always spot-on!',
    profilePic: 'https://randomuser.me/api/portraits/men/32.jpg',
    designation: 'avid reader and fantasy enthusiast',
    rating: '⭐⭐⭐⭐⭐',
  },
  {
    id: 2,
    name: 'Michael Johnson',
    review: "I never knew about so many incredible authors before joining this community. It's like having a thousand friends recommending books to me!",
    profilePic: 'https://randomuser.me/api/portraits/men/65.jpg',
    designation: 'bookworm and thriller aficionado',
    rating: '⭐⭐⭐⭐⭐',
  },
  {
    id: 3,
    name: 'Emma Lee',
    review: 'The reviews and ratings from other users have helped me avoid mediocre reads and dive straight into amazing books. Highly recommended!',
    profilePic: 'https://randomuser.me/api/portraits/women/44.jpg',
    designation: 'student and classic literature lover',
    rating: '⭐⭐⭐⭐⭐',
  },
  // Add more testimonials if needed
];

function Testimonials() {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-heading">User Reviews</h2>
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.profilePic} alt={`${testimonial.name}'s profile`} className="profile-pic" />
            <h3 className="user-name">{testimonial.name}</h3>
            <p className="user-designation">{testimonial.designation}</p>
            <p className="user-review">"{testimonial.review}"</p>
            <p className="user-rating">{testimonial.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
