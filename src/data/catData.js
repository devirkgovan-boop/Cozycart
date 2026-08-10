import woman from "../assets/categoriesicons/woman.png";
import man from "../assets/categoriesicons/man.png";
import kids from "../assets/categoriesicons/kids.png";
import electronics from "../assets/categoriesicons/elec.png";
import furniture from "../assets/categoriesicons/fur.png";

// Women
import makeup from "../assets/subwomen/makeup.png";
import womenAccessories from "../assets/subwomen/womenaccessories.png";
import womenDress from "../assets/subwomen/womendress.png";
import womenSlippers from "../assets/subwomen/womenslippers.png";

// Men
import manFootwear from "../assets/subman/manfootwear.png";
import menAccessories from "../assets/subman/menaccessories.png";
import pants from "../assets/subman/pants.png";
import shirts from "../assets/subman/shirts.png";

// Kids
import boyDress from "../assets/subkids/boydress.png";
import girlDress from "../assets/subkids/girldress.png";
import kidsFootwear from "../assets/subkids/kidsfootwear.png";
import toys from "../assets/subkids/toys.png";

// Electronics
import laptop from "../assets/subelec/laptop.png";
import lights from "../assets/subelec/lights.png";
import phones from "../assets/subelec/phones.png";
import sound from "../assets/subelec/sound.png";

// Furniture
import decor from "../assets/subhome/decor.png";
import furnitures from "../assets/subhome/furnitures.png";
import utensils from "../assets/subhome/utensils.png";
import wallpaper from "../assets/subhome/wallpaper.png";

const categories = [

  {
    id: "women",
    name: "Women",
    image: woman,

    subcategories: [
      {
        name: "Makeup",
        image: makeup
      },
      {
        name: "Accessories",
        image: womenAccessories
      },
      {
        name: "Dress",
        image: womenDress
      },
      {
        name: "Slippers",
        image: womenSlippers
      }
    ]
  },


  {
    id: "men",
    name: "Men",
    image: man,

    subcategories: [
      {
        name: "Footwear",
        image: manFootwear
      },
      {
        name: "Accessories",
        image: menAccessories
      },
      {
        name: "Pants",
        image: pants
      },
      {
        name: "Shirts",
        image: shirts
      }
    ]
  },


  {
    id: "kids",
    name: "Kids",
    image: kids,

    subcategories: [
      {
        name: "Boys Dress",
        image: boyDress
      },
      {
        name: "Girls Dress",
        image: girlDress
      },
      {
        name: "Footwear",
        image: kidsFootwear
      },
      {
        name: "Toys",
        image: toys
      }
    ]
  },


  {
    id: "electronics",
    name: "Electronics",
    image: electronics,

    subcategories: [
      {
        name: "Laptop",
        image: laptop
      },
      {
        name: "Lights",
        image: lights
      },
      {
        name: "Phones",
        image: phones
      },
      {
        name: "Sound",
        image: sound
      }
    ]
  },


  {
    id: "furniture",
    name: "Home Needs",
    image: furniture,

    subcategories: [
      {
        name: "Decor",
        image: decor
      },
      {
        name: "Furniture",
        image: furnitures
      },
      {
        name: "Utensils",
        image: utensils
      },
      {
        name: "Wallpaper",
        image: wallpaper
      }
    ]
  }

];

export default categories;