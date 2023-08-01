import React from 'react'

type BadgeProps = {
    success?: boolean;
    danger?: boolean;
    text: string;
};

const Badge = ({  success, danger, text }: BadgeProps) => {
  return (
    <div className='bg-[#21D13E] px-3 py-2 rounded-md text-white'>
        { text }
    </div>
  )
}

Badge.defaultProps = {
    success: true
}

export default Badge;