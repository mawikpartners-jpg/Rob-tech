import { SectionTitleProps } from '../../types';

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, centered = true }) => {
  return (
    <div className={centered ? 'text-center' : ''}>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
