import { format } from "date-fns";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
export const LineChartComponent = ({data,category}) => {
  const formatDateTick = (tickItem) => format(new Date(tickItem), 'd MMM');
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data} 
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" tickFormatter={formatDateTick}/>
        <YAxis/>
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey={category}
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
