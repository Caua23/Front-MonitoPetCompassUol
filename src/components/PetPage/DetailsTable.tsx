export function DetailsTable({ details, IsProduct }: { details: { label: string; value: string }[], IsProduct: boolean }) {

  const formatValue = (label: string, value: string) => {
    if (!value && label === "Additional Information") {
      return null;
    }

    if (label === "Age") {
      return `${value} Anos`;
    }

    if (label === "Size" && !IsProduct) {
      return `${value} cm`;
    }else if (label === "Size" && IsProduct) {
      return `${value} Kg`;
    }
    if (label === "Published Date") {
      return new Date(value).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
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
