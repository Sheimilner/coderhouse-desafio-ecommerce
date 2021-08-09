const RecentProducts = () => {
    const products = [
        'Firestarter COM-1B de 35 toneladas',
        'Javelin JVN-10F',
        'Baterías de celdas nuevas y usadas',
        'Repuestos para drones Blackjack BJ-1 y BJ-3',
        'Nuevo Panther PNT-8Z de 35 toneladas',
        'Mech anfibio Vindicator VND-1X',
        'Misiles Phoenix Hawk',
    ]

    return (
        <div className="border-b-2 border-main-light mb-6">
            <div className="container mx-auto relative">
                <p className="bg-black text-gray-200 inline-block px-2 absolute left-0 top-0 z-20">
                    NUEVOS INGRESOS
                </p>
                <div className="marquee">
                    <p className="text-gray-300">
                        {products.map(product =>
                            <span key={product}>
                                <span className="hover:underline cursor-pointer hover:text-white">
                                    {product}
                                </span>
                                <span className="text-gray-400 tracking-tighter">&nbsp; /// &nbsp;</span>
                            </span>
                        )}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RecentProducts
