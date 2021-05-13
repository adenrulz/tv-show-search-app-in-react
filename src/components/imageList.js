import React from 'react';

const ImageList = (props) => {
    const posters = props.images.map((poster) => {

        // console.log(images.show.image)
        if (poster.show.image) {
            return <img key={poster.show.id} src={
                poster.show.image.medium
            } />

        }


    })
    return (
        <div>{posters}</div>

    )
}

export default ImageList;