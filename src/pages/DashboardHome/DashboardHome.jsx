import {
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  FaCheckCircle,
  FaCreditCard,
  FaStar,
  FaSignOutAlt,
} from "react-icons/fa"; 

const DashboardHome = () => {
  
  const currentHour = new Date().getHours();

  // Determine the greeting based on the time of day
  let greeting = "Good evening!";
  if (currentHour < 12) {
    greeting = "Good morning!";
  } else if (currentHour < 18) {
    greeting = "Good afternoon!";
  }

  const propertyTypeData = [
    { name: "Apartment", value: 10 },
    { name: "House", value: 15 },
    { name: "Commercial", value: 5 },
  ];

  const propertyStatusData = [
    { name: "Available", count: 12 },
    { name: "Rented", count: 18 },
  ];

  const propertyAdditionsData = [
    { month: "Jan", properties: 2 },
    { month: "Feb", properties: 3 },
    { month: "Mar", properties: 4 },
    { month: "Apr", properties: 5 },
    { month: "May", properties: 6 },
    { month: "Jun", properties: 8 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <div className="w-full mx-auto p-4 lg:px-12 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <div className="flex justify-between gap-4">
          <div>
            <img
              className="w-16 h-16 rounded-full"
              src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/f8239007-7d36-45ce-a0a1-fdf91052b10e/299f5e14-73c4-4a9b-99c9-e44adbc218cf.png"
              alt=""
            />
          </div>
          <div>
            <h1 className="lg:text-3xl md:text-3xl text-2xl font-bold text-gray-800 dark:text-white">
              {greeting}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Here{"'"}s an overview of your properties
            </p>
          </div>
        </div>

        <button className="bg-green-500 text-white lg:px-4 md:px-4 px-2 py-2 rounded-lg font-semibold hover:bg-green-600 transition duration-300">
          Analytics
        </button>
      </div>

      {/* Top Overview Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center justify-between">
          <div className="text-gray-800 dark:text-white">
            <h3 className="text-xl font-semibold">Check-ins</h3>
            <p className="text-2xl">12</p>
          </div>
          <FaCheckCircle size={30} className="text-green-500" />
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center justify-between">
          <div className="text-gray-800 dark:text-white">
            <h3 className="text-xl font-semibold">Check-outs</h3>
            <p className="text-2xl">32</p>
          </div>
          <FaSignOutAlt size={30} className="text-red-500" />
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center justify-between">
          <div className="text-gray-800 dark:text-white">
            <h3 className="text-xl font-semibold">Earnings</h3>
            <p className="text-2xl">$4,923.68</p>
          </div>
          <FaCreditCard size={30} className="text-blue-500" />
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center justify-between">
          <div className="text-gray-800 dark:text-white">
            <h3 className="text-xl font-semibold">Reviews</h3>
            <p className="text-2xl">4.5 (1400)</p>
          </div>
          <FaStar size={30} className="text-yellow-500" />
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-8 md:gap-8 gap-4">
  {/* Pie Chart for Property Types */}
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
      Property Types Distribution
    </h2>
    <div className="flex justify-center items-center">
      <PieChart width={300} height={260}>
        <Pie
          data={propertyTypeData}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {propertyTypeData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  </div>

  {/* Bar Chart for Property Status */}
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex justify-center items-center">
    <div className="w-full max-w-xs">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
        Property Status Overview
      </h2>
      <BarChart
        width={300}
        height={260}
        data={propertyStatusData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#82ca9d" />
      </BarChart>
    </div>
  </div>

  {/* Line Bar Chart for Property Additions and Property Status */}
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg col-span-1 md:col-span-2">
    <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
      Property Additions and Status Overview
    </h2>
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={propertyAdditionsData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />

        {/* Line for Property Additions */}
        <Line
          type="monotone"
          dataKey="properties"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />

        {/* Bar for Property Status (Incorporating the status data) */}
        <Bar
          dataKey="properties"
          fill="#82ca9d"
          barSize={20}
          radius={[10, 10, 0, 0]}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
</div>

    </div>
  );
};

export default DashboardHome;
