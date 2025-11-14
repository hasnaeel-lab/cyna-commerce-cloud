import { useState } from 'react';
import { Post } from '@/data/socialData';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { formatDistanceToNow } from 'date-fns';

interface PostCardProps {
  post: Post;
  onLike: (postId: string) => void;
}

const PostCard = ({ post, onLike }: PostCardProps) => {
  const [showAllComments, setShowAllComments] = useState(false);
  const [commentText, setCommentText] = useState('');

  const handleLike = () => {
    onLike(post.id);
  };

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      setCommentText('');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg mb-6 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src={post.user.avatar} alt={post.user.username} />
            <AvatarFallback>{post.user.username[0].toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <div className="flex items-center space-x-1">
              <span className="font-semibold text-sm text-gray-900 dark:text-white">
                {post.user.username}
              </span>
              {post.user.isVerified && (
                <svg
                  className="w-4 h-4 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {formatDistanceToNow(post.timestamp, { addSuffix: true })}
            </span>
          </div>
        </div>
        <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>

      {/* Image */}
      <div className="relative w-full aspect-square">
        <img
          src={post.image}
          alt="Post"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleLike}
              className="transition-transform hover:scale-110"
            >
              {post.isLiked ? (
                <svg
                  className="w-7 h-7 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7 text-gray-900 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              )}
            </button>
            <button className="transition-transform hover:scale-110">
              <svg
                className="w-7 h-7 text-gray-900 dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </button>
            <button className="transition-transform hover:scale-110">
              <svg
                className="w-7 h-7 text-gray-900 dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
          <button className="transition-transform hover:scale-110">
            <svg
              className="w-7 h-7 text-gray-900 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </button>
        </div>

        {/* Likes */}
        <div className="mb-2">
          <span className="font-semibold text-sm text-gray-900 dark:text-white">
            {post.likes.toLocaleString()} likes
          </span>
        </div>

        {/* Caption */}
        <div className="mb-2">
          <span className="font-semibold text-sm text-gray-900 dark:text-white mr-2">
            {post.user.username}
          </span>
          <span className="text-sm text-gray-900 dark:text-white">{post.caption}</span>
        </div>

        {/* Comments */}
        {post.comments.length > 0 && (
          <div className="mb-2">
            {!showAllComments && post.comments.length > 2 && (
              <button
                onClick={() => setShowAllComments(true)}
                className="text-sm text-gray-500 dark:text-gray-400 mb-2"
              >
                View all {post.comments.length} comments
              </button>
            )}
            <div className="space-y-1">
              {(showAllComments ? post.comments : post.comments.slice(0, 2)).map((comment) => (
                <div key={comment.id}>
                  <span className="font-semibold text-sm text-gray-900 dark:text-white mr-2">
                    {comment.user.username}
                  </span>
                  <span className="text-sm text-gray-900 dark:text-white">{comment.text}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add Comment */}
        <form onSubmit={handleComment} className="flex items-center pt-2 border-t border-gray-200 dark:border-gray-800">
          <input
            type="text"
            placeholder="Add a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="flex-1 bg-transparent text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none"
          />
          {commentText.trim() && (
            <Button
              type="submit"
              variant="ghost"
              size="sm"
              className="text-blue-500 hover:text-blue-600 font-semibold"
            >
              Post
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default PostCard;
