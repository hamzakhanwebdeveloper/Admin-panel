import Cards from "./Cards";
import ProductOverview from "./ProductOverview";
import RecentOrderChart from "./RecentOrderChart";


const Home = () => {
  return (
    <div className="home">
         <Cards/>
         <ProductOverview/>
         <RecentOrderChart/>
       
         
    </div>

   
  );
};

export default Home;
