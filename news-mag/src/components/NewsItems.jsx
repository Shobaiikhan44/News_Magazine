import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function NewsItems({ imageUrl, title, description, readMoreUrl }) {
    return (
        <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100 shadow-sm border-0 rounded">
                <img src={imageUrl} className="card-img-top rounded-top" alt="News" />
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">{title}</h5>
                    <p className="card-text text-muted">{description}</p>
                </div>
                <div className="card-footer bg-white border-0">
                    <a href={readMoreUrl} className="btn btn-primary btn-block" target="_blank" rel="noopener noreferrer">Read more</a>
                </div>
            </div>
        </div>
    );
}

export default NewsItems;
