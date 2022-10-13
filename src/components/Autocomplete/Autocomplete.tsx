import React, { memo } from 'react';
import { useAutocomplete } from '../../hooks/useAutocomplete';

const Autocomplete = () => {
  const { text, assignText } = useAutocomplete();

  return (
    <>
      <input
        type="text"
        onChange={(event) => assignText(event.target.value)}
      />
    </>
  )
}

export default memo(Autocomplete);
