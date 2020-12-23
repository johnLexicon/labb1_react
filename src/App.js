import React, { useState } from 'react'
import "./App.css";
import {data} from './data/dummyData'
import { AppBar, Toolbar, Typography, Container, Button } from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles'
import {MediaCardList} from './components/MediaCardList'
import {Login} from './components/Login'

const useStyles = makeStyles({
  my: {
    marginBottom: '2rem',
    marginTop: '2rem'
  }
})

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

  const classes = useStyles()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState()
  const [books, setBooks] = useState([])

  const removeBookCallback = (bookId) => {
    setBooks(books.filter(book => book.id !== bookId))
  }

  const loginCallback = (userEmail) => {
    const userData = data.find(post => post.user.toLowerCase() === userEmail.toLowerCase())
    if(userData){
      setIsLoggedIn(true)
      setUserEmail(userEmail)
      setBooks(userData.books)
    } else {
      alert('No existing user!')
    }
  }

  const logoutCallback = () => {
    setIsLoggedIn(false)
    setUserEmail(null)
  }

  return (
    <div className="App">
      <NavBar isLoggedIn={isLoggedIn} userEmail={userEmail} logout={logoutCallback} />
      <Container>
        <Typography className={classes.my} color="primary" variant="h2">My Favorite books</Typography>
        {!isLoggedIn ? <Login login={loginCallback}/> :
        <MediaCardList books={books} removeBook={removeBookCallback}/>}
      </Container>
    </div>
  );
}

export default App;
