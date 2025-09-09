import { Outlet, NavLink } from 'react-router'
import store from '../../store'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { SERVER_URL } from '../../config'
import styles from './MainLayout.module.css'
import cn from 'classnames'

function MainLayout() {
    const [categories, setCategories] = useState([])
    const { setCategory } = store()

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`${SERVER_URL}/categories`)
            setCategories(data)    
        })()
    }, [])

    const categoryClickHandler = (category) => {
        setCategory(category)
    }

    return (
        <div className={cn(styles.container)}>
            <nav className={cn(styles.nav)}>
                {
                    categories.map(c => (
                        <NavLink key={c._id} to={`/breeds/${c.name}`} className={({ isActive }) => cn(styles.link, { [styles.active]: isActive })} onClick={() => categoryClickHandler(c.name)}>{c.name}</NavLink>
                    ))
                }
            </nav>
            <Outlet />
        </div>
    )
}

export default MainLayout