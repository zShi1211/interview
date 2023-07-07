import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Search from './pages/Search.jsx'
import Login from './pages/Login.jsx'
import { ConfigProvider } from 'antd';

import store from './store'
import { Provider } from 'react-redux'
export default function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#1890ff',
          },
        }}
      >
        <Provider store={store}>
          <Router>
            <Routes>
              <Route path='/search' element={<Search />} />
              <Route path='/login' element={<Login />} />
              <Route path='/' element={<Navigate to="/search" />} />
            </Routes>
          </Router>
        </Provider>
      </ConfigProvider>
    </>
  )
}

