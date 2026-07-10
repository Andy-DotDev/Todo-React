const Username = "Andy";

const App = () => {
  return (
    <>
      <h1>ToDo List</h1>
      <p>Hi, {Username}</p>
      <p>{new Date().toLocaleDateString()}</p>
    </>
  );
};

export default App;
