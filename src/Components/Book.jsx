import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    return (
        <div>
           <Link to={`../book/${book.isbn13}`} >

         <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>

            <img src={book.image} 
            alt="book cover" 
            className='object-cover w-full h-56 md:h-64 xl:h-80'
            />
            <div className='absolute inset-0 flex flex-col px-6 py-4 text-gray-300 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100'>
                <p>{book.title}</p>
                <br />
                <p>{book.subtitle.substring(0, 45)}...</p>
                <br />
                <p className='mt-auto'>Price: {book.price}</p>
            </div>
         </div>

           </Link>
        </div>
    );
};

export default Book;