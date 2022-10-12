import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Login from './Login/Login'

import rootReducer from '../pages/storeRedux/reducers/rootReducer';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const reduxStore = createStore(rootReducer)

export default function Home() {
  return (

    <Provider store={reduxStore}>
      <Login />
    </Provider>
  )
}
