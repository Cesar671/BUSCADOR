'use client';
import React, { FormEvent } from 'react';
import {
  Box,
  TextField,
  Button,
  Container,
  Typography,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

interface SearchProps {
  searched: boolean;
  setSearched: React.Dispatch<React.SetStateAction<boolean>>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchComponent: React.FC<SearchProps> = ({ searched, setSearched, query, setQuery }) => {

  const handleSearch = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (query.trim()) {
      setSearched(query.length>0)
      console.log(searched)
    }
  };

  const handleReset = (): void => {
    setSearched(false);
    setQuery('');
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        height: !searched ? '100vh':'',
        display: 'flex',
        flexDirection: !searched ? 'column':'row',
        justifyContent:"center",
        alignItems:"center",
        transition: 'all 0.5s ease-in-out',
        gap:"20px",
      }}
    ><Box
        sx={{
          display:"flex",
          textAlign: 'center',
          alignItems:"center",
          justifyContent:"center",

        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            color: 'primary.main',
            fontWeight: 'bold',
            alignItems:"center",
            textAlign:"center",
            justifyContent:"center",
          }}
        >
          Cine
        </Typography>
      </Box>
        
      <Box
        component="form"
        onSubmit={handleSearch}
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent:"center",
          gap:"20px",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Buscar..."
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {(e.key == 'Enter')}}
          sx={{
            width:"100%",
            '& .MuiInputBase-root':{
              height:searched ?  "40px":"60px",
            },
            '& .MuiOutlinedInput-root': {
              borderRadius: '24px',
              boxShadow: 1,
              '&:hover': {
                boxShadow: 3
              }
            }
          }}
          InputProps={{
            startAdornment: <SearchIcon color="action" sx={{ mr: 1 }} />,
            endAdornment: <CloseIcon color="action" sx={{ mr: 1 }} onClick={handleReset}/>
          }}
        />
      </Box>
    </Container>
  );
};

export default SearchComponent;