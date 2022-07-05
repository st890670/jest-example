import { Provider } from "react-redux";
import { store } from "./redux";
import Input from "./components/Input";
import WorkInProgressList from "./components/WorkInProgressList";
import FinishedList from "./components/FinishedList";

function App() {
  return (
    <Provider store={store}>
      <div className="p-3">
        <Input />
        <div className="flex gap-24">
          <WorkInProgressList />
          <FinishedList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
