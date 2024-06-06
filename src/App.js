function App() {
  const currdate = new Date();
  return (
      <h1>its {currdate.toLocaleDateString()} and the time is {currdate.toLocaleTimeString()}</h1>
  );
}

export default App;