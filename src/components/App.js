import React, { Component } from 'react';
import QuickView from 'components/QuickView';
import Button from 'components/common/Button';
import 'normalize.css';
import 'stylesheets/icon.css';
import 'stylesheets/App.scss'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showQuickView: false,
    }
  }
  
  closeQuickView = () => {
    this.setState({
      showQuickView: false,
    })
  }
  
  render() {
    const { showQuickView } = this.state
    return (
      <div>
        <Button onClick={()=>{this.setState({showQuickView: true})}}>show detail</Button>
        {showQuickView &&
          <QuickView
            handleClose={this.closeQuickView}
          >
              <div className="testrect"></div>
              <Button onClick={() => {console.log('save')}}>儲存</Button>
          </QuickView>
        }
      </div>
    );
  }
}

export default App;
