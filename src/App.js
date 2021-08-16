import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer'
import Services from './components/Services'
import ItemDetailContainer from './components/ItemDetailContainer'
import Footer from './components/Footer'
import RecentProducts from './components/RecentProducts'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import CartContainer from './components/CartContainer'
import CartProvider from './components/CartProvider'
import './App.css'

const App = () => {

    return (
        <CartProvider>
            <BrowserRouter>
                <Header itemCount={0} />
                <RecentProducts />

                <div className="container mx-auto mb-12 font-body">
                    <Switch>

                        <Route path="/about-us">
                            <AboutUs />
                        </Route>

                        <Route path="/contact-us">
                            <ContactUs />
                        </Route>

                        <Route path="/cart">
                            <CartContainer />
                        </Route>

                        <Route path="/category/:id">
                            <div className="md:grid md:grid-cols-4 gap-4 mx-2">
                                <div className="col-span-3 mb-4">
                                    <ItemListContainer />
                                </div>
                                <div>
                                    <Services />
                                </div>
                            </div>
                        </Route>

                        <Route path="/item/:id">
                            <section className="py-4">
                                <ItemDetailContainer />
                            </section>
                        </Route>

                        <Route path="/">

                            <div className="md:grid md:grid-cols-4 gap-4 mx-2">
                                <div className="col-span-3 mb-4">
                                    <ItemListContainer />
                                </div>
                                <div>
                                    <Services />
                                </div>
                            </div>
                        </Route>


                    </Switch>
                </div>

                <Footer />
            </BrowserRouter>
        </CartProvider>
    )
}

export default App;
