import React from 'react';
import ReactDom from 'react-dom';

import SampleComponent from './SampleComponent.js'

function App (){
    return(
        <div className="app">
      <SampleComponent
            color='red'
            size = {120}   
            textColor = 'white'
      />

<SampleComponent
            color='teal'
            size = {220}   
            textColor = 'gold'
      />
        </div>
    )
}

ReactDom.render(<App/>, document.getElementById('root'))