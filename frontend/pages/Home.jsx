import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import {Link} from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs';
import {MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';



const Home = () => {
    const [herbs, setHerbs] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=> {
        setLoading(true);
        axios
            .get('http://localhost:5555/herbs')
            .then((response) => {
                setHerbs(response.data.data);
                setLoading(false);
            })
            .catch((error)=>{
                console.log(error);
                setLoading(false);
            })

    },[]);
  return (
    <div className='p-4'>
        <div className='flex justify-between items-center'>
            <h1 className='text-3xl my-8'>Herbs Lists</h1>
            <Link to='/herbs/create'>
                <MdOutlineAddBox className='text-sky-800 text-4xl'/>
            </Link>
        </div>
        {loading ? (
            <Spinner/>
        ) : (
            <table className='w-full border-separate border-spacing-2'> 
            <thead>
                <tr>
                    <th className='border border-slate-600 rounded-md'>No.</th>
                    <th className='border border-slate-600 rounded-md'> Scientific Name</th>
                    <th className='border border-slate-600 rounded-md max-md:hidden'>Where It is Commonly Available</th>
                    <th className='border border-slate-600 rounded-md max-md:hidden'>Pre Clinical</th>
                    <th className='border border-slate-600 rounded-md max-md:hidden'>Clinical</th>
                    <th className='border border-slate-600 rounded-md max-md:hidden'>howToUse</th>
                    <th className='border border-slate-600 rounded-md max-md:hidden'>references</th>
                    <th className='border border-slate-600 rounded-md'>Operation</th>
                </tr>
            </thead>
            <tbody>
                {herbs.map((herb, index) => (
                    <tr key={herb._id} className='h-8'> 
                        <td className='border border-slate-600 rounded-md text-center'>
                        {index + 1}
                        </td>
                    <td className='border border-slate-600 rounded-md text-center'>
                        {herb.scientificName}
                    </td>
                    <td className='border border-slate-600 rounded-md text-center'>
                        {herb.placeToFind}
                    </td>
                    <td className='border border-slate-600 rounded-md text-center'>
                        {herb.preClinical}
                    </td>
                    <td className='border border-slate-600 rounded-md text-center'>
                        {herb.clinical}
                    </td>
                    <td className='border border-slate-600 rounded-md text-center'>
                        {herb.howToUse}
                    </td>
                    <td className='border border-slate-600 rounded-md text-center'>
                        {herb.references}
                    </td>

                    <td className='border border-slate-600 rounded-md text-center'>
                        <div className='flex justify-center gap-x-4'>
                            <Link to={`/herbs/details/${herb._id}`}>
                                <BsInfoCircle className='text-2xl text-green-800'/>
                            </Link>
                            <Link to= {`/herbs/edit/${herb._id}`}>
                                <AiOutlineEdit className='text-2xl text-yellow-600'/>
                            </Link>
                            <Link to= {`/herbs/delete/${herb._id}`}>
                                <MdOutlineDelete className='text-2xl text-yellow-600'/>
                            </Link>
                        </div>
                    </td>

                    </tr>
                ))}
            </tbody>
            </table>
        )}
    </div>
  )
}

export default Home