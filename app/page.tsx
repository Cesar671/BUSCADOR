'use client';
import React,{  useState } from 'react';
import SearchComponent from './ui/SearchComponent';
import { Box,Typography } from '@mui/material';
const page = () => {
  const [query, setQuery] = useState<string>('');
  const [searched, setSearched] = useState<boolean>(false);
  return (
    <main>
      <div>
        <SearchComponent query={query} searched={searched} setQuery={setQuery} setSearched={ setSearched} />
      </div>
      {
        (searched) && (
          <Box>
            <Typography>
              Resultados para <strong>{query}</strong>
            </Typography>
          </Box>
        )
      }
    </main>
  );
};

export default page;