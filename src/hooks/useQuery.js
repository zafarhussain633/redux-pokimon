import { useLocation } from 'react-router';

function useQuery() {
    return new URLSearchParams(useLocation().search) //here search is default which get string after ? in url
}

export  {useQuery}; 