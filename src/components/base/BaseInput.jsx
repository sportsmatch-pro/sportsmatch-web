function BaseInput({ type, name, placeholder, value = '' }) {
    return (
        <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        className="w-full bg-gray-800 text-white rounded-md px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    );
}

export default BaseInput;