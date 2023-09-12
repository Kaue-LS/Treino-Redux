import { useDispatch } from "react-redux";
import { reactionAdded } from './postSlice'

export const reactionEmoji = {
    thumbsUp: '1',
    wow: '2',
    heart: '3',
    rocket: '4',
    coffee: '5'
}
const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch()

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                name={name}
                type='button'
                className="reactionButton"
                onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))}>
                {emoji} {post.reactions[name]}
            </button>
        )
    })
    return (
        <div>
            {reactionButtons}
        </div>
    )
}

export default ReactionButtons