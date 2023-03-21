import * as React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ArticlesPage from './pages/ArticlesPage';
import { ChakraProvider } from '@chakra-ui/react'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element={
            <ChakraProvider>
              <Home />
            </ChakraProvider>
          }
        />
        <Route path='/articles'
          element={
            <ChakraProvider>
              <ArticlesPage />
            </ChakraProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
