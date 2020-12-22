import React from 'react'
import {Grid} from '@material-ui/core';
import MediaCard from './MediaCard';

export const MediaCardList = ({books, removeBook}) => {
    return (
        <Grid container justify="flex-start" spacing={2}>
            {books.map(book => <MediaCard key={book.id} book={book} removeBook={removeBook} />)}
        </Grid>
    )
}
