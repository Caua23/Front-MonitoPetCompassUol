import Select, { SingleValue } from "react-select";
interface Option {
  value: string;
  label: string;
  icon: string;
}

const options: Option[] = [
  { value: "BRL", label: "BRL", icon: "/BandeiraBRL.png" },
  { value: "VND", label: "VND", icon: "/Vietnam.svg.png" },
  { value: "USD", label: "USD", icon: "/UnitedStates.png" },
];

export function DropdownHeader() {
   
  const handleChange = (selectedOption: SingleValue<Option>) => {
    if (selectedOption) {
      console.log(`País selecionado: ${selectedOption.label} (${selectedOption.value})`);
       
    }
  };

  return (
    //  <img src={options[0].icon} alt={options[0].label} width="20" height="15" />
     <Select
       options={options}
       defaultValue={options[0]} 
       onChange={handleChange}
       formatOptionLabel={(e: Option) => (
         <div
           style={{
             display: "flex",
             alignItems: "center",
             gap: "0.5rem",
             width: "100%",
           }}
           aria-label={`Opção: ${e.label}`} 
         >
           <img
             src={e.icon}
             // alt={`Bandeira de ${e.label}`}
             width="20"
             height="15"
             style={{
               objectFit: "cover",
             }}
             // onError={(event) => (event.currentTarget.src = "/assets/fallback.png")} // Fallback para imagem quebrada
           />
           <span className="">{e.label}</span>
         </div>
       )}
       styles={{
         control: (baseStyles) => ({
           ...baseStyles,
           border: "none",
           backgroundColor: "transparent",
           boxShadow: "none",
           cursor: "pointer",
           width: "120px",
           fontSize: "16px",
         }),
         option: (baseStyles, state) => ({
           ...baseStyles,
           backgroundColor: state.isFocused ? "#f0f0f0" : "white",
           color: "black",
           cursor: "pointer",
           display: "flex",
           alignItems: "center",
           padding: "8px",
         }),
         singleValue: (baseStyles) => ({
           ...baseStyles,
           display: "flex",
           alignItems: "center",
         }),
         menu: (baseStyles) => ({
           ...baseStyles,
           borderRadius: "8px",
           marginTop: "4px",
         }),
       }}
       //aria-label="Selecione o país"  Acessibilidade 
     />
  );
}