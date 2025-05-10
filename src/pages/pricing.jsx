import { FiCheck, FiStar, FiGift, FiAward, FiTruck } from "react-icons/fi";
import "../styles/pricing.css";

function Pricing() {
  const plans = [
    {
      name: "Essence",
      price: "29",
      description: "Perfect for trying our classic scents",
      popular: false,
      features: [
        "5ml sample bottles",
        "3 classic fragrances",
        "Free guidebook",
        "Standard shipping",
      ],
    },
    {
      name: "Premium",
      price: "79",
      description: "Our most popular collection",
      popular: true,
      features: [
        "30ml premium bottles",
        "5 signature fragrances",
        "Luxury gift packaging",
        "Priority shipping",
        "Scent matching consultation",
      ],
    },
    {
      name: "Elite",
      price: "149",
      description: "The ultimate fragrance experience",
      popular: false,
      features: [
        "100ml deluxe bottles",
        "8 exclusive fragrances",
        "Personalized scent profile",
        "VIP customer support",
        "Express worldwide shipping",
        "Monthly new releases",
      ],
    },
  ];

  const perks = [
    {
      icon: <FiGift className="perk-icon" />,
      title: "Luxury Packaging",
      description: "Each order comes in our signature gift-ready packaging",
    },
    {
      icon: <FiAward className="perk-icon" />,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee or your money back",
    },
    {
      icon: <FiTruck className="perk-icon" />,
      title: "Fast Shipping",
      description: "Free express shipping on orders over $50",
    },
    {
      icon: <FiStar className="perk-icon" />,
      title: "VIP Rewards",
      description: "Earn points with every purchase for exclusive benefits",
    },
  ];

  return (
    <div className="pricing-container">
      <section className="pricing-hero">
        <h1>Find Your Perfect Scent Experience</h1>
        <p>Select the collection that matches your fragrance journey</p>
      </section>

      <section className="pricing-plans">
        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`plan-card ${plan.popular ? "popular" : ""}`}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <FiStar /> Most Popular
                </div>
              )}
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">{plan.price}</span>
                <span className="period">/month</span>
              </div>
              <p className="plan-description">{plan.description}</p>
              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <FiCheck className="feature-icon" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="select-plan-btn">Select {plan.name}</button>
            </div>
          ))}
        </div>
      </section>

      <section className="value-perks">
        <h2>Why Choose Parfumex</h2>
        <div className="perks-grid">
          {perks.map((perk, index) => (
            <div key={index} className="perk-card">
              <div className="perk-icon-container">{perk.icon}</div>
              <h3>{perk.title}</h3>
              <p>{perk.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-card">
            <h3>Can I switch plans later?</h3>
            <p>
              Yes, you can upgrade or downgrade your plan at any time through
              your account settings.
            </p>
          </div>
          <div className="faq-card">
            <h3>Do you offer refunds?</h3>
            <p>
              We offer a 30-day money-back guarantee on all our plans if you're
              not completely satisfied.
            </p>
          </div>
          <div className="faq-card">
            <h3>How does shipping work?</h3>
            <p>
              We ship worldwide with free express shipping on orders over $50.
              Delivery typically takes 2-5 business days.
            </p>
          </div>
          <div className="faq-card">
            <h3>Can I gift a subscription?</h3>
            <p>
              Absolutely! During checkout you can specify that the order is a
              gift and include a personalized message.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
