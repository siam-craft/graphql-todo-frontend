import { HIGH, LOW, MEDIUM } from '@/constant';
import { Badge } from 'keep-react';
import React, { useEffect, useState } from 'react';

const PriorityBadge = ({ children }: any) => {
  const [color, setColor] = useState('');
  const text = children?.toLowerCase().replace(/\s/g, '') || '';

  useEffect(() => {
    if (text === HIGH) {
      setColor('error');
    } else if (text === MEDIUM) {
      setColor('warning');
    } else if (text === LOW) {
      setColor('gray');
    }
  }, [text]);

  return (
    <div>
      <Badge
        size='xs'
        colorType='strong'
        color={color}
        style={{ width: '30%' }}
      >
        {children}
      </Badge>
    </div>
  );
};

export default PriorityBadge;
