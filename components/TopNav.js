import Link from "next/link";
import {useContext} from "react";
import {ShopContext} from "../context/ShopContext";

const TopNav = (props) =>  {

    const {isCartOpen, checkout} = useContext(ShopContext);

    var navi = [
        { text: "Home", link: "/" },
        { text: "Shop", link: "/shop"},
        { text: "Archive", link: "/archive" , under_construction: true },
        { text: "About", link: "/about" , home:true },
        { text: "Contact", link: "mailto:contact@cmmnd.com" , home:true },
        { text: "Stickers", link: "/stickerform" , home:true },
      ];

    if (props.splash) { 
        navi = navi.filter((el) => (el.home))
    }

    const nav = navi.map((page, i) => (
        page.under_construction ?
        <h2 key={i}><strike>{page.text}</strike></h2>
        : <Link key={i} href={page.link}>
            <a>
            <h2>{page.text}</h2>
            </a>
        </Link>
    ))

    var cart = null;
    // todo: close cart if it is open and empty ? 
    if(isCartOpen && checkout && checkout.lineItems) { 
        const itemslen = checkout.lineItems.reduce((accumulator, item) => accumulator + (item.quantity || 0), 0);
        cart = <Link href="/cart">
            <a>
                <h2 class='shopping-cart-nav'>{`Cart(${itemslen})`}</h2>
            </a>
        </Link>
    } 
  
    
    return <>{nav}{cart}</>
}

export default TopNav;