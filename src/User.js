function User(props){
    return (
        <div className="App">
          <h1>User Component</h1>
          <button onClick={props.data}>Call Data Function</button>
        </div>
       
    );
}

export default User;