import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "admin": "To admin view",
      "contact": "To contact",
      "shops": "To shops",
      "cart": "Cart",
      "login": "Login here",
      "maintain-categories": "Maintain categories",
      "maintain-shops": "Maintain shops",
      "add-product": "Add new product",
      "maintain-products": "Maintain products",
      "sortAZ" : "Sort A - Z",
      "sortZA" : "Sort Z - A",
      "sortPA" : "Sort price ascending",
      "sortPD" : "Sort price descending",
      "filtMB" : "Memory bank",
      "filtUSBD" : "USB drive",
      "addCart" : "Add to cart",
      "ttlProd" : "Total products: ",
      "pcs" : "pieces",
      "itemAddedToCart" : "Item has been added to your cart!",
      "empty": "Empty cart",
      "inCart": "Cart has",
      "product" : "items in it",
      "cartIsEmpty": "The cart is empty",
      "addProducts": "Add products here",
      "fullCost" : "Full cost",
      "delete" : "Delete item",
      "edit" : "Edit item",
      "itemRemoved" : "Item was removed from the shop!",
      "addProduct": "Add new product!",
      "fail" : "Cant add a product with empty name!",
      "success" : "Product successfully added:",
      "add": "Add",
      "id" : "ID",
      "name" : "Name",
      "price" : "Price",
      "image" : "Image",
      "category" : "Category",
      "description" : "Description",
      "active" : "Active",
      "notFound" : "Product can not be found!",
      "lookCloser" : "Product details",
      "prodName" : "Name of product:",
      "prodPrice" : "Price of product:",
      "prodDescription" : "Description of product",

    }
  },
  ee: {
    translation: {
      "admin": "Admin vaatesse",
      "contact": "Kontaktid",
      "shops": "Meie poed",
      "cart": "Ostukorv",
      "login": "Logi sisse",
      "maintain-categories": "Halda kategooriaid",
      "maintain-shops": "Halda poode",
      "add-product": "Lisa uus toode",
      "maintain-products": "Halda tooteid",
      "sortAZ" : "Sorteeri A - Z",
      "sortZA" : "Sorteeri Z - A",
      "sortPA" : "Sorteeri hind kasvavalt",
      "sortPD" : "Sorteeri hind kahanevalt",
      "filtMB" : "Mälu pank",
      "filtUSBD" : "USB mälupulk",
      "addCart" : "Lisa ostukorvi",
      "ttlProd" : "Tooteid kokku: ",
      "pcs" : "tükki",
      "itemAddedToCart" : "Toode on ostukorvi lisatud!",
      "empty": "Tühjenda ostukorv",
      "inCart": "Ostukorvis on",
      "product" : "toodet",
      "cartIsEmpty": "Ostukorv on tühi",
      "addProducts": "Lisa tooteid siin",
      "fullCost" : "Kogusumma",
      "delete" : "Kustuta toode",
      "edit" : "Muuda toote infot",
      "itemRemoved" : "Toode eemaldati poest!",
      "addProduct": "Lisa uus toode!",
      "fail" : "Tühja nimega toodet ei saa lisada!",
      "success" : "Toode edukalt lisatud:",
      "add" : "Lisa",
      "id" : "ID",
      "name" : "Nimi",
      "price" : "Hind",
      "image" : "Tootepilt",
      "category" : "Kategooria",
      "description" : "Tooteinfo",
      "active" : "Aktiivne",
      "notFound" : "Toodet ei leitud!",
      "lookCloser": "toote detailid",
      "prodName" : "Toote nimi:",
      "prodPrice" : "Toote hind:",
      "prodDescription" : "Toote kirjeldus:",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") ||"ee" , // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;