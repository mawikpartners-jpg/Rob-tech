export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
}

export interface Testimonial {
  id: string;
  author: string;
  content: string;
  rating: number;
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
  image?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
}

export interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}
