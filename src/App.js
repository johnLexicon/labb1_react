import React, { useState } from 'react'
import "./App.css";
import { AppBar, Toolbar, Typography, Container, Button } from "@material-ui/core";
import {MediaCardList} from './components/MediaCardList'
import {Login} from './components/Login'

function NavBar({isLoggedIn, userEmail, logout}) {
  let typographyContent = 'Welcome'
  if(isLoggedIn){
    typographyContent += ` ${userEmail}`
  }
  return (
    <AppBar position="static">
      <Toolbar style={{display: 'flex', justifyContent: 'space-around'}}>
        <Typography variant="h6">{typographyContent}</Typography>
        {isLoggedIn && <Button onClick={logout} variant="contained">Log out</Button>}
      </Toolbar>
    </AppBar>
  );
}

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState()
  const [books, setBooks] = useState([
    {
      id: '1',
      title: 'All the light we can not see',
      author: 'Anthony Doerr',
      desc: 'Den franska flickan Marie-Laure har nyligen blivit blind och kan bara tolka krigets fasor genom ljud, dofter och beröring.',
      image: 'https://buuks.se/images/product_images/swedish_books/9789187441769.jpg'
    },
    {
      id: '2',
      title: 'Legend',
      author: 'Marie Lu',
      desc: `Los Angeles, California Republic of America He is Day. The boy who walks in the light. She is June. The girl who seeks her brother's killer. On the run and undercover, they meet by chance.`,
      image: 'https://bilder.akademibokhandeln.se/images_akb/9780141339603_383/legend'
    },
    {
      id: '3',
      title: 'War Cross',
      author: 'Marie Lu',
      desc: `For the millions who log in every day, Warcross isn't just a game--it's a way of life.`,
      image: 'https://bilder.akademibokhandeln.se/images_akb/9781984815767_383/warcross'
    },
    {
      id: '4',
      title: 'Champion',
      author: 'Marie Lu',
      desc: 'June och Day har offrat mycket för medborgarna i Republiken och för varandra. Men det var långt ifrån tillräckligt.',
      image: 'https://bilder.akademibokhandeln.se/images_akb/9789176455944_383/champion'
    },
    {
      id: '5',
      title: 'Midnattsstjärnan',
      author: 'Marie Lu',
      desc: 'Adelina Amouteru har fått nog av att lida. Hon har vänt ryggen åt dem som förrått henne och uppnått den ultimata hämnden: seger.',
      image: 'https://bilder.akademibokhandeln.se/images_akb/9789178935093_383/midnattsstjarnan'
    },
  ])

  const removeBookCallback = (bookId) => {
    setBooks(books.filter(book => book.id !== bookId))
  }

  const loginCallback = (userEmail) => {
    setIsLoggedIn(true)
    setUserEmail(userEmail)
  }

  const logoutCallback = () => {
    setIsLoggedIn(false)
    setUserEmail(null)
  }

  return (
    <div className="App">
      <NavBar isLoggedIn={isLoggedIn} userEmail={userEmail} logout={logoutCallback} />
      <Container>
        <Typography color="primary" variant="h2">My Favorite books</Typography>
        {!isLoggedIn ? <Login login={loginCallback}/> :
        <MediaCardList books={books} removeBook={removeBookCallback}/>}
      </Container>
    </div>
  );
}

export default App;
