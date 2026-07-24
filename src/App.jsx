import Router from "./Router";
import TaskPage from "./pages/TaskPage";
import TasksPage from "./pages/TasksPage";

const App = () => {
  const routes = {
    "/": TasksPage,
    "/task/:id": TaskPage,
    "*": () => <div> 404 page no found</div>,
  };
  return <Router routes={routes} />;
};

export default App;
