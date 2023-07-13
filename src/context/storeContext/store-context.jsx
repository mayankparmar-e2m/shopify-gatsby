import React, { useReducer, createContext, useEffect } from "react";
import storeReducer from "./storeReducer";
import { storeActionsTypes } from "./storeActionsType";
import clientApollo from "../../utils/clientApollo";
import { cartMutation } from "../../storeQueries/mutation/cart";
const defaultValues = {
  loading: false,
  addProductVariantToCart: () => {},
  removeLineItem: () => {},
  updateLineItem: () => {},
  cart: {
    totalQuantity: 0,
  },
};

export const StoreContext = createContext();

const isBrowser = typeof window !== `undefined`;
const localStorageKey = `shopify_cart_id`;

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, defaultValues);

  const setCheckoutItem = (cart) => {
    if (isBrowser) {
      localStorage.setItem(localStorageKey, cart.id);
    }
    dispatch({
      type: storeActionsTypes.FETCH_CART_DATA,
      payload: cart,
    });
  };

  useEffect(() => {
    const initializeCheckout = async () => {
      dispatch({
        type: storeActionsTypes.CART_LOADER,
        payload: true,
      });
      const existingCartID = isBrowser
        ? localStorage.getItem(localStorageKey)
        : null;

      if (existingCartID && existingCartID !== `null`) {
        try {
          const existingCartData = await clientApollo.query({
            query: cartMutation.CART_DATA_FETCH_WITH_ID,
            variables: {
              cartId: existingCartID,
            },
          });
          if (existingCartData) {
            setCheckoutItem(existingCartData?.data?.cart);
            dispatch({
              type: storeActionsTypes.CART_LOADER,
              payload: false,
            });
            return;
          }
        } catch (e) {
          localStorage.setItem(localStorageKey, null);
        }
      }
      dispatch({
        type: storeActionsTypes.CART_LOADER,
        payload: false,
      });
    };

    initializeCheckout();
  }, []);

  const addProductVariantToCart = async ({ variantId, quantity }) => {
    dispatch({
      type: storeActionsTypes.CART_LOADER,
      payload: true,
    });
    const lineItems = [
      {
        merchandiseId: variantId,
        quantity: parseInt(quantity, 10),
      },
    ];
    let cartData;
    if (localStorage.getItem(localStorageKey)) {
      cartData = await clientApollo.mutate({
        mutation: cartMutation.CART_LINE_ADD,
        variables: {
          lines: lineItems,
          cartId: localStorage.getItem(localStorageKey),
        },
      });
    } else {
      cartData = await clientApollo.mutate({
        mutation: cartMutation.CART_CREATE_QUERY,
        variables: {
          input: {
            lines: lineItems,
          },
        },
      });
    }
    if (cartData) {
      const CartId =
        cartData?.data?.cartCreate?.cart?.id ||
        cartData?.data?.cartLinesAdd?.cart?.id;
      if (CartId) {
        localStorage.setItem(localStorageKey, CartId);
      }
      dispatch({
        type: storeActionsTypes.FETCH_CART_DATA,
        payload:
          cartData?.data?.cartCreate?.cart ||
          cartData?.data?.cartLinesAdd?.cart,
      });
    }
    dispatch({
      type: storeActionsTypes.CART_LOADER,
      payload: false,
    });
  };

  const removeLineItem = ({ lineId, cartId }) => {
    dispatch({
      type: storeActionsTypes.CART_LOADER,
      payload: true,
    });
    const lineItemsToRemove = [lineId];
    return clientApollo
      .mutate({
        mutation: cartMutation.CART_LINES_REMOVE,
        variables: {
          cartId: cartId,
          lineIds: lineItemsToRemove,
        },
      })
      .then((res) => {
        dispatch({
          type: storeActionsTypes.FETCH_CART_DATA,
          payload: res.data.cartLinesRemove.cart,
        });

        dispatch({
          type: storeActionsTypes.CART_LOADER,
          payload: false,
        });
        if (res.data.cartLinesRemove.userErrors.length > 0) {
          alert(res.data.cartLinesRemove.userErrors[0].message);
        }
      });
  };

  const updateLineItem = ({ lineId, quantity, cartId }) => {
    dispatch({
      type: storeActionsTypes.CART_LOADER,
      payload: true,
    });

    const lineItemsToUpdate = [
      { id: lineId, quantity: parseInt(quantity, 10) },
    ];

    return clientApollo
      .mutate({
        mutation: cartMutation.CART_LINES_UPDATE,
        variables: {
          cartId: cartId,
          lines: lineItemsToUpdate,
        },
      })
      .then((res) => {
        dispatch({
          type: storeActionsTypes.FETCH_CART_DATA,
          payload: res.data.cartLinesUpdate.cart,
        });

        dispatch({
          type: storeActionsTypes.CART_LOADER,
          payload: false,
        });
        if (res.data.cartLinesUpdate.userErrors.length > 0) {
          alert(res.data.cartLinesUpdate.userErrors[0].message);
        }
      });
  };

  return (
    <StoreContext.Provider
      value={{
        ...state,
        addProductVariantToCart,
        removeLineItem,
        updateLineItem,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
