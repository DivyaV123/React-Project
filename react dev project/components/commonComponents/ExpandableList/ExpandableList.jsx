'use client'
import React, { useState } from 'react';

const ExpandableList = ({ items, renderItem }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  const visibleItems = expanded ? items : items?.slice(0, 5);

  return (
    <div>
      {visibleItems?.map((item, index) => renderItem(item, index))}
      {items?.length > 5 && (
        <span
          className="text-[#2874f0] text-[0.938vw] font-medium cursor-pointer mobile:text-[3.421vw]"
          onClick={toggleExpand}
        >
          {expanded ? 'Show Less...' : 'Show More...'}
        </span>
      )}
    </div>
  );
};

export default ExpandableList;
