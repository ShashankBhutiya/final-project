// Home.jsx
import './Home.css';

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-container">
        <h1 className="home-title">Welcome to Problem Solver!</h1>
        <p className="home-description">
          This is a space where you can share real-world problems you've solved—technical, personal, or professional.
          By posting your solutions, you help others learn from your journey and build a community of practical problem solvers.
        </p>
        <ul className="home-benefits">
          <li>🚀 Build your personal knowledge library</li>
          <li>🌍 Help others facing similar challenges</li>
          <li>🧠 Showcase your critical thinking and creativity</li>
          <li>💡 Discover unique solutions from the community</li>
        </ul>
        <a className="home-cta" href="/add">Post Your First Solution</a>
      </div>
    </div>
  );
}
