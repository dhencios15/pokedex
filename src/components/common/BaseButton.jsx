import { forwardRef } from 'react';

const BaseButton = forwardRef(({ color, size, children, ...props }, ref) => (
  <button
    {...props}
    ref={ref}
    className={`${colors[color]} ${
      size ? sizes[size] : sizes.md
    }  text-white-400 focus:outline-none shadow rounded font-medium transition ease-in duration-200`}
  >
    {children}
  </button>
));

const colors = {
  primary: `bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:ring-offset-blue-100`,
  success: `bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-700 focus:ring-offset-green-100`,
  danger: `bg-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-red-600 focus:ring-offset-red-100`,
  dark: `bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:ring-offset-gray-100`,
  warning: `bg-yellow-500 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 focus:ring-offset-yellow-100`,
  indigo: `bg-indigo-900 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-900 focus:ring-offset-indigo-100`,
};

const sizes = {
  sm: 'px-6 py-1 text-sm',
  md: 'px-6 py-2',
  lg: 'px-6 py-3 text-lg',
};

export default BaseButton;
