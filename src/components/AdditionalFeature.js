import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from './actions'

// we get the feature name and price from prop drilling, so we only need the addFeature action creator
const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={props.addFeature}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


export default connect(null, { addFeature } )(AdditionalFeature);
