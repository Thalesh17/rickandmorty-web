// import styles from '../../styles/Characteres.module.scss';
import styles from './styles.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getCharacters } from 'rickmortyapi';
import { ApiResponse, Character, CharacterFilter, Info } from 'rickmortyapi/dist/interfaces';

interface CharacterProps {
    character: Character;
}

export default function CharacterItem(props: CharacterProps) {
    console.log(props.character);

    const isAlive = () => {
        return props.character.status === 'Alive';
    }

    const getStatusClass = (status) => {
        return isAlive() ? 'icon-alive' : 'icon-dead'
    }

    return (
        <article className={styles['content']}>
            <div className={styles['character-descriptions']}>
                <div className={styles['section-character']}>
                    <a 
                        className={ isAlive() ? 
                            styles['alive-hover'] : 
                            styles['dead-hover']
                        } 
                        href={props.character.url}>
                            {props.character.name}
                    </a>
                    <div className={styles['section-status']}>
                        <i className={styles[getStatusClass(props.character.status)]}/>
                        <span>
                            {`${props.character.status} - ${props.character.species}`}
                        </span>
                    </div>
                </div>
                <div className={styles['section-character']}>
                    <span className={styles['section-label']}>Ultima localização:</span>
                    <span>{`${props.character.location.name}`}</span>
                </div>
                <div className={styles['section-character']}>
                    <span className={styles['section-label']}>Origem</span>
                    <span>{`${props.character.origin.name}`}</span>
                </div>
            </div>
           <div className={styles['content-image']}>
                <img 
                    className={styles['character-image']} 
                    src={props.character.image} 
                    alt={props.character.name} 
                />
           </div>
        </article>
    )
}
