export default function BaseParagraph({ children, className = "" }) {
  return (
    <p className={`mb-32 mt-32 text-2xl max-w-3xl text-center mx-auto ${className}`}>
      {children}
    </p>
  );
}