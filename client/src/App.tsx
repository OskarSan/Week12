import React, { useState } from 'react'
//import './App.css'

function App() {
  
  const [name, setName] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [pages, setPages] = useState<string>('');

  const handleSubmit = async () => {
    const book = {name, author, pages: parseInt(pages)};

    try{
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
      });

      if(res.ok){
        const data = await res.json();
        console.log("book added succesfully", data);
      }else{
        console.error('Error');
      }


    }catch(err: any){
      console.log(err);
    }


  }
    

  return (
    
    <>
      <h1>
        books
      </h1>

      <input 
        type="text"
        id="name" 
        value={name}
        onChange={(e)=> setName(e.target.value)}
        placeholder='Book name'/>
      
      <input 
        type="text" 
        id="author"
        value={author}
        onChange={(e)=> setAuthor(e.target.value)}
        placeholder='Author name'/>
      
      <input 
        type="number"
        id="pages" 
        value={pages}
        onChange={(e)=> setPages(e.target.value)}
        placeholder='pages'/>


      <button id="submit" onClick={handleSubmit}>Submit</button>
    
    </>
  )
}

export default App
