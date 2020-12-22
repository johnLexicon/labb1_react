import React, { useState } from 'react'
import "./App.css";
import { AppBar, Toolbar, Typography, Container, Button } from "@material-ui/core";
import {MediaCardList} from './components/MediaCardList'

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Welcome</Typography>
        <Button size="large">
          LOGIN
        </Button>
      </Toolbar>
    </AppBar>
  );
}

function App() {

  const [books, setBooks] = useState([
    {
      id: '1',
      title: 'Sleepwalkers',
      author: 'Stephen King',
      desc: '',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Sleepwalkers.jpg/214px-Sleepwalkers.jpg'
    },
    {
      id: '2',
      title: 'Pet Sematary',
      author: 'Stephen King',
      desc: '',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Pet_sematary_poster.jpg/210px-Pet_sematary_poster.jpg'
    },
    {
      id: '3',
      title: 'Cell',
      author: 'Stephen King',
      desc: '',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Cell_by_Stephen_King.jpg/210px-Cell_by_Stephen_King.jpg'
    },
    {
      id: '4',
      title: 'The Green Mile',
      author: 'Stephen King',
      desc: '',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Greenmilepart1.jpg/190px-Greenmilepart1.jpg'
    },
    {
      id: '5',
      title: 'The Shining',
      author: 'Stephen King',
      desc: '',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/The_Shining_%281997_mini-series_poster%29.jpg/220px-The_Shining_%281997_mini-series_poster%29.jpg'
    },
  ])

  const removeBookCallback = (bookId) => {
    setBooks(books.filter(book => book.id !== bookId))
  }

  return (
    <div className="App">
      <NavBar />
      <Container>
        <Typography variant="h2">My Favorite books</Typography>
        <MediaCardList books={books} removeBook={removeBookCallback}/>
      </Container>
    </div>
  );
}

export default App;
