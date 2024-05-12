import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Shop from "./Shop";
import Tools from "./Tools";
import Tool1 from "./tools/Tool1";
import Tool2 from "./tools/Tool2";
import Tool3 from "./tools/Tool3";
import Tool4 from "./tools/Tool4";
import Tool5 from "./tools/Tool5";
import Tool6 from "./tools/Tool6";
import Tool7 from "./tools/Tool7";
import Computers from "./Computers"
import Computer1 from "./computers/Computer1";
import Computer2 from "./computers/Computer2";
import Computer3 from "./computers/Computer3";
import Computer4 from "./computers/Computer4";
import Computer5 from "./computers/Computer5";
import Computer6 from "./computers/Computer6";
import Phones from "./Phones";
import Phone1 from "./phones/Phone1";
import Phone2 from "./phones/Phone2";
import Phone3 from "./phones/Phone3";
import Phone4 from "./phones/Phone4";
import SmartWatches from "./SmartWatches";
import SmartWatch1 from "./smartwatches/SmartWatch1";
import SmartWatch2 from "./smartwatches/SmartWatch2";
import Televisions from "./Televisions";
import Television1 from "./televisions/Television1";
import Television2 from "./televisions/Television2";
import Television3 from "./televisions/Television3";
import Television4 from "./televisions/Television4";
import Television5 from "./televisions/Television5";


function App() {

  // Initialize cart items state with data from cookies or an empty array
  const [cartItems, setCartItems] = useState(() => {
    const cartItemsFromCookies = Cookies.get('cartItems');
    return cartItemsFromCookies ? JSON.parse(cartItemsFromCookies) : [];
  });

  // Update cart items in cookies whenever cartItems state changes
  useEffect(() => {
    Cookies.set('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout cartItems={cartItems} setCartItems={setCartItems}/>}>
              <Route index element={<Shop />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/tools/tool1" element={<Tool1 setCartItems={setCartItems}/>} />
              <Route path="/tools/tool2" element={<Tool2 setCartItems={setCartItems}/>} />
              <Route path="/tools/tool3" element={<Tool3 setCartItems={setCartItems}/>} />
              <Route path="/tools/tool4" element={<Tool4 setCartItems={setCartItems}/>} />
              <Route path="/tools/tool5" element={<Tool5 setCartItems={setCartItems}/>} />
              <Route path="/tools/tool6" element={<Tool6 setCartItems={setCartItems}/>} />
              <Route path="/tools/tool7" element={<Tool7 setCartItems={setCartItems}/>} />
              <Route path="/computers" element={<Computers />} />
              <Route path="/computers/computer1" element={<Computer1 setCartItems={setCartItems}/>} />
              <Route path="/computers/computer2" element={<Computer2 setCartItems={setCartItems}/>} />
              <Route path="/computers/computer3" element={<Computer3 setCartItems={setCartItems}/>} />
              <Route path="/computers/computer4" element={<Computer4 setCartItems={setCartItems}/>} />
              <Route path="/computers/computer5" element={<Computer5 setCartItems={setCartItems}/>} />
              <Route path="/computers/computer6" element={<Computer6 setCartItems={setCartItems}/>} />
              <Route path="/phones" element={<Phones />} />
              <Route path="/phones/phone1" element={<Phone1 setCartItems={setCartItems}/>} />
              <Route path="/phones/phone2" element={<Phone2 setCartItems={setCartItems}/>} />
              <Route path="/phones/phone3" element={<Phone3 setCartItems={setCartItems}/>} />
              <Route path="/phones/phone4" element={<Phone4 setCartItems={setCartItems}/>} />
              <Route path="/smartwatches" element={<SmartWatches />} />
              <Route path="/smartwatches/smartwatch1" element={<SmartWatch1 setCartItems={setCartItems}/>} />
              <Route path="/smartwatches/smartwatch2" element={<SmartWatch2 setCartItems={setCartItems}/>} />
              <Route path="/televisions" element={<Televisions />} />
              <Route path="/televisions/television1" element={<Television1 setCartItems={setCartItems}/>} />
              <Route path="/televisions/television2" element={<Television2 setCartItems={setCartItems}/>} />
              <Route path="/televisions/television3" element={<Television3 setCartItems={setCartItems}/>} />
              <Route path="/televisions/television4" element={<Television4 setCartItems={setCartItems}/>} />
              <Route path="/televisions/television5" element={<Television5 setCartItems={setCartItems}/>} />
            </Route>
          </Routes>
        </BrowserRouter>
  );
}

export default App;