let items=[
    {
        id:1,
        img:"https://th.bing.com/th?q=Biryani+HD+Images&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.4&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247",
        name:"Hyd Biryani",
        price:250,
        qty:1
    },
    {
        id:2,
        img:"https://th.bing.com/th/id/OIP.rGoUzqhzgb7-npzTl84VfAHaEK?w=312&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
        name:"Egg Biryani",
        price:170,
        qty:1
    },
    {
        id:3,
        img:"https://th.bing.com/th/id/OIP.1fb1hQPdiQDRYv_QA1v7rwAAAA?rs=1&pid=ImgDetMain",
        name:"Masala Dosa",
        price:100,
        qty:1
    },
    {
        id:4,
        img:"https://th.bing.com/th?q=Andhra+Idly&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.4&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247",
        name:"Ghee Idly",
        price:50,
        qty:1
    },
    {
        id:5,
        img:"https://th.bing.com/th/id/OIP.7dVRWoiw1S3xZUcAEvCxVQHaFE?w=268&h=182&c=7&r=0&o=5&dpr=1.4&pid=1.7",
        name:"Puri with Potato",
        price:60,
        qty:1
    },
    {
        id:6,
        img:"https://www.thechunkychef.com/wp-content/uploads/2014/12/Spicy-Thai-Noodles-5.jpg",
        name:"French Noodles",
        price:220,
        qty:1
    },
    {
        id:7,
        img:"https://th.bing.com/th/id/OIP.XnlkC0ouIg5u14K2PQ0o4AHaHa?w=197&h=197&c=7&r=0&o=5&dpr=1.4&pid=1.7",
        name:"Lemon Rice",
        price:80,
        qty:1
    },
    {
        id:8,
        img:"https://th.bing.com/th?q=Indian+Vegetarian+Thali&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.4&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247",
        name:"Bahubali Thalli",
        price:1999,
        qty:1
    },
    {
        id:9,
        img:"https://i.ytimg.com/vi/dmWOz0n9WK0/maxresdefault.jpg",
        name:"Punujulu",
        price:30,
        qty:1
    },
    {
        id:10,
        img:"https://recipes.timesofindia.com/photo/61050397.cms?imgsize=347173",
        name:"Samosa",
        price:20,
        qty:1
    },
    {
        id:11,
        img:"https://th.bing.com/th/id/OIP.Fpj_4VLb9UmSKY-iCtkk6QHaFj?w=217&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
        name:"Chicken LegPiece",
        price:499,
        qty:1
    },
    {
        id:12,
        img:"https://farm9.staticflickr.com/8586/16023214373_90552b64f6_o.jpg",
        name:"Porota",
        price:50,
        qty:1
    },
];

function displayItems(foods) {
    if (foods.length != 0) {
        let eachItem = ``;
        for (let item of foods) {
            eachItem += `<div class="col-3">
                <div class="card">
                    <div class="card-header">
                        <img src="${item.img}" alt="" class="img-fluid">
                    </div>
                    <div class="card-body text-center">
                        <h3>${item.name}</h3>
                        <small></small>
                        <h6>${item.price}&#8377;</h6>
                        <div>
                            <i class="fa fa-minus-circle" onclick="decrementQty(${item.id})"></i>
                            <span>${item.qty}</span>
                            <i class="fa fa-plus-circle" onclick="incrementQty(${item.id})"></i>
                        </div>
                    </div>
                </div>
            </div>`;
        }

        document.querySelector('#display').innerHTML = eachItem;
    }
}

function incrementQty(id) {
    items = items.map(item => {
        if (item.id === id) {
            return { ...item, qty: item.qty + 1 };
        }
        return item;
    });
    displayItems(items);
}

function decrementQty(id) {
    items = items.map(item => {
        if (item.id === id && item.qty > 0) {
            return { ...item, qty: item.qty - 1 };
        }
        return item;
    });
    displayItems(items);
}

displayItems(items);
