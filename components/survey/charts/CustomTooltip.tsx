interface CustomTooltipProps {
    active?: boolean;
    payload?: any[];
    label?: string;
  }
  
  export function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-blue-200">
          <p className="text-gray-900 font-semibold">{`${label} : ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  }