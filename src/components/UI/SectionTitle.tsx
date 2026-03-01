import { SectionTitleProps } from '../../types';

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, centered = true, dark = false }) => {
  return (
    <div className={centered ? 'text-center' : ''}>
      <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${dark ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-xl max-w-3xl mx-auto ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
