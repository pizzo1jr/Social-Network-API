const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema(
    {
        // set custom id to avoid confusion with parent thought_id
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')            
        },
        username: {
            type: String,
            required: true
        },
        reactions: [ReactionSchema]
    },
        {
            toJSON: {
                virtuals: true,
                getters: true
            },
            id: false 
        }
);

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// creates Thought model using ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

// export the Thought model
module.exports = Thought;