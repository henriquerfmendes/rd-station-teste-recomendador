import React from 'react';
import Checkbox from '../../shared/Checkbox';

function Preferences({
  preferences,
  selectedPreferences = [],
  onPreferenceChange,
}) {
  const handlePreferenceChange = (preference) => {
    const updatedPreferences = selectedPreferences.includes(preference)
      ? selectedPreferences.filter((pref) => pref !== preference)
      : [...selectedPreferences, preference];
    onPreferenceChange(updatedPreferences);
  };

  return (
    <div className="mb-4 ml-4">
      <h2 className="text-lg font-bold mb-2">Preferências:</h2>
      <ul>
        {preferences.map((preference, index) => (
          <li key={index} className="mb-2">
            <Checkbox
              value={preference}
              checked={selectedPreferences.includes(preference)}
              onChange={() => handlePreferenceChange(preference)}
              className="w-4 mr-2 cursor-pointer accent-[#5BCBCC]"
            >
              {preference}
            </Checkbox>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Preferences;
