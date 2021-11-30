// import styles from '../../styles/Characteres.module.scss';
import styles from './styles.module.css';
import logoImage from '../../../public/fachada.png';
import logoName from '../../../public/fachada2.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import CharacterItem from '@components/CharacterItem';
import useApiService from 'services/api-service';
import { Character, CharacterFilter } from 'rickmortyapi/dist/interfaces';


interface CharacteresProps {
    children?: any;
}

export default function Characteres(props: CharacteresProps) {
    const { getCharactersApi } = useApiService();
    const [characteres, setCharacteres] = useState<Character[]>([]);
    
    useEffect(() => {
        getCharactersApi().then(res => {
            console.log(res);
            setCharacteres(res);
        })
        
    }, [])
    

    return (
        <div className={styles['content']}>
            <section className={styles['wrapper']}>
                <div className={styles['characteres']}>
                    {characteres.length > 0 ? characteres.map((r,i) => (
                        <CharacterItem key={i} character={r}/>
                    )) : false}
                </div>
            </section>
        </div>
    )
}
