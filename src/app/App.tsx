import TodoList from "../components/TodoList";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import AddButton from "../components/AddButton";
import ModalForm from "../components/ModalForm";
import { UseVisibility } from "../hooks/useVisibility";
import { useCallback, useRef } from "react";

function App() {
  const modalRef = useRef<UseVisibility>(null);

  const onShowModal = useCallback(() => {
    modalRef.current?.show();
  }, []);
  return (
    <>
      <div className="App">
        <header className="App__title-container">
          <h2 className="App__title">My To-Do</h2>
        </header>

        <TodoList />
      </div>
      <ModalForm _ref={modalRef} />
      <AddButton onPress={onShowModal} />
    </>
  );
}

export default App;
