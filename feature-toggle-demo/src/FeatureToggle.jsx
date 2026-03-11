function FeatureToggle({ isEnabled, featureName }) {
    if (isEnabled) {
    return <p>{featureName} is enabled</p>;
}

return <p>Feature {featureName} is disabled</p>;
}

export default FeatureToggle;