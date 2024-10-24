import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Cell } from 'recharts';
import { COLORS, topImpacts } from '@/constants/surveyData';
import { CustomTooltip } from './CustomTooltip';

export function TopImpacts() {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
        Top Impacts of Generational Gap
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={topImpacts} layout="vertical">
          <XAxis type="number" stroke="#4B5563" />
          <YAxis dataKey="name" type="category" width={150} stroke="#4B5563" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="percentage" fill="#3B82F6">
            {topImpacts.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}>
                <animate attributeName="width" from="0" to={entry.percentage} dur="1s" />
              </Cell>
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}