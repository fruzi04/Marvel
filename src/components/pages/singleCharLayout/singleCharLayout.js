import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import './singleCharLayout.scss';


const SingleCharacterLayout = ({data}) => {

    const {name, description, thumbnail} = data;

    return (
        <div className="single-comic">
            <Helmet>
                <meta
                    name="description"
                    content={`Information about marvel character ${name}`}
                />
                <title>{name}</title>
            </Helmet>
            <img src={thumbnail} alt={name} className="single-comic__char-img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{name}</h2>
                <p className="single-comic__descr">{description}</p>
                <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '8rem'}}
            to="/">Back to main page</Link>
            </div>
        </div>
    )
}

export default SingleCharacterLayout;