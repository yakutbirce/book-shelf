import React from 'react';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material';
import Link from 'next/link';


const BookCard = ({ book, onDelete }) => {
    return (
        <Card
            sx={{
                maxWidth: 345,
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={book.imageUrl ?? 'https://picsum.photos/200/300'}
                    alt={book.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {book.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {book.description}...
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ display: 'flex', justifyContent: 'space-between', padding: 2 }}>
                <Link href={`/books/${book.id}`} passHref>
                    <Button variant="contained" size="small" color="primary" sx={{ flex: '1 1 auto', margin: 1 }}>
                        Details
                    </Button>
                </Link>
                <Link href={`/edit-books/${book.id}`} passHref>
                    <Button variant="outlined" size="small" color="secondary" sx={{ flex: '1 1 auto', margin: 1 }}>
                        Edit
                    </Button>
                </Link>
                <Button size="small" color="error" variant="contained" onClick={onDelete} sx={{ flex: '1 1 auto', margin: 1, backgroundColor: 'red' }}>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
};

export default BookCard;
