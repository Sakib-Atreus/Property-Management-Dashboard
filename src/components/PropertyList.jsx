import { useEffect, useState } from 'react';

const PropertyList = ({ filter }) => {
  const [properties, setProperties] = useState([]);

  // Load properties from localStorage on mount
  useEffect(() => {
    const savedProperties = JSON.parse(localStorage.getItem('properties')) || [];
    setProperties(savedProperties);
  }, []);

  // Filter properties based on the current filter criteria
  const filteredProperties = properties.filter(
    (property) =>
      (!filter.type || property.type === filter.type) &&
      (!filter.status || property.status === filter.status)
  );

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Properties</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredProperties.map((property, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-700 shadow p-4 rounded"
          >
            <h3 className="text-lg font-semibold">{property.name}</h3>
            <p>Type: {property.type}</p>
            <p>Status: {property.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
