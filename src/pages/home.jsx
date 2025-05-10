import "../styles/home.css";
import HomeBanner from "../components/home-banner";
import GridCards from "../components/grid-cards";

function Home() {
  return (
    <>
      <div className="home content">
        <HomeBanner />
        <GridCards />
      </div>
    </>
  );
}
export default Home;
