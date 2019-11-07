import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';
import { addFeature } from './actions'

// we only need the additionalFeatures array from state here
const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => {
           return <AdditionalFeature key={item.id} feature={item} addFeature={props.addFeature}/>
          })}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures
  }  
}

export default connect(mapStateToProps, { addFeature })(AdditionalFeatures);
