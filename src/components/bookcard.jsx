/* eslint-disable react/prop-types */

function BookCard({
    image,
    name,
    genre,
    author,
}) {
    
    const cardStyle = {
        width : '200px',
        height : '300px',
        padding : '64px',
        margin : '16px',
        display : 'flex',
        flexDirection : 'column',
        justifyContent: 'space-between',
        // alignItems: 'left',
    };

    const imageStyle = {
        width: '100%',
        maxHeight: '300px',
    };


    return (
        <div style={cardStyle}>
            <img src={image} alt={name} style={imageStyle} />
            <h2>{name}</h2>
            <p>
                <strong>Name: </strong>
                {name}
            </p>
            <p>
                <strong>Genre: </strong>
                {genre}
            </p>
            <p>
                <strong>Author: </strong>
                {author}
            </p>
        </div>
    )
}

export default BookCard;