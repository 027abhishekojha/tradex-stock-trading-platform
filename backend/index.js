const express = require("express")
require("dotenv").config();
const mongoose = require("mongoose");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoute = require("./Routes/UserAuthRoute");



const mongo_URI = process.env.MONGO_URL;

const { OrdersModel } = require("./model/OrdersModel");
const { OrdersSchema } = require("./schemas/OrdersSchema");


const app = express();
app.use(cors(
    {
        origin: ["http://localhost:3000"],
        methods: ['GET', "POST", "PUT", "DELETE"],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true
    }
));


app.use(bodyParser.json());


app.get("/addHoldings", async (req, res) => {
    const tempHoldings = [
        {
            name: "BHARTIARTL",
            qty: 2,
            avg: 538.05,
            price: 541.15,
            net: "+0.58%",
            day: "+2.99%",
        },
        {
            name: "HDFCBANK",
            qty: 2,
            avg: 1383.4,
            price: 1522.35,
            net: "+10.04%",
            day: "+0.11%",
        },
        {
            name: "HINDUNILVR",
            qty: 1,
            avg: 2335.85,
            price: 2417.4,
            net: "+3.49%",
            day: "+0.21%",
        },
        {
            name: "INFY",
            qty: 1,
            avg: 1350.5,
            price: 1555.45,
            net: "+15.18%",
            day: "-1.60%",
            isLoss: true,
        },
        {
            name: "ITC",
            qty: 5,
            avg: 202.0,
            price: 207.9,
            net: "+2.92%",
            day: "+0.80%",
        },
        {
            name: "KPITTECH",
            qty: 5,
            avg: 250.3,
            price: 266.45,
            net: "+6.45%",
            day: "+3.54%",
        },
        {
            name: "M&M",
            qty: 2,
            avg: 809.9,
            price: 779.8,
            net: "-3.72%",
            day: "-0.01%",
            isLoss: true,
        },
        {
            name: "RELIANCE",
            qty: 1,
            avg: 2193.7,
            price: 2112.4,
            net: "-3.71%",
            day: "+1.44%",
        },
        {
            name: "SBIN",
            qty: 4,
            avg: 324.35,
            price: 430.2,
            net: "+32.63%",
            day: "-0.34%",
            isLoss: true,
        },
        {
            name: "SGBMAY29",
            qty: 2,
            avg: 4727.0,
            price: 4719.0,
            net: "-0.17%",
            day: "+0.15%",
        },
        {
            name: "TATAPOWER",
            qty: 5,
            avg: 104.2,
            price: 124.15,
            net: "+19.15%",
            day: "-0.24%",
            isLoss: true,
        },
        {
            name: "TCS",
            qty: 1,
            avg: 3041.7,
            price: 3194.8,
            net: "+5.03%",
            day: "-0.25%",
            isLoss: true,
        },
        {
            name: "WIPRO",
            qty: 4,
            avg: 489.3,
            price: 577.75,
            net: "+18.08%",
            day: "+0.32%",
        },
        {
            name: "AOX",
            price: 853.4,
            percent: "2.04%",
            isDown: false,
        },
    ];

    tempHoldings.forEach((item) => {
        let newHolding = new HoldingsModel({
            name: item.name,
            qty: item.qty,
            avg: item.avg,
            price: item.price,
            net: item.net,
            day: item.day,
            isLoss: item.isLoss,
        });

        newHolding.save();
    });

    res.send("Data Added SuccessFully inside Holdings Collection");
});

app.get("/addPositions", async (req, res) => {

    try {
        const tempPosition = [
            {
                product: "CNC",
                name: "EVEREADY",
                qty: 2,
                avg: 316.27,
                price: 312.35,
                net: "+0.58%",
                day: "-1.24%",
                isLoss: true,
            },
            {
                product: "CNC",
                name: "JUBLFOOD",
                qty: 1,
                avg: 3124.75,
                price: 3082.65,
                net: "+10.04%",
                day: "-1.35%",
                isLoss: true,
            },


        ];
        await PositionsModel.deleteMany({});
        await PositionsModel.insertMany(tempPosition)
        res.send("Position Data Added SuccessFully")
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }

});


app.get("/getAllHoldings", async (req, res) => {
    try {
        let allHoldings = await HoldingsModel.find({});
        let result = res.json(allHoldings)
        res.json(result);
        return result;
    } catch (error) {
        console.log(error);
    }
})

app.get("/getAllPositions", async (req, res) => {
    try {
        let allPositions = await PositionsModel.find({})
        let result = res.json(allPositions)
        res.json(result);
        return result;
    } catch (error) {
        console.log(error);

    }
});

app.get("/allOrders", async (req, res) => {
    try {
        let allOrders = await OrdersModel.find({})
        let result = res.json(allOrders)
        return result;
    } catch (error) {
        console.log(error);
    }
});


// buy Order
app.post("/newOrder", async (req, res) => {

    try {
        const { name, qty, price, mode } = req.body;

        const newOrder = new OrdersModel({ name, qty, price, mode });
        const saveOrder = await newOrder.save();

        return res.status(200).json({
            message: "Order added SuccessFully",
            data: saveOrder
        });
    } catch (error) {
        console.error("Error creating order :", error);
        return res.status(500).json({
            error: error.message || "failed to create order",
        });
    }
});


// Sell Orders
// app.post("/sellOrder", async (req, res) => {
//     try {
//         const {name, qty, price, mode} = req.body;
//         const newOrder = new OrdersModel({name, qty, price, mode});
//         const saveOrder = await newOrder.save();

//         return res.status(200).json({
//             message: "Order added SuccessFully",
//             data: saveOrder
//         });
//     } catch (error) {
//          console.error("Error creating order :", error);
//         return res.status(500).json({
//             error: error.message || "failed to create order",
//         });
//     }
// });

// POST /sellOrder
app.post("/sellOrder", async (req, res) => {
    try {
        const { name, qty, price } = req.body;
        const orderQty = Number(qty);

        // 1. Find if the user owns this stock in Holdings
        const holding = await HoldingsModel.findOne({ name });

        // 2. Reject if they don't own it or don't have enough shares
        if (!holding || holding.qty < orderQty) {
            return res.status(400).json({
                error: `Insufficient holdings. You own ${holding ? holding.qty : 0} shares of ${name}.`,
            });
        }

        // 3. Deduct from Holdings (or delete if qty reaches 0)
        holding.qty -= orderQty;
        if (holding.qty === 0) {
            await HoldingsModel.deleteOne({ _id: holding._id });
        } else {
            await holding.save();
        }

        // 4. Record the transaction in Orders
        const newOrder = await OrdersModel.create({
            name,
            qty: orderQty,
            price: Number(price),
            mode: "SELL",
        });

        return res.status(201).json({
            message: "Sell order executed successfully",
            data: newOrder,
        });
    } catch (error) {
        console.error("Sell order error:", error);
        return res.status(500).json({ error: error.message });
    }
});


app.use("/", authRoute);

app.listen(process.env.EXPRESS_SERVER_PORT, () => {
    console.log(`Express App Started on port : ${process.env.EXPRESS_SERVER_PORT}`);
    try {
        mongoose.connect(mongo_URI, {dbName : "login_signup"});
        console.log("Mongo Db Connected Successfully")
    } catch (error) {
        console.log("some error occured", error);

    }


})

app.get("/", (req, res) => {
    res.send(`Port 404 is working`)
})