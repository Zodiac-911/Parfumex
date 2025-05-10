import { FiShoppingBag, FiHeart, FiStar } from "react-icons/fi";
import "../styles/grid-cards.css";

function GridCards() {
  return (
    <div className="cards-grid-parent">
      {/* Card 1 */}
      <div className="card card1">
        <div className="card-img"></div>
        <div className="card-txt">
          <div className="card-header">
            <h2>Coco Mademoiselle</h2>
            <div className="rating">
              <FiStar className="star-icon" /> 4.8
            </div>
          </div>
          <span className="grid-price">19,800 DZD</span>
          <div className="card-actions">
            <button className="wishlist-btn">
              <FiHeart />
            </button>
            <button className="add-to-cart">
              <FiShoppingBag /> Add
            </button>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card card2">
        <div className="card-img"></div>
        <div className="card-txt">
          <div className="card-header">
            <h2>PMDP Papyrus Oud</h2>
            <div className="rating">
              <FiStar className="star-icon" /> 4.5
            </div>
          </div>
          <span className="grid-price">25,500 DZD</span>
          <div className="card-actions">
            <button className="wishlist-btn">
              <FiHeart />
            </button>
            <button className="add-to-cart">
              <FiShoppingBag /> Add
            </button>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card card3">
        <div className="card-img"></div>
        <div className="card-txt">
          <div className="card-header">
            <h2>Le Male Elixir by Gaultier</h2>
            <div className="rating">
              <FiStar className="star-icon" /> 4.9
            </div>
          </div>
          <span className="grid-price">21,000 DZD</span>
          <div className="card-actions">
            <button className="wishlist-btn">
              <FiHeart />
            </button>
            <button className="add-to-cart">
              <FiShoppingBag /> Add
            </button>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="card card4">
        <div className="card-img"></div>
        <div className="card-txt">
          <div className="card-header">
            <h2>Passion Royal by Acura</h2>
            <div className="rating">
              <FiStar className="star-icon" /> 4.2
            </div>
          </div>
          <span className="grid-price">13,500 DZD</span>
          <div className="card-actions">
            <button className="wishlist-btn">
              <FiHeart />
            </button>
            <button className="add-to-cart">
              <FiShoppingBag /> Add
            </button>
          </div>
        </div>
      </div>

      {/* Card 5 */}
      <div className="card card5">
        <div className="card-img"></div>
        <div className="card-txt">
          <div className="card-header">
            <h2>Tom Ford Noir Extreme</h2>
            <div className="rating">
              <FiStar className="star-icon" /> 4.7
            </div>
          </div>
          <span className="grid-price">19,800 DZD</span>
          <div className="card-actions">
            <button className="wishlist-btn">
              <FiHeart />
            </button>
            <button className="add-to-cart">
              <FiShoppingBag /> Add
            </button>
          </div>
        </div>
      </div>

      {/* Card 6 */}
      <div className="card card6">
        <div className="card-img"></div>
        <div className="card-txt">
          <div className="card-header">
            <h2>Paco Rabanne Invictus</h2>
            <div className="rating">
              <FiStar className="star-icon" /> 4.6
            </div>
          </div>
          <span className="grid-price">19,800 DZD</span>
          <div className="card-actions">
            <button className="wishlist-btn">
              <FiHeart />
            </button>
            <button className="add-to-cart">
              <FiShoppingBag /> Add
            </button>
          </div>
        </div>
      </div>

      {/* Card 7 */}
      <div className="card card7">
        <div className="card-img"></div>
        <div className="card-txt">
          <div className="card-header">
            <h2>Yves Saint Laurent Libre</h2>
            <div className="rating">
              <FiStar className="star-icon" /> 4.8
            </div>
          </div>
          <span className="grid-price">19,800 DZD</span>
          <div className="card-actions">
            <button className="wishlist-btn">
              <FiHeart />
            </button>
            <button className="add-to-cart">
              <FiShoppingBag /> Add
            </button>
          </div>
        </div>
      </div>

      {/* Card 8 */}
      <div className="card card8">
        <div className="card-img"></div>
        <div className="card-txt">
          <div className="card-header">
            <h2>Lancôme La Vie Est Belle</h2>
            <div className="rating">
              <FiStar className="star-icon" /> 4.9
            </div>
          </div>
          <span className="grid-price">19,800 DZD</span>
          <div className="card-actions">
            <button className="wishlist-btn">
              <FiHeart />
            </button>
            <button className="add-to-cart">
              <FiShoppingBag /> Add
            </button>
          </div>
        </div>
      </div>

      {/* Card 9 */}
      <div className="card card9">
        <div className="card-img"></div>
        <div className="card-txt">
          <div className="card-header">
            <h2>C.H Good Girl</h2>
            <div className="rating">
              <FiStar className="star-icon" /> 4.5
            </div>
          </div>
          <span className="grid-price">19,800 DZD</span>
          <div className="card-actions">
            <button className="wishlist-btn">
              <FiHeart />
            </button>
            <button className="add-to-cart">
              <FiShoppingBag /> Add
            </button>
          </div>
        </div>
      </div>

      {/* Card 10 */}
      <div className="card card10">
        <div className="card-img"></div>
        <div className="card-txt">
          <div className="card-header">
            <h2>M.F.K Baccarat Rouge 540</h2>
            <div className="rating">
              <FiStar className="star-icon" /> 5.0
            </div>
          </div>
          <span className="grid-price">19,800 DZD</span>
          <div className="card-actions">
            <button className="wishlist-btn">
              <FiHeart />
            </button>
            <button className="add-to-cart">
              <FiShoppingBag /> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridCards;
