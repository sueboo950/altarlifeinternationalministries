import React from 'react';
import Header from './Header';
import Message from './Message';
import Footer from './Footer';
const App = () => {
    return (
        <div>
            <Header />
            <Message text="Welcome to our website!" />
            <Message text="Enjoy your stay and explore our content." />
            <Message text="Contact us for more information!" />
            <Footer />
        </div>);
};
export default App;
