export default function Button ({children, onClick, className, variant = "primary"}) {
    const baseStyles = 'px-4 py-2 rounded-full text-sm font-medium transition';
    const variants = {
        primary: 'bg-orange-500 text-white hover:bg-orange-600',
        outline: 'border border-gray-500 text-black hover-bg-gray-700',
        danger: 'bg-red-500 text-white hover:bg-red-600'
    };
    return(
        <button 
        onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className} || {variants.primary}`}
            >
            {children}
        </button>
    );
}