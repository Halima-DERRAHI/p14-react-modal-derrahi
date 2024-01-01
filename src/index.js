//export { default as Modal } from "./lib/Modal";

import React from 'react'
import ReactDOM from 'react-dom'
import Modal  from './lib/Modal'

const App = () => {
  return <Modal 
            message="Create React Modal Component 😄"
            buttonText="example"
          />
}

export default App

ReactDOM.render(<App />, document.getElementById('root'));