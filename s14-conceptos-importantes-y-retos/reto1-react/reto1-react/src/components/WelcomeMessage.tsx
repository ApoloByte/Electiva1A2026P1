interface WelcomeProps {
  title: string;
  subtitle: string;
}

export const WelcomeMessage = ({ title, subtitle }: WelcomeProps) => {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold text-blue-600">{title}</h1>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  );
};