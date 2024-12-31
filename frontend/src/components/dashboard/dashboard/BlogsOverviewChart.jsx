import {
  CartesianGrid,
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const salesData = [
  { name: "Jul", sales: 4200 },
  { name: "Aug", sales: 3800 },
  { name: "Sep", sales: 6300 },
  { name: "Oct", sales: 5100 },
  { name: "Nov", sales: 4600 },
  { name: "Dec", sales: 5400 },
  { name: "Jan", sales: 7200 },
  { name: "Feb", sales: 6100 },
  { name: "Mar", sales: 5900 },
  { name: "Apr", sales: 6300 },
  { name: "May", sales: 7100 },
  { name: "Jun", sales: 7500 },
];

const BlogsOverviewChart = () => {
  return (
    <div
      className="bg-gray-50 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-100"
      //   initial={{ opacity: 0, y: 20 }}
      //   animate={{ opacity: 1, y: 0 }}
      //   transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-600">Sales Overview</h2>

      <div className="h-80">
        <ResponsiveContainer
          width={"100%"}
          height={"100%"}
          style={{ background: "" }}
        >
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="1 1" stroke="silver" />
            <XAxis dataKey={"name"} stroke="gray" />
            <YAxis stroke="gray" />
            <Tooltip
              contentStyle={{
                backgroundColor: "crimson",
                borderColor: "crimson", color: "white"
              }}
              itemStyle={{ color: "#E5E7E8" }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="crimson"
              strokeWidth={2}
              //   dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BlogsOverviewChart;
