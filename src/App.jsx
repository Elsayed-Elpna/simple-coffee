import React from "react";
import "./App.css";
import ContentTop from "./componant/ContentTop.jsx";
import Card from "./componant/card";
const App = () => {
  const data = {
    id: 1,
    name: "Cappuccino",
    image:
      "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg",
    price: "$5.20",
    rating: 4.7,
    votes: 65,
    popular: true,
    available: true,
  };
  return (
    <div className="root">
      <main>
        <section>
          <ContentTop />
        </section>
        <section>
          <Card data={data} />
        </section>
      </main>
    </div>
  );
};

export default App;
