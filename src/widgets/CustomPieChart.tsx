import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const RADIAN = Math.PI / 180;

//@ts-expect-error use no type check
const RenderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="#790000" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
   
  ];
  
const COLORS = ['#C8A379', '#FFFFF1'];

export const CustomPieChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={10} height={10}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={RenderCustomizedLabel}
                    outerRadius={80}
                    paddingAngle={5}
                    fill='#ffffff'
                    dataKey="value"
                >
                {data.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};