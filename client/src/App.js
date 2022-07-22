import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header';
import Footer from './components/Footer';

import LoginSignUp from './pages/LoginSignUp/LoginSignUp';
import Main from './pages/Main/Main';
import Account from './pages/Account/Account';
import Search from './pages/Search/Search';
import Planner from './pages/Planner/Planner';
import View from './pages/ViewPlanner/ViewPlanner';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<LoginSignUp />}
          />
          <Route
            path="/main"
            element={<Main />}
          />
          <Route
            path="/account"
            element={<Account />}
          />
          <Route
            path="/search"
            element={<Search />}
          />
          <Route
            path="/planner"
            element={<Planner />}
          />
          <Route
            path="/viewplanner"
            element={<View />}
          />
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
