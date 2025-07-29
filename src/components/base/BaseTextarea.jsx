function BaseTextarea({ name, placeholder, value = '', rows = 4 }) {
    return (
        <textarea
            name={name}
            rows={rows}
            placeholder={placeholder}
            className="w-full bg-gray-800 text-white rounded-md px-4 py-3 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        >{value}</textarea>
    );
}

export default BaseTextarea;