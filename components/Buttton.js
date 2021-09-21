import React from 'react';

export default function Buttton({ className, title, href }) {
  return (
    <>
      <button type="button" className={className} href={href}>
        {title}
      </button>
    </>
  );
}
