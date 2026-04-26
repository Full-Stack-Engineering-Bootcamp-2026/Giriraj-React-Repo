import { CiStar } from "react-icons/ci";

const AppButton = ({ label, size, disabled = false }: { label: string, size: string, disabled?: boolean }) => {
  const sizeClasses: Record<string, string> = {
    larger: "px-8 py-4 text-lg rounded-xl",
    large: "px-6 py-3 text-base rounded-lg",
    regular: "px-4 py-2 text-sm rounded-md",
    small: "px-3 py-1 text-xs rounded-md",
    sq:"px-1 py-1 rounded-md",
    cir:"px-1 py-1 rounded-full"
  };

  return (
    <button 
      disabled={disabled}
      className={`
        bg-purple-600 text-white font-medium transition-colors
        hover:bg-purple-700 
        disabled:bg-purple-900 disabled:opacity-50 disabled:cursor-not-allowed
        ${sizeClasses[size]}
      `}
    >
      {label}
    </button>
  );
};
const Button = () => {
  return (<div>
          <h4 className="text-2xl font-bold mb-4 ">Buttons</h4>
                  <div style={{
                            display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px',
                            padding: '10px', borderRadius: '5px', width: '100%', backgroundColor: 'purple', color: 'white'
                          }}>
                            <CiStar />
                            <span>Star this project on GitHub</span>
                            <span style={{ marginLeft: "auto", cursor: "pointer" }}>View More</span>
                  </div>
          <h4 className="text-2xl font-bold mt-4 mb-4">Sizes</h4>         
        {/* 2. Mapping the sizes from your image */}
          <div className="flex flex-wrap items-center gap-4 mt-4 mb-4">
            <AppButton label="Larger button" size="larger" />
            <AppButton label="Large button" size="large" />
            <AppButton label="Regular" size="regular" />
            <AppButton label="Disabled" size="regular" disabled={true} />
            <AppButton label="Small" size="small" />
          </div>
          <p className="mb-12">Apply w-full to any button to create a block level button.</p>
          <h4 className="text-2xl font-bold mt-4 mb-4">Icons</h4>
          <div className="flex flex-wrap items-center gap-4 mt-4 mb-4">
            <AppButton label="Icon Right 🤍" size="large" />
            <AppButton label="🤍 Icon Left" size="large" />
            <AppButton label="🤍" size="sq" />
            <AppButton label="🖉" size="cir" />
          </div>
          </div>);
};

export default Button;
