
import './App.css';
import FeatureToggle from './FeatureToggle';

function App() {
  return (
    <div className="container">
      <h1 className="title">Feature Toggle Demo</h1>

      <div className="features">

        <FeatureToggle isEnabled={true} featureName="Login System" />
        <FeatureToggle isEnabled={false} featureName="Dark Mode" />
        <FeatureToggle isEnabled={true} featureName="Notifications" />
        <FeatureToggle isEnabled={false} featureName="Chat Feature" />
        <FeatureToggle isEnabled={true} featureName="Profile Page" />
        <FeatureToggle isEnabled={false} featureName="Two-Factor Authentication" />

      </div>
    </div>
  );
}

export default App;