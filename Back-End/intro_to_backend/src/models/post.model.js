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
    image:{
        type:String,
        required:true,
        trim:true,

    }

},

{

     timestamps:true
 }

)

export const Post=mongoose.model('Post',postSchema);

/**
 * Create and optionally save a sample Post document.
 * If `mongoUri` is provided the helper will connect, save, and disconnect.
 *
 * @param {Object} sample - Partial Post data (name, discription, age)
 * @param {string} [mongoUri] - Optional MongoDB connection string
 * @returns {Promise<Object>} The saved Post document (or the unsaved model if no save)
 */

/**
 * Return a new Post instance without saving (useful for tests or fixtures).
 * @param {Object} sample
 * @returns {import('mongoose').Document}
 */
export function buildSamplePost(sample = { name: 'Bob', discription: 'Unsaved sample', age: 25 }) {
    return new Post(sample);
}


export async function createAndSaveSamplePost(sample = { name: 'Alice', discription: 'Saved sample', age: 30 }, mongoUri) {
    if (!mongoUri) {
        throw new Error('MongoDB URI is required to save the sample post.');
    }

    try {
        await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
        const post = new Post(sample);
        const savedPost = await post.save();
        return savedPost;
    } catch (error) {
        console.error('Error saving sample post:', error);
        throw error;
    } finally {
        await mongoose.disconnect();
    }
}   

