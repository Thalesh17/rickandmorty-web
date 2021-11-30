import Content from '../Content'
import styles from './styles.module.css'

interface LayoutProps {
    title: string;
    subtitle?: string;
    children: any;
}

export default function Layout(props: LayoutProps) {
    return (
        <div>
            <div className={styles['header']}>
                <h1>{props.title}</h1>
                <small>{props.subtitle}</small>
            </div>
            <Content>
                {props.children}
            </Content>
        </div>

    )
}
