import { useState } from 'react';

const AddNewProperty = () => {
  const [form, setForm] = useState({ name: '', type: '', status: '', image: '' });
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); 
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setForm({ ...form, image: reader.result }); 
        setErrors({ ...errors, image: '' }); 
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    if (!form.name) newErrors.name = 'Property name is required';
    if (!form.type) newErrors.type = 'Property type is required';
    if (!form.status) newErrors.status = 'Property status is required';
    if (!form.image) newErrors.image = 'Property image is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Fetch existing properties from localStorage
    const savedProperties = JSON.parse(localStorage.getItem('properties')) || [];

    // Add the new property to the list
    const updatedProperties = [...savedProperties, form];

    // Save updated properties back to localStorage
    localStorage.setItem('properties', JSON.stringify(updatedProperties));

    // Reset the form
    setForm({ name: '', type: '', status: '', image: '' });
    setErrors({}); 
    alert('Property added successfully!');
  };

  return (
    <div className="h-screen p-4 w-full mx-auto bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold bg-white text-gray-900 dark:bg-gray-900 dark:text-white mb-6 text-center mt-4">Add New Property</h1>
      <form onSubmit={handleSubmit} className="space-y-6  shadow p-6 rounded-lg">
        <div>
          <label className="block text-gray-700 dark:text-white mb-2">Property Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter property name"
            className={`w-full p-2 border rounded bg-white dark:bg-transparent dark:border-white text-gray-800 dark:text-white ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-gray-700 dark:text-white mb-2">Property Type</label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className={`w-full p-2 border rounded bg-white dark:bg-gray-800 dark:border-white text-gray-800 dark:text-white ${
              errors.type ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select Type</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Commercial">Commercial</option>
          </select>
          {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
        </div>
        <div>
          <label className="block text-gray-700 dark:text-white mb-2">Status</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className={`w-full p-2 border rounded bg-white dark:bg-gray-800 dark:border-white text-gray-800 dark:text-white ${
              errors.status ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select Status</option>
            <option value="Available">Available</option>
            <option value="Rented">Rented</option>
          </select>
          {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status}</p>}
        </div>
        <div>
          <label className="block text-gray-700 dark:text-white mb-2">Property Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className={`w-full p-2 border rounded bg-white dark:bg-transparent dark:border-white text-gray-800 dark:text-white ${
              errors.image ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
        </div>
        <button
          type="submit"
          className="text-xl font-semibold w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Add Property
        </button>
      </form>
    </div>
  );
};

export default AddNewProperty;
