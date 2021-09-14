import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../Auth/AuthContext'
import AddToWishlist from './AddToWishlist'
import { getFirestore } from './../../firebase'
import firebase from 'firebase/app'

const AddToWishlistContainer = ({itemid}) => {
    const context = useContext(AuthContext)
    const [isInWishlist, setIsInWishlist] = useState(false)

    function onAdd() {
        let document = getFirestore()
            .collection('wishlists')
            .doc(context.user.uid)

        document.update({
            items: firebase.firestore.FieldValue.arrayUnion(itemid)
        })
        .then(() => {
            setIsInWishlist(true)
        })
        .catch(() => {
            document.set({
                items: [itemid],
                owner: context.user.name,
            }).then(() => {
                setIsInWishlist(true)
            })
        })
    }

    function onRemove() {
        let document = getFirestore()
            .collection('wishlists')
            .doc(context.user.uid)

        document.update({
            items: firebase.firestore.FieldValue.arrayRemove(itemid)
        })
        .then(() => {
            setIsInWishlist(false)
        })
    }

    useEffect(() => {
        if (context.hasUser()) {
            getFirestore()
                .collection('wishlists')
                .doc(context.user.uid)
                .get()
                .then(querySnapshot => {
                    console.log('Wishlist existe', querySnapshot.data().items)
                    let state = false
                    if (querySnapshot.exists) {
                        state = querySnapshot.data().items.includes(itemid)
                    }
                    console.log(state ? 'Item existe' : 'Item no existe')
                    setIsInWishlist(state)
                }).catch((error) => {
                    console.log('Wishlist no existe', error)
                    setIsInWishlist(false)
                })
        }
    }, [itemid, context])

    return context.hasUser()
        ? ( <AddToWishlist
                wishlistUrl={'/wishlist/' + context.user.uid}
                isInWishlist={isInWishlist}
                onAdd={onAdd}
                onRemove={onRemove} /> )
        : ( <p className="bg-white bg-opacity-10 px-2 py-1 mb-4">
                ¡<Link to="/auth" className="hover:underline font-bold">
                    Iniciá sesión
                </Link> para agregarlo a tu wishlist!
            </p> )
}

export default AddToWishlistContainer