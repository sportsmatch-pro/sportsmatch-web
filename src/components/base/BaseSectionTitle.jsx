export default function BaseSectionTitle({ children, className = "" }) {
  return (
    <h2 className={`text-8xl font-bold mb-32 mt-0 text-center ${className}`}>
      {children}
    </h2>
  );
}