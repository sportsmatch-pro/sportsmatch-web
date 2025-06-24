function BaseSubmit({ label}) {
    return (
        <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition-colors"
        >
            {label}
        </button>
    );
}

export default BaseSubmit;