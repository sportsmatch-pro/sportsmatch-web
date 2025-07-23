function BaseSubmit({ label, className = "" }) {
    return (
        <button
            type="submit"
            className={`bg-gray-500 hover:bg-gray-600 text-white font-semibold px-6 py-2 rounded-md transition-colors inline-block w-fit ${className}`}
        >
            {label}
        </button>
    );
}

export default BaseSubmit;