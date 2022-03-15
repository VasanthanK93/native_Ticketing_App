import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { NativeRouter, Route, Routes } from "react-router-native";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/mainReducer';
import { Provider } from 'react-redux';

const store = createStore(reducers, applyMiddleware(thunk))


export default function App() {
  return (
    <Provider store={store} >
      <NativeRouter>
        <View style={styles.container}>
          <Navbar />
        </View>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/moviedetails/:id' component={MovieDetails} />
    <Route path='/booktickets/:id' component={BookTickets} />
    <Route path='/ticketdetails' component={TicketDetails} /> */}
        </Routes>
      </NativeRouter>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
