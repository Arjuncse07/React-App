import React from 'react';

class LifecycleDemo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: 'Initial state',
     
    };
    console.log('Step 1: Constructor - Component is being initialized at', new Date().toLocaleTimeString());
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Step 2: getDerivedStateFromProps - Syncing props with state at', new Date().toLocaleTimeString());
    return null;
  }

  componentDidMount() {
    console.log('Step 3: componentDidMount - Component is mounted at', new Date().toLocaleTimeString());
    //this.setState({ message: 'Component mounted!' });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Step 4: shouldComponentUpdate - Deciding if component should update at', new Date().toLocaleTimeString());
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Step 5: getSnapshotBeforeUpdate - Capturing state before update at', new Date().toLocaleTimeString());
    return { prevMessage: prevState.message };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Step 6: componentDidUpdate - Component updated at', new Date().toLocaleTimeString(), snapshot);
  }

  componentWillUnmount() {
    console.log('Step 7: componentWillUnmount - Component is being removed at', new Date().toLocaleTimeString());
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
      message: `Count updated to ${prevState.count + 1}`,
    }));
  };

  handleInputChange = (event) => {
    this.setState({ message: event.target.value });
  };

  render() {
    console.log('Step 8: render - Rendering component at', new Date().toLocaleTimeString());
    return (
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', marginBottom: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>Lifecycle Demo</h2>
        <input
          type="text"
          value={this.state.message}
          onChange={this.handleInputChange}
          style={{ width: '100%', padding: '8px', marginBottom: '16px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
          placeholder="Type a message..."
        />
        <p style={{ marginBottom: '12px' }}>Count: {this.state.count}</p>
        <p style={{ marginBottom: '16px' }}>Message: {this.state.message}</p>
        <button
          onClick={this.handleClick}
          style={{ backgroundColor: '#007bff', color: '#fff', padding: '8px 16px', borderRadius: '4px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s' }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
          Increment Count
        </button>
        <p style={{ marginTop: '16px', fontSize: '12px', color: '#666' }}>
          Open console to see lifecycle method logs with steps
        </p>
      </div>
    );
  }
}

export default LifecycleDemo;