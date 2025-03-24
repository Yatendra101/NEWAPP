
import React, { useState } from 'react';
import { cn } from '../lib/util';
import PropTypes from "prop-types";



const InputField = React.forwardRef(({ label, className, error, ...props }, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!props.value);


    return (
      <div className="mb-4 w-full">
        <div 
          className={cn(
            "input-float", 
            (isFocused || hasValue) && "border-purple-500",
            error && "border-red-500",
            className
          )}
        >
          <label 
            className={cn(
              error ? "text-red-500" : "text-purple-500", 
              (isFocused || hasValue) && "text-xs text-purple-500"
            )}
          >
            {label}
          </label>
          <input
            ref={ref}
            onFocus={() => setIsFocused(true)}
            onBlur={(e) => {
              setIsFocused(false);
              setHasValue(!!e.target.value);
            }}
            onChange={(e) => setHasValue(!!e.target.value)}
            className={cn(
              "transition-all duration-200",
              error && "text-red-500"
            )}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-1 text-xs text-red-500 animate-fade-in">{error}</p>
        )}
      </div>
    );
  }
);

InputField.displayName = 'InputField';

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  error: PropTypes.string,
};

export default InputField;
