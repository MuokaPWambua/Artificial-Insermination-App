import React, {useState} from 'react';
import {AppContext} from '../App'

const unique = (data:any) => data.reduce( (accumulator:any, current:any) =>
        accumulator.some((x:any) => x.id === current.id)? accumulator: [...accumulator, current ], []);

const useFetch = (url:any, page=0, header={}) =>{
    const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [hasMore, setHasMore] = useState(false);
	const [message, setMessage] =useState(false);
	const {pageContext} = React.useContext(AppContext);
	const [,setPage] = pageContext;

   const response = (res:any) => {
		setLoading(false);
		setError(false);

		if( 'data' in res ){
			setData(prevState =>unique([...prevState, ...res.data]))
			setHasMore(res.more);
			return true
		}

		return setMessage(res.message || false);

	};

	const catchResponseError:any = React.useCallback( (e:any) =>{

		setLoading(false);
		setError(true);
		setMessage(false);
		return e;
	},[error]);

    React.useEffect(()=>{
        setLoading(true);
		setError(false);
		setMessage(false);
            },[url, page])

    React.useEffect(()=>{
	    setData([]);
	    setPage(0)
	}, [url])

    React.useEffect(()=>{
		if (url){
			fetch(url.concat('?page=', page), header)
					.then(res => res.json())
					.then(res =>response(res))
					.catch( error =>catchResponseError(error));
        }
   },[url, page, header, catchResponseError])

    return {data, loading, error, hasMore, message};
}
export default useFetch
