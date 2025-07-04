import React from 'react';
import axios from 'axios';

class UpdatingMethods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      error: null,
    };
  }

  componentDidMount() {
    console.log('Inside componentDidMount');
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.loading !== prevState.loading && !this.state.loading) {
      console.log('Data has been updated');
    }
  }

  componentWillUnmount() {
    console.log('Component is unmounting, clean up resources here.');
  }

  fetchData = () => {
    this.setState({ loading: true });
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        console.log(response);
        this.setState({
          data: response.data.slice(0, 5),
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
          loading: false,
        });
      });
  };

  render() {
    const { data, loading, error } = this.state;
    return (
      <>
        <h1>........................This is UpdatingMethods component..............................</h1>
        <div
          style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>API Demo (JSONPlaceholder)</h2>
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: '#dc3545' }}>Error: {error}</p>}
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            {data.map((post) => (
              <li key={post.id} style={{ marginBottom: '12px' }}>
                <h3 style={{ fontWeight: 'bold' }}>{post.title}</h3>
                <p style={{ color: '#666' }}>{post.body}</p>
              </li>
            ))}
          </ul>
          <button
            onClick={this.fetchData}
            style={{
              backgroundColor: '#28a745',
              color: '#fff',
              padding: '8px 16px',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
              marginTop: '16px',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#218838')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#28a745')}
          >
            Refresh Data
          </button>
        </div>
      </>
    );
  }
}

export default UpdatingMethods;
