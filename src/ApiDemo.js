import React from 'react';
import axios from 'axios';

class ApiDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      error: null,
    };
  }

  componentDidMount() {  // For calling the API when the component mounts
    console.log('Inside componentDidMount');
    // Fetch data when the component mounts
    // This is similar to useEffect with an empty dependency array in functional components
    // It ensures the API call is made only once when the component is first rendered
    // This is where you would typically fetch data from an API
    // For example, you might use axios to fetch data from a REST API
    // and then update the component's state with the fetched data
    // This is a good place to set up any initial state or perform side effects
    // such as fetching data from an API or setting up subscriptions.
    // In this case, we are fetching data from a placeholder API
    // and storing it in the component's state.
    // This is similar to the useEffect hook in functional components
    // which is used to perform side effects in functional components.
    // The componentDidMount lifecycle method is called once, immediately after the component is mounted.
    // This is a good place to make API calls or set up subscriptions.    
    this.fetchData();
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
    // This is where you define what the component should look like
    // The render method returns the JSX that defines the component's UI
    // In this case, we are rendering a list of posts fetched from the API
    // The render method is called whenever the component's state or props change
    // This is similar to the return statement in functional components
    // The render method is responsible for returning the JSX that defines the component's UI
    // It is called whenever the component's state or props change
    const { data, loading, error } = this.state;
    return (

      <>
      <h1>........................This is Class Based component..............................</h1>
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
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
          style={{ backgroundColor: '#28a745', color: '#fff', padding: '8px 16px', borderRadius: '4px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s', marginTop: '16px' }}
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

export default ApiDemo;