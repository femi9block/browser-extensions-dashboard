export default function Button ({children, onClick, variant = "primary"}) {
    const baseStyles = 'px-4 py-2 rounded-lg text-sm font-medium transition';
    const variants = {
        primary: 'bg-orange-500 text-white hover:bg-orange-600',
        outline: 'border border-gray-500 text-gray-300 hover-bg-gray-700',
        danger: 'bg-red-500 text-white hover:bg-red-600'
    };
    return(
        <button 
        onClick={onClick}
            className={`${baseStyles} ${variants[variant]} || {variants.primary}`}
            >
            {children}
        </button>
    );
}