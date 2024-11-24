import { useState } from 'react';

const PropertyForm = ({ addProperty }) => {
  const [form, setForm] = useState({ name: '', type: '', status: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.type && form.status) {
      addProperty(form);
      setForm({ name: '', type: '', status: '' });
    } else {
      alert('All fields are required!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-700 p-4 rounded shadow">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white">Add New Property</h2>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Property Name"
        className="w-full p-2 border rounded dark:bg-gray-600 dark:text-white"
      />
      <select
        name="type"
        value={form.type}
        onChange={handleChange}
        className="w-full p-2 border rounded dark:bg-gray-600 dark:text-white"
      >
        <option value="">Select Type</option>
        <option value="Apartment">Apartment</option>
        <option value="House">House</option>
        <option value="Commercial">Commercial</option>
      </select>
      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className="w-full p-2 border rounded dark:bg-gray-600 dark:text-white"
      >
        <option value="">Select Status</option>
        <option value="Available">Available</option>
        <option value="Rented">Rented</option>
      </select>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded"
      >
        Add Property
      </button>
    </form>
  );
};

export default PropertyForm;
