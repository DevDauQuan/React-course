import useLocalStorage from "../hook/useLocalStorage";


const { createContext, useContext, useState } = require("react");
const GalleryContext = createContext();
const fakeData = [
    {
        id: 1,
        url: "https://images.unsplash.com/photo-1645040643524-8971366b4f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
        isFavorite: false,
    },
    {
        id: 2,
        url: "https://images.unsplash.com/photo-1645088520336-62d94324e869?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=800",
        isFavorite: false,
    },
    {
        id: 3,
        url: "https://images.unsplash.com/photo-1645104787913-aeb889b0e190?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        isFavorite: false,
    },
    {
        id: 4,
        url: "https://images.unsplash.com/photo-1645069258059-6f5a71256c4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
        isFavorite: false,
    },
    {
        id: 5,
        url: "https://images.unsplash.com/photo-1645105263866-ed2be8e07981?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1853&q=80",
        isFavorite: false,
    },
    {
        id: 6,
        url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        isFavorite: false,
    },
];
function GalleryProvider(props) {
    const { storedValue, setValue } = useLocalStorage("photos", fakeData);
    const { storedValue: storedCart, setValue: setStoredCart } = useLocalStorage("cartItems", []);
    const [photos, setPhotos] = useState(storedValue);
    const [cardItems, setCardItems] = useState(storedCart);
    const [favoriteList, setFavoriteList] = useState([]);

    function toggleLike(photoId) {
        const updateArr = photos.map(photo => {
            if (photo.id === photoId) {
                return { ...photo, isFavorite: !photo.isFavorite }
            }
            return photo;
        });
        setPhotos(updateArr);
        setValue(updateArr);
    }

    function addToCard(newItem) {
        setCardItems((previousItem) => {
            const isExisted = previousItem.some((item) => item.id === newItem.id);
            // 5. N???u t???n t???i th?? tr??? v??? danh s??ch tr?????c ????
            if (isExisted) {
                setStoredCart([...previousItem]);
                return [...previousItem];
            }
            setStoredCart([...previousItem, newItem]);

            // 6. Ch??a t???n t???i th?? th??m v??o gi??? h??ng
            return [...previousItem, newItem];
        }
        );

    }

    function removefromCard(ItemId) {
        setCardItems((prevItems) => {
            const result = prevItems.filter((item) => item.id !== ItemId);
            setStoredCart(result);
            return result;
        });
    }
    const value = { photos, cardItems, favoriteList, setPhotos, setCardItems, setFavoriteList, toggleLike, addToCard, removefromCard };

    return <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>
}

function useGallery() {
    const context = useContext(GalleryContext);
    if (typeof context === "undefined") {
        throw new Error("useGallery must be used within a GalleryProvider");
    }
    return context;
}

export { GalleryProvider, useGallery };