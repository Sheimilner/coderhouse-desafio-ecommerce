import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = ({itemCount}) => {
    const [navIsVisible, setNavIsVisible] = useState(false)

    const navWrapperClasses = [
        'lg:flex',
        'items-stretch',
        'content-center',
        'font-body',
        'font-bold',
        'text-lg',
        'text-center',
        'text-white',
        'w-full',
        'lg:w-auto lg:visible',
        navIsVisible ? '' : 'hidden',
    ]

    const navItemClasses = [
        'border-1 border-main-light',
        'cursor-pointer',
        'merge-border-1',
        'px-4 py-1',
        'lg:pt-11',
        'hover:bg-white hover:bg-opacity-30',
    ].join(' ')

    const toggleNavVisibility = () => {
        setNavIsVisible(!navIsVisible)
    }

    return (
        <>
            <div className="flex-shrink-0 lg:hidden pt-8">
                <button
                    onClick={() => toggleNavVisibility()}
                    className="border-2 border-white block rounded-md"
                    type="button">
                    <img className="w-10 h-10 hover:bg-white hover:bg-opacity-25"
                        src="/svg/menu.svg" alt="Menu" />
                </button>
            </div>

            <nav className={navWrapperClasses.join(' ')}>
                <NavLink to={'/category/utility'} activeClassName="bg-white bg-opacity-25" className={navItemClasses}>Utilitarios</NavLink>
                <NavLink to={'/category/combat'} activeClassName="bg-white bg-opacity-25" className={navItemClasses}>Combate</NavLink>
                <NavLink to={'/about-us'} activeClassName="bg-white bg-opacity-25" className={navItemClasses}>Empresa</NavLink>
                <NavLink to={'/contact-us'} activeClassName="bg-white bg-opacity-25" className={navItemClasses}>Contacto</NavLink>
                <p className="bg-red-500 lg:pt-11 px-2">
                    <CartWidget itemCount={itemCount} />
                </p>
            </nav>
        </>
    )
}

export default Navbar