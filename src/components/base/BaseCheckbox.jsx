function BaseCheckbox({ label, name, checked = false }) {
    return (
        <label className="flex items-center space-x-2 text-gray-300">
            <input type="checkbox" checked={checked} name={name} className="form-checkbox h-5 w-5 text-blue-600 bg-gray-800 rounded focus:ring-2 focus:ring-blue-500" />
            <span>{label}</span>
          </label>
    );
}

export default BaseCheckbox;