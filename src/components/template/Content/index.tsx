import styles from './styles.module.css'

interface ContentProps {
    children: any;
}

export default function Content(props: ContentProps) {
    return (
        <div className={styles['content']}>
            {props.children}
        </div>
    )
}
