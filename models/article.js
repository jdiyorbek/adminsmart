const mongoose = require("mongoose")

const articleSchema = new mongoose.Schema({
    uz: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        imgUrl: {
            type: String,
            required: true,
        },
        readMore: {
            type: String,
            required: false,
            default: "off"
        },
        text: {
            type: String,
            required: false,
        },
        view: {
            type: Number,
            default: 0,
        },
        date: {
            type: Date,
            default: new Date().getTime()
        },
    },
    ru: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        imgUrl: {
            type: String,
            required: true,
        },
        readMore: {
            type: String,
            required: false,
            default: "off"
        },
        text: {
            type: String,
            required: false,
        },
        view: {
            type: Number,
            default: 0,
        },
        date: {
            type: Date,
            default: new Date().getTime()
        },
    }
})

const Article = mongoose.model("Article", articleSchema)

module.exports = Article