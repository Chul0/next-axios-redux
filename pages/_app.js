import App from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import store from '../store/store'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store = {store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

const makestore = () => store;
const wrapper = createWrapper(makestore)

export default wrapper.withRedux(MyApp);
