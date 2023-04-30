import './Card.css';

function Card(props) {
    const classes = 'my-other-class card ' + props.className;
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default Card;