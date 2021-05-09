import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { IMAGE_PAGE } from "../screens";

const useStyles = makeStyles({
    root: {
        maxWidth: 250,
        width: 250,
        height: 380,
        flex: '1 1 auto'
    },
    media: {
        height: 250,
    },
    content:{
        height: 105,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        height: 25,
    },
    author: {
        fontSize: 13,
        color: "gray",
        paddingBottom: 10,
        paddingLeft: 1,
    },
    description: {
        fontSize: 12,
        display: "flex",
    }
});

const ImageCard = props => {
    const history = useHistory();
    const classes = useStyles();

    const {
        title,
        author,
        imageUri,
        description,
        id: imageId
    } = props.image;

    const handler = () => history.push(IMAGE_PAGE(imageId));

    return (
        <Card className={classes.root} onClick={handler}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={imageUri}
                    title={title}
                />
                <CardContent className={classes.content}>
                    <Typography className={classes.title} title={title}>
                        <span className='text-1-line-ellipsis'>{title}</span>
                    </Typography>
                    <Typography className={classes.author}>By {author}</Typography>
                    <Typography className={classes.description}>
                        <span className='text-2-line-ellipsis' title={description}>{description}</span>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ImageCard;
