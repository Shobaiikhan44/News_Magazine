import React, { useEffect, useState } from 'react';
import NewsItems from './NewsItems'; // Adjust the path if necessary

function NewsDash({ category, query }) {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const url = query
            ? `https://newsapi.org/v2/everything?q=${query}&apiKey=55314070e9d34425bf2042db065f9225`
            : `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=55314070e9d34425bf2042db065f9225`;

        fetch(url)
            .then(response => response.json())
            .then(data => setArticles(data.articles))
            .catch(error => console.error('Error fetching data:', error));
    }, [category, query]);

    return (
        <div>
            <h2 className="text-center mt-4">Latest <span className="badge bg-danger">News</span></h2>
            <div className="row row-cols-1 row-cols-md-4 m-4 g-4">
                {articles.map((article, index) => (
                    <NewsItems
                        key={index}
                        imageUrl={article.urlToImage}
                        title={article.title}
                        description={article.description}
                        readMoreUrl={article.url}
                    />
                ))}
            </div>
        </div>
    );
}

export default NewsDash;
