import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { communicationEffectiveness } from '@/constants/surveyData';
import { CustomTooltip } from './CustomTooltip';

export function CommunicationEffectiveness() {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
        Communication Effectiveness
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={communicationEffectiveness}>
          <XAxis dataKey="name" stroke="#4B5563" angle={-45} textAnchor="end" height={80} />
          <YAxis stroke="#4B5563" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line type="monotone" dataKey="score" stroke="#3B82F6" strokeWidth={2}>
            <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="2s" />
          </Line>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}