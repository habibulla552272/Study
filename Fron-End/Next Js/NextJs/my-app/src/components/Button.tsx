'use client';
import React from 'react';

type ButtonProps = {
  isPending?: boolean;
};

const Button = ({ isPending }: ButtonProps) => {
  return (
    <div>
      <button
        className='bg-red-400 px-5 py-1 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed'
        type='submit'
        disabled={isPending}
      >
        {isPending ? 'Submitting...' : 'Submit'}
      </button>
    </div>
  );
};

export default Button;
