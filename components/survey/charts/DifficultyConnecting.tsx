import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Cell } from 'recharts';
import { COLORS, difficultyConnecting } from '@/constants/surveyData';
import { CustomTooltip } from './CustomTooltip';

export function DifficultyConnecting() {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
        Difficulty Connecting with Other Generations
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={difficultyConnecting}>
          <XAxis dataKey="name" stroke="#4B5563" />
          <YAxis stroke="#4B5563" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="difficulty" fill="#3B82F6">
            {difficultyConnecting.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}>
                <animate attributeName="height" from="0" to={entry.difficulty} dur="1s" />
              </Cell>
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}