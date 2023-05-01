import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import Navigation from './components/Nav';
import Home from './components/Home';
import TodoForm from './components/Form';
import TodoItem from './components/Delete';
import TodoItems from './components/TodoItems';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todoList" element={<TodoList />} />
            <Route path="/check-items" element={<TodoItems />} />
            <Route path="/user-form" element={<TodoForm />} />
            <Route path="/delete" element={<TodoItem />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
