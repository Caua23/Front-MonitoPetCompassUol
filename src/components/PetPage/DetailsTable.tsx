export function DetailsTable({ details }: { details: { label: string; value: string }[] }) {

  const formatValue = (label: string, value: string) => {
    if (!value && label === "Additional Information") {
      return null;
    }

    if (label === "Age") {
      return `${value} Anos`;
    }

    if (label === "Size") {
      return `${value} cm`;
    }

    return value;
  };

  return (
    <div className="mt-6 border border-gray-200 rounded-lg p-5">
      <div className="grid grid-cols-2 gap-4">
        {details.map(({ label, value }) => {
          const formattedValue = formatValue(label, value);
          if (formattedValue === null) return null;

          return (
            <div key={label} className={label === "Additional Information" ? "col-span-2" : ""}>
              <p className="text-sm text-gray-500">{label}</p>
              <p className={`text-gray-800 font-medium ${label === "SKU" ? "break-words" : ""}`}>
                {formattedValue}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
