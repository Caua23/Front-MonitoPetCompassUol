import { useState } from "react";
import { useParams } from "react-router";

export function Filter() {
  const { category } = useParams();
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [color, setColor] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [size, setSize] = useState<string[]>([]);

  const colors = [
    { color: "Red", bg: "bg-red-500" },
    { color: "Apricot", bg: "bg-[#FFB672]" },
    { color: "Black", bg: "bg-neutral-950" },
    { color: "Silver", bg: "bg-gray-400" },
    { color: "Tan", bg: "bg-[#FFF7CE]" },
  ];

  return (
    <aside className={`w-56 ${category === "pet" ? "h-[750px]" : "h-[400px]"}  ml-5 mb-5 bg-white border border-gray-300 rounded-lg p-4 shadow-md`}>
      <h2 className="text-[#003459] text-2xl">Filter</h2>

      <fieldset className={`mt-4 mb-4 ${category === "pet" ? "" : "hidden"}`}>
        <legend className="font-semibold text-[#003459] ">
          Gender
        </legend>

        <div className="flex flex-col gap-2 mt-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              className="w-4 h-4 rounded-md border border-gray-400 appearance-none cursor-pointer checked:bg-blue-500 checked:border-blue-500"
              type="checkbox"
              name="gender"
              value="Male"
              checked={male}
              onChange={(e) => {
                setMale(e.target.checked);
                if (e.target.checked) setFemale(false);
              }}
            />
            <span>Male</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              className="w-4 h-4 rounded-md border border-gray-400 appearance-none cursor-pointer checked:bg-blue-500 checked:border-blue-500"
              type="checkbox"
              name="gender"
              value="Female"
              checked={female}
              onChange={(e) => {
                setFemale(e.target.checked);
                if (e.target.checked) setMale(false);
              }}
            />
            <span>Female</span>
          </label>
        </div>
      </fieldset>

      <fieldset className={`mb-4 ${category === "pet" ? "" : "hidden"}`}>
        <legend className="font-semibold text-[#003459] ">Color</legend>
        <div className="flex flex-col gap-2 mt-2">
          {colors.map(({ color: colorName, bg }) => (
            <label
              key={colorName}
              className="inline-flex items-center gap-2 cursor-pointer"
            >
              <input
                className="w-4 h-4 rounded-md border border-gray-400 appearance-none cursor-pointer checked:bg-blue-500 checked:border-blue-500"
                type="checkbox"
                name="color"
                value={colorName}
                checked={color.includes(colorName)}
                onChange={(e) => {
                  if (e.target.checked) setColor([...color, e.target.value]);
                  else setColor(color.filter((c) => c !== e.target.value));
                }}
              />
              <div className={`w-6 h-6 rounded-full ${bg}`} />
              <span>{colorName}</span>
            </label>
          ))}

          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              className="w-4 h-4 rounded-md border border-gray-400 appearance-none cursor-pointer checked:bg-blue-500 checked:border-blue-500"
              type="checkbox"
              name="color"
              value="BlackWhite"
              checked={color.includes("BlackWhite")}
              onChange={(e) => {
                if (e.target.checked) setColor([...color, e.target.value]);
                else setColor(color.filter((c) => c !== e.target.value));
              }}
            />
            <div className="relative w-6 h-6 rounded-full overflow-hidden border border-gray-400">
              <div className="absolute top-0 left-0 w-1/2 h-full bg-neutral-900" />
              <div className="absolute top-0 right-0 w-1/2 h-full bg-white" />
            </div>
            <span>Black & White</span>
          </label>
        </div>
      </fieldset>

      <div className="h-[1px] mt-5 mb-5 bg-gray-400 w-[85%]"></div>

      <fieldset className="mb-4">
        <legend className="font-semibold text-[#003459]">Price</legend>
        <div className="flex gap-5 items-center">
          <input
            className="w-1/2 h-10 border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-none"
            type="number"
            placeholder="Min"
            value={minPrice ?? ""}
            onChange={(e) => setMinPrice(e.target.value ? parseFloat(e.target.value) : undefined)}
          />

          <input
            className="w-1/2 h-10 border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-none"
            type="number"
            placeholder="Max"
            value={maxPrice ?? ""}
            onChange={(e) => setMaxPrice(e.target.value ? parseFloat(e.target.value) : undefined)}
          />
        </div>
      </fieldset>

      <div className="h-[1px] mt-5 mb-5 bg-gray-400 w-[85%]"></div>

      <fieldset className="mb-4">
        <legend className="font-semibold text-[#003459] ">Size</legend>
        <div className="flex flex-col gap-2 mt-2">
          {["Small", "Medium", "Large"].map((sizeName) => (
            <label
              key={sizeName}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                className="w-4 h-4 rounded-md border border-gray-400 appearance-none cursor-pointer checked:bg-blue-500 checked:border-blue-500"
                type="checkbox"
                name="size"
                value={sizeName}
                checked={size.includes(sizeName)}
                onChange={(e) => {
                  if (e.target.checked) setSize([...size, e.target.value]);
                  else setSize(size.filter((s) => s !== e.target.value));
                }}
              />
              <span>{sizeName}</span>
            </label>
          ))}
        </div>
      </fieldset>
    </aside>
  );
}
