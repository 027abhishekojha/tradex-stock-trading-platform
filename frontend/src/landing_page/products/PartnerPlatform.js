import React from 'react';

function PartnerPlatform({ imageURL, description }) {
  return (
    <div className="align-items-center justify-content-center h-100">
      <img src={imageURL} className="w-50 me-2" alt="Partner Logo" />
      <p className="w-50 text-muted text-start mb-0 text-center" style={{ fontSize: "0.85em", justifySelf : "center" }}>
        {description}
      </p>
    </div>
  );
}

export default PartnerPlatform