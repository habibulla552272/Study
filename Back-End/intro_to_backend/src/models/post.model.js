import mongoose, {Schema} from "mongoose";

const postSchema=new Schema(

{
    name:{
        type:String,
        required:true,
        trim:true,

    },
    discription:{
        type:String,
        required:true,
        trim:true,

    },
    age:{
        type:Number,
        required:true,
        min: 1,
        max:150
    },
    // image:{
    //     type:String,
    //     required:true,
    //     trim:true,

    // }

},

{

     timestamps:true
 }

)

export const Post=mongoose.model('Post',postSchema);


