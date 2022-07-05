import mongoose from "mongoose";



interface StudentI {
    "StudentId": Number,
    "Name": String,
    "Address": String,
    "Fees": {
        "Amount": Number,
        "PaymentDate": Date,
        "Status": String
    },
    "Result": {
        "Hindi": Number,
        "Eng": Number,
        "Math": Number,
        "Total": Number,
        "Grade": String
    }

}


