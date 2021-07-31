import React from 'react'

const FeatureTile = ({tileInfo}) => {
    return (
        <div className="featureTile">
            <figure>
                <img src={tileInfo.imageUrl} alt="featured"/>
                <figcaption>{tileInfo.city}</figcaption>
            </figure>
            
        </div>
    )
}

export default FeatureTile
