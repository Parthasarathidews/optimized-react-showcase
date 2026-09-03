// A "heavy" component in its own file so React.lazy can code-split it
// into a separate JS chunk that is only downloaded when needed.
const rows = Array.from({ length: 200 }, (_, index) => ({
  id: index + 1,
  value: Math.round(Math.sin(index) * 1000) / 10,
}));

const HeavyComponent = () => (
  <div className="max-h-64 overflow-y-auto rounded-md border border-border">
    <table className="w-full text-left text-sm">
      <thead className="sticky top-0 bg-secondary">
        <tr>
          <th className="px-3 py-2">Row</th>
          <th className="px-3 py-2">Value</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id} className="border-t border-border">
            <td className="px-3 py-1.5 font-mono">{row.id}</td>
            <td className="px-3 py-1.5 font-mono">{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default HeavyComponent;
