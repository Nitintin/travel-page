import React from 'react'
import FeatureTile from './FeatureTile'

const FeatureView = ({tiles}) => {
    return (
        <section id="featureSection">
            <div className="featureHeading">
                <h3 className="">Featured Destinations</h3>
            </div>
            <div className="featureTileContainer">
                {
                    tiles.map( (tile,index) => <FeatureTile key={index} tileInfo={tile} tileIndex={index}/>)
                }
            </div>
        </section>
    )
}

export default FeatureView
