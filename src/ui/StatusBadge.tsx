import { ON_GOING, TIME_OVER, YET_TO_START } from '@/constant';
import { Badge } from 'keep-react';
import React, { useEffect, useState } from 'react';

const StatusBadge = ({ children }: any) => {
  const [color, setColor] = useState('');
  const text = children.toLowerCase().replace(/\s/g, '');

  useEffect(() => {
    if (text === ON_GOING) {
      setColor('success');
    } else if (text === TIME_OVER) {
      setColor('error');
    } else if (text === YET_TO_START) {
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
        badgeType='outline'
      >
        {children}
      </Badge>
    </div>
  );
};

export default StatusBadge;
