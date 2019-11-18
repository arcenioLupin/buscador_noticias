import React from 'react';

const Noticia = ({noticia}) => {
    
    //Extraer los datos
      const {urlToImage,url,title,description,source} = noticia;

    return (
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-image">
                   <img src={urlToImage} alt={title} />
                </div>

                <div className="card-content">
                   <h3>{title}</h3>
                   <p>{description}</p>
                </div>

                <div className="card-action">
                   <a href={url} target="_b"></a>
                </div>
            </div>
        </div>
    );
};

export default Noticia;