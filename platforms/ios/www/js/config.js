
var symbolJSon = [
                  {"symbol":"img/user.png"},
                  {"symbol":"img/search.png"},
                  {"symbol":"img/Categories.png"},
                  {"symbol":"img/home.png"},
                  {"symbol":"img/logo.png"},
                  {"symbol":"img/add.png"},
                  {"symbol":"img/filter.png"},
                  {"symbol":"img/card_img.jpeg"},
                  ];
var json_My_Account= {
    "name": "My Account",
    "symbol": symbolJSon[0].symbol,
    "method": "",
    "method": "displayMyaccount();",
    "method": "displayMyaccount();",
    "id":"footer_My_Account",
}
var json_Search= {
    "name": "Search",
    "symbol": symbolJSon[1].symbol,
    "method": "",
    "id":"footer_Search",
}
var json_Categories= {
    "name": "Categories",
    "symbol": symbolJSon[2].symbol,
    "method": "",
    "id":"footer_Categories",
}
var json_Home= {
    "name": "Home",
    "symbol": symbolJSon[3].symbol,
    "method": "displayHomePage();",
    "id":"footer_Home",
}
var json_Logo = {
    "name": "Logo",
    "symbol": symbolJSon[4].symbol,
    "method": "",
    "id":"header_Logo",
}
var json_Add = {
    "name": "Add",
    "symbol": symbolJSon[5].symbol,
    "method": "",
    "id":"header_Add",
}
var json_Filter = {
    "name": "Filter",
    "symbol": symbolJSon[6].symbol,
    "method": "",
    "id":"header_Filter",
}
var json_Card = {
    "name": "Card",
    "symbol": symbolJSon[7].symbol,
    "method": "",
    "details":"I am a very simple card. I am good at containing small bits of information.",
    "price":"$1000",
    "tag":"Large appliances",
    "id":"footer_Add",
}


var header_home_icons = {
    "jsonFormat": [
                   json_Logo,
                   json_Add,
                   json_Filter,
                   ]
}

var Footter_home_icons = {
    "jsonFormat": [
                   json_Home,
                   json_Categories,
                   json_Search,
                   json_My_Account,
                   ]
}

var Content_json = {
    "jsonFormat": [
                   json_Card,
                   json_Card,
                   json_Card,
                   json_Card,
                   json_Card,
                   json_Card,
                   
                   ]
}









//////////filter part
var json_filter_by_newest = {
    "id": "newest",
    "name": "newest",
    "value": "DATE",
}

var json_filter_by_Price_Ascending = {
    "id": "Price_Ascending",
    "name": "Price Ascending",
    "value": "P-ASC",
}

var json_filter_by_Price_Descending = {
    "id": "Price_Descending",
    "name": "Price Descending",
    "value": "P-DESC",
}



var filter_json_sort_by = {
    "jsonFormat": [
                   json_filter_by_newest,
                   json_filter_by_Price_Ascending,
                   json_filter_by_Price_Descending,
                   ]
}



















