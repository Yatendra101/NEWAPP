
import React from 'react';
import { cn } from '../lib/util';
import PropTypes from "prop-types";


const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", fullWidth = false, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'relative overflow-hidden transition-all duration-300 font-medium',
          'focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50',
          'active:scale-[0.98] transform',
          variant === 'default' && 'btn-purple',
          variant === 'outline' && 'btn-purple-outline',
          size === 'sm' && 'px-4 py-2 text-sm',
          size === 'lg' && 'px-8 py-4 text-lg',
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';

// Add PropTypes for validation
Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "outline"]),
  size: PropTypes.oneOf(["default", "sm", "lg"]),
  fullWidth: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
