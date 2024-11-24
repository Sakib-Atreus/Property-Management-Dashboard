import { useEffect, useState } from 'react';

const AllProperties = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [selectedType, setSelectedType] = useState(""); 
  const [selectedProperty, setSelectedProperty] = useState(null); 
  const [isViewModalOpen, setIsViewModalOpen] = useState(false); 
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); 
  const [propertyToDelete, setPropertyToDelete] = useState(null);

  // Fetch properties from localStorage when the component mounts
  useEffect(() => {
    const savedProperties = JSON.parse(localStorage.getItem('properties')) || [];
    setProperties(savedProperties);
    setFilteredProperties(savedProperties);
  }, []);

  // Handle the type filter change
  const handleTypeFilter = (e) => {
    const type = e.target.value;
    setSelectedType(type);

    if (type === "") {
      // If "All" is selected, show all properties
      setFilteredProperties(properties);
    } else {
      // Filter properties by type
      const filtered = properties.filter((property) => property.type === type);
      setFilteredProperties(filtered);
    }
  };

  // Handle delete action
  const handleDelete = () => {
    const updatedProperties = properties.filter((_, index) => index !== propertyToDelete);
    setProperties(updatedProperties);
    setFilteredProperties(updatedProperties);

    // Update localStorage with the updated list
    localStorage.setItem('properties', JSON.stringify(updatedProperties));
    setIsDeleteModalOpen(false); // Close the delete modal
  };

  // Open delete confirmation modal
  const confirmDelete = (propertyIndex) => {
    setPropertyToDelete(propertyIndex);
    setIsDeleteModalOpen(true);
  };

  // Handle view action
  const handleView = (property) => {
    setSelectedProperty(property); // Set the selected property
    setIsViewModalOpen(true); // Open the modal
  };

  // Close modal
  const handleCloseViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedProperty(null);
  };

  return (
    <div className="p-8 w-full mx-auto h-screen overflow-y-scroll bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      {/* Fixed Title and Filter */}
      <div className="lg:flex md:flex justify-between items-center mb-6 sticky top-0 py-4">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">All Properties</h1>

        {/* Filter Dropdown */}
        <div>
          <label htmlFor="typeFilter" className="text-lg text-gray-700 dark:text-white">Filter by Type</label>
          <select
            id="typeFilter"
            value={selectedType}
            onChange={handleTypeFilter}
            className="ml-2 p-2 border rounded bg-white dark:bg-gray-700 dark:text-white"
          >
            <option value="">All</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Commercial">Commercial</option>
          </select>
        </div>
      </div>

      {/* Properties Grid */}
      {filteredProperties.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            No properties found. Add some properties to see them here.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProperties.map((property, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              {property.image && (
                <div className="bg-gray-200 h-40">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-black truncate mb-4">
                  {property.name}
                </h3>
                <p className="text-md text-gray-500 dark:text-gray-400">Type: {property.type}</p>
                <p className="text-md text-gray-500 dark:text-gray-400">Status: {property.status}</p>
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => handleView(property)}
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                  >
                    View
                  </button>
                  <button
                    onClick={() => confirmDelete(index)}
                    className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View Modal */}
      {isViewModalOpen && selectedProperty && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg w-96">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              {selectedProperty.name}
            </h2>
            {selectedProperty.image && (
              <img
                src={selectedProperty.image}
                alt={selectedProperty.name}
                className="w-full h-40 object-cover rounded mb-4"
              />
            )}
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <strong>Type:</strong> {selectedProperty.type}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <strong>Status:</strong> {selectedProperty.status}
            </p>
            <button
              onClick={handleCloseViewModal}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg w-96">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Confirm Deletion
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Are you sure you want to delete this property? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProperties;
