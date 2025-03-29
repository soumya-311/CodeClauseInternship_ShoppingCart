import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const Shopcontext = createContext();

const ShopcontextProvider = (props) => {
    const currency = '₹';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});

    const addToCart = async (itemID, size) => {
        if (!size) {
            toast.error('Select Product Size');
            return;
        }

        setCartItems(prevCartItems => {
            const updatedCartItems = { ...prevCartItems };

            if (updatedCartItems[itemID]) {
                updatedCartItems[itemID][size] = (updatedCartItems[itemID][size] || 0) + 1;
            } else {
                updatedCartItems[itemID] = { [size]: 1 };
            }

            return updatedCartItems;
        });
    }

    const getCartCount = () => {
        return Object.values(cartItems).reduce((totalCount, itemSizes) => {
            return totalCount + Object.values(itemSizes).reduce((count, quantity) => count + quantity, 0);
        }, 0);
    }

    const updateQuantity = async (itemID, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemID][size] = quantity;
        setCartItems(cartData);
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        }
        return totalAmount;  // Add this return statement
    }

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount
    };

    return (
        <Shopcontext.Provider value={value}>
            {props.children}
        </Shopcontext.Provider>
    );
}

export default ShopcontextProvider;
