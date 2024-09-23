import mongoose from "mongoose";

const herbsSchema = mongoose.Schema(
    {
    scientificName : {
        type: String,
        required: true,
    },
    placeToFind : {
        type: String,
        required: true,
    },
    preClinical : {
        type: String,
        required: true,
    },
    clinical : {
        type: String,
        required: true,
    },
    howToUse : {
        type: String,
        required: true,
    },
   references : {
        type: String,
        required: true,
    },
    
}   
);

export const Herbs = mongoose.model('Herbs', herbsSchema );

