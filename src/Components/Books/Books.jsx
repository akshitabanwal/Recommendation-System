
import { NavLink } from 'react-router-dom';
import "./Books.css";

const Books = () => {
  const booksData = [
    {
      id: "1",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      poster: "https://covers.openlibrary.org/b/id/8225266-L.jpg",
      genre: "Classic Fiction",
      description: "A novel about the serious issues of rape and racial inequality.",
      rating: 4.8
    },
    {
      id: "2",
      title: "1984",
      author: "George Orwell",
      poster: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
      genre: "Dystopian Fiction",
      description: "A chilling prophecy about the future.",
      rating: 4.7
    },
    {
      id: "3",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      poster: "https://covers.openlibrary.org/b/id/7352210-L.jpg",
      genre: "Classic Fiction",
      description: "The story of the fabulously wealthy Jay Gatsby and his love for Daisy Buchanan.",
      rating: 4.6
    },
    {
      id: "4",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      poster: "https://covers.openlibrary.org/b/id/8081516-L.jpg",
      genre: "Romance",
      description: "A story about love and misunderstandings in the British upper class.",
      rating: 4.9
    },
    {
      id: "5",
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      poster: "https://covers.openlibrary.org/b/id/8231999-L.jpg",
      genre: "Classic Fiction",
      description: "A story about teenage angst and rebellion.",
      rating: 4.2
    },
    {
      id: "6",
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      poster: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
      genre: "Fantasy",
      description: "A hobbit's adventure through Middle-Earth.",
      rating: 4.8
    },
    {
      id: "7",
      title: "Moby-Dick",
      author: "Herman Melville",
      poster: "https://covers.openlibrary.org/b/id/7222471-L.jpg",
      genre: "Adventure",
      description: "The voyage of the whaling ship Pequod.",
      rating: 4.1
    },
    {
      id: "8",
      title: "The Odyssey",
      author: "Homer",
      poster: "https://covers.openlibrary.org/b/id/8234625-L.jpg",
      genre: "Epic Poetry",
      description: "Odysseus's journey home after the Trojan War.",
      rating: 4.5
    },
    {
      id: "9",
      title: "War and Peace",
      author: "Leo Tolstoy",
      poster: "https://covers.openlibrary.org/b/id/7222361-L.jpg",
      genre: "Historical Fiction",
      description: "A story that intertwines families during the Napoleonic Wars.",
      rating: 4.6
    },
    {
      id: "10",
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      poster: "https://covers.openlibrary.org/b/id/7235181-L.jpg",
      genre: "Fantasy",
      description: "A story of friendship, courage, and sacrifice.",
      rating: 4.9
    },
    {
      id: "11",
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      poster: "https://covers.openlibrary.org/b/id/8369251-L.jpg",
      genre: "Fantasy",
      description: "Harry discovers he is a wizard and attends Hogwarts School of Witchcraft and Wizardry.",
      rating: 4.8
    },
    {
      id: "12",
      title: "The Chronicles of Narnia",
      author: "C.S. Lewis",
      poster: "https://covers.openlibrary.org/b/id/7979257-L.jpg",
      genre: "Fantasy",
      description: "The adventures of children who visit Narnia, a magical land.",
      rating: 4.7
    },
    {
      id: "13",
      title: "Jane Eyre",
      author: "Charlotte Brontë",
      poster: "https://covers.openlibrary.org/b/id/8235085-L.jpg",
      genre: "Classic Fiction",
      description: "The journey of a governess who falls in love with her employer.",
      rating: 4.8
    },
    {
      id: "14",
      title: "The Alchemist",
      author: "Paulo Coelho",
      poster: "https://covers.openlibrary.org/b/id/8277323-L.jpg",
      genre: "Philosophical Fiction",
      description: "A shepherd's journey to find treasure and discover himself.",
      rating: 4.7
    },
    {
      id: "15",
      title: "The Da Vinci Code",
      author: "Dan Brown",
      poster: "https://covers.openlibrary.org/b/id/8266721-L.jpg",
      genre: "Thriller",
      description: "A thrilling mystery about secret societies and hidden messages.",
      rating: 4.6
    },
    {
      id: "16",
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      poster: "https://covers.openlibrary.org/b/id/7970453-L.jpg",
      genre: "Crime",
      description: "A mystery involving a journalist and a troubled hacker.",
      rating: 4.5
    },
    {
      id: "17",
      title: "The Hunger Games",
      author: "Suzanne Collins",
      poster: "https://covers.openlibrary.org/b/id/8175151-L.jpg",
      genre: "Dystopian",
      description: "A story of survival in a dystopian world.",
      rating: 4.8
    },
    {
      id: "18",
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
      poster: "https://covers.openlibrary.org/b/id/8226197-L.jpg",
      genre: "Science Fiction",
      description: "A society where books are banned and burned.",
      rating: 4.4
    },
    {
      id: "19",
      title: "Brave New World",
      author: "Aldous Huxley",
      poster: "https://covers.openlibrary.org/b/id/8224434-L.jpg",
      genre: "Dystopian",
      description: "A society obsessed with consumerism and superficial happiness.",
      rating: 4.3
    },
    {
      id: "20",
      title: "Dracula",
      author: "Bram Stoker",
      poster: "https://covers.openlibrary.org/b/id/8195420-L.jpg",
      genre: "Horror",
      description: "The story of Count Dracula's attempt to move from Transylvania to England.",
      rating: 4.2
    }
    // Add more books as needed
  ];
  
  
  return (
    <section className='books-page'>
    <div className='grid grid-4-col container'>
     { booksData.map((curBook)=>{
      const {id,title,poster}=curBook;
     const bookName=title.substring(0,25);
     
      return  <NavLink className="link" key={id} to={`books/${id}`}> {/* Correct path format */}

        
        <div className='card'>
          <div className='card-info'>
          
            <h2>{(title.length>25)?`${bookName}....`:title}</h2>

            <img src={poster} alt="poster-image"/>
          </div>
        </div>
      </NavLink>
     
     })}


    </div>
    </section>
  )
}

export default Books;


