import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Groups from "./Groups/Groups";
import Friends from "./Friends/Friends";
import Main from "./Main/Main";
import Members from "./Members/Members";
import "./App.css";
import OptSection from "./OptSection/OptSection";
import { FriendSContext } from "../contexts/FriendsContext"
import { ExpenseContext } from "../contexts/ExpenseContext";

function App() {

  const [expenseList, setExpenseList] = useState([]);
  const [friendList, setFriendList] = useState([{
    id: 1,
    name: "Swapnil",
    share: 0
  }]);

  return (
    <>
      <div className="body-container">
        <Navbar />
        <div className="display-container">
          <ExpenseContext.Provider value={{ expenseList, setExpenseList }}>
            <FriendSContext.Provider value={{ friendList, setFriendList }}>
              <Groups />
              <OptSection />
              <Main />
              <Members />
              <Friends />
            </FriendSContext.Provider>
          </ExpenseContext.Provider>
        </div>
      </div>
    </>
  );
}

export default App;
